import type { OnboardingFormData } from '../types/form';

const firebaseConfig = {
  apiKey: "AIzaSyDSjU8QWbpSQvVHiX2okR2ZGkxv5Kwygjc",
  authDomain: "marceloimovi.firebaseapp.com",
  projectId: "marceloimovi",
  storageBucket: "marceloimovi.firebasestorage.app",
  messagingSenderId: "799091078904",
  appId: "1:799091078904:web:ff9473d137ca37b3b2ed0d",
  measurementId: "G-GQ9KQTTD0K"
};

export const isFirebaseConfigured = (): boolean => {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.apiKey !== 'SUA_API_KEY_AQUI' &&
    firebaseConfig.projectId !== 'SEU_PROJECT_ID'
  );
};

const LOCAL_STORAGE_KEY = 'marcelo_imoveis_respostas';

// Salva submissão no Firebase Firestore via REST API oficial do Google Cloud ou LocalStorage
export async function saveFormSubmission(data: OnboardingFormData): Promise<{ success: boolean; id: string; isOffline?: boolean }> {
  const timestamp = new Date().toISOString();
  const submissionData: OnboardingFormData = {
    ...data,
    metadata: {
      ...data.metadata,
      criadoEm: timestamp,
      status: 'enviado',
    },
  };

  if (isFirebaseConfigured()) {
    try {
      const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/respostas_questionario?key=${firebaseConfig.apiKey}`;

      const payload = {
        fields: {
          dataJson: { stringValue: JSON.stringify(submissionData) },
          nomeResponsavel: { stringValue: submissionData.identificacao?.nomeResponsavel || '' },
          nomeImovel: { stringValue: submissionData.identificacao?.nomeOuIdentificadorImovel || '' },
          whatsapp: { stringValue: submissionData.identificacao?.whatsapp || '' },
          criadoEm: { stringValue: timestamp },
        },
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn('Erro ao salvar no Firestore via REST:', response.status, errorText);
        throw new Error(`Firestore REST error: ${response.status}`);
      }

      const resData = await response.json();
      // O Firestore retorna "name": "projects/.../databases/(default)/documents/respostas_questionario/DOC_ID"
      const docPathParts = (resData.name || '').split('/');
      const generatedId = docPathParts[docPathParts.length - 1] || 'doc_' + Date.now();

      // Salva cópia de backup no LocalStorage
      saveToLocalStorage(generatedId, submissionData);

      return { success: true, id: generatedId, isOffline: false };
    } catch (err) {
      console.error('Falha ao comunicar com o Firestore, gravando backup no LocalStorage:', err);
      const fallbackId = 'local_' + Date.now();
      saveToLocalStorage(fallbackId, submissionData);
      return { success: true, id: fallbackId, isOffline: true };
    }
  } else {
    // Modo local / Demonstração
    const localId = 'local_' + Date.now();
    saveToLocalStorage(localId, submissionData);
    return { success: true, id: localId, isOffline: true };
  }
}

// Recupera respostas para o painel de visualização (Admin)
export async function getFormSubmissions(): Promise<OnboardingFormData[]> {
  const results: OnboardingFormData[] = [];

  if (isFirebaseConfigured()) {
    try {
      const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/respostas_questionario?key=${firebaseConfig.apiKey}&pageSize=100`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        if (data.documents && Array.isArray(data.documents)) {
          for (const doc of data.documents) {
            try {
              const docPathParts = (doc.name || '').split('/');
              const docId = docPathParts[docPathParts.length - 1];
              const rawJson = doc.fields?.dataJson?.stringValue;
              if (rawJson) {
                const parsed = JSON.parse(rawJson) as OnboardingFormData;
                results.push({
                  ...parsed,
                  metadata: {
                    ...parsed.metadata,
                    id: docId,
                  },
                });
              }
            } catch (parseError) {
              console.warn('Erro ao decodificar documento Firestore:', parseError);
            }
          }
        }

        // Ordena por data decrescente
        results.sort((a, b) => {
          const dateA = a.metadata?.criadoEm ? new Date(a.metadata.criadoEm).getTime() : 0;
          const dateB = b.metadata?.criadoEm ? new Date(b.metadata.criadoEm).getTime() : 0;
          return dateB - dateA;
        });

        if (results.length > 0) {
          return results;
        }
      }
    } catch (err) {
      console.warn('Erro ao consultar Firestore, lendo do LocalStorage:', err);
    }
  }

  // Fallback para LocalStorage
  return getLocalStorageSubmissions();
}

function saveToLocalStorage(id: string, data: OnboardingFormData) {
  try {
    const existing = getLocalStorageSubmissions();
    const itemWithId: OnboardingFormData = { ...data, metadata: { ...data.metadata, id } };
    existing.unshift(itemWithId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error('Erro ao salvar no LocalStorage:', e);
  }
}

function getLocalStorageSubmissions(): OnboardingFormData[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as OnboardingFormData[];
  } catch (e) {
    console.error('Erro ao ler do LocalStorage:', e);
    return [];
  }
}
