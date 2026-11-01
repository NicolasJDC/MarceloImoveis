import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Stepper } from './components/Stepper';
import { StepIntro } from './components/StepIntro';
import { StepPrices } from './components/StepPrices';
import { StepCosts } from './components/StepCosts';
import { StepStructure } from './components/StepStructure';
import { StepClients } from './components/StepClients';
import { StepReview } from './components/StepReview';
import { SuccessModal } from './components/SuccessModal';
import { AdminViewer } from './components/AdminViewer';
import { saveFormSubmission, isFirebaseConfigured } from './lib/firebase';
import type { OnboardingFormData, StepKey } from './types/form';
import { Shield, Lock, Database } from 'lucide-react';

const DRAFT_STORAGE_KEY = 'marcelo_imoveis_draft_v1';

const initialFormData: OnboardingFormData = {
  identificacao: {
    nomeResponsavel: '',
    whatsapp: '',
    email: '',
    nomeOuIdentificadorImovel: '',
  },
  precos: {
    valorDiariaSemana: '',
    valorDiariaFimDeSemana: '',
    obsDiarias: '',
    pacoteReveillon: '',
    pacoteCarnaval: '',
    pacoteFeriados: '',
    obsPacotes: '',
    ocupacaoAltaTemporada: '',
    ocupacaoBaixaTemporada: '',
    cobraTaxaLimpeza: '',
    valorTaxaLimpeza: '',
    formaPagamento: '',
    pedeCaucao: '',
    valorCaucao: '',
  },
  custos: {
    custosFixosMensais: '',
    detalhesCustosFixos: '',
    responsavelOperacao: '',
    custoDiariaLimpeza: '',
    ondeAnotaAgenda: [],
    outroOndeAnotaAgenda: '',
  },
  estrutura: {
    capacidadeMaxima: '',
    camasCasal: '',
    camasSolteiro: '',
    colchoesAvulsos: '',
    obsAcomodacoes: '',
    qtdQuartos: '',
    qtdSuites: '',
    qtdBanheiros: '',
    vagasGaragem: '',
    itensLazer: [],
    detalhesLazer: '',
    itensSeguranca: [],
    detalhesSeguranca: '',
    distanciaPraia: '',
    comerciosProximos: '',
    aceitaPets: '',
    horarioLimiteSom: '',
    roupaDeCama: '',
    outrasRegras: '',
  },
  divulgacao: {
    ondeEstaoContatos: '',
    consegueAcessoAparelho: '',
    obsContatos: '',
    jaCadastradaPlataformas: '',
    detalhesPlataformas: '',
    instagramPerfil: '',
    verbaTurbinar: '',
    obsInstagram: '',
    statusFotosVideos: '',
    linkOuObsFotos: '',
  },
};

export const App: React.FC = () => {
  const [formData, setFormData] = useState<OnboardingFormData>(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Erro ao carregar rascunho anterior', e);
    }
    return initialFormData;
  });

  const [currentStep, setCurrentStep] = useState<StepKey>('intro');
  const [completedSteps, setCompletedSteps] = useState<Set<StepKey>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isOfflineSubmission, setIsOfflineSubmission] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [savedLocally, setSavedLocally] = useState(true);

  // Autosave no LocalStorage a cada alteração
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
      setSavedLocally(true);
    } catch (e) {
      console.error('Erro ao salvar rascunho:', e);
    }
  }, [formData]);

  const updateData = (section: keyof OnboardingFormData, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value,
      },
    }));
  };

  const stepsOrder: StepKey[] = ['intro', 'precos', 'custos', 'estrutura', 'divulgacao', 'revisao'];
  const currentStepIndex = stepsOrder.indexOf(currentStep);

  const markCompletedAndGo = (nextStep: StepKey) => {
    setCompletedSteps((prev) => new Set(prev).add(currentStep));
    setCurrentStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < stepsOrder.length) {
      markCompletedAndGo(stepsOrder[nextIndex]);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(stepsOrder[prevIndex]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await saveFormSubmission(formData);
      if (res.success) {
        setSubmittedId(res.id);
        setIsOfflineSubmission(Boolean(res.isOffline));
        // Limpa o rascunho após envio concluído
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Erro ao enviar:', e);
      alert('Houve um imprevisto ao enviar os dados. Uma cópia de segurança foi gravada no navegador.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    setSubmittedId(null);
    setCompletedSteps(new Set());
    setCurrentStep('intro');
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col selection:bg-brand-gold-light selection:text-brand-navy">
      {/* Header Fixo */}
      <Header
        currentStepIndex={currentStepIndex}
        totalSteps={stepsOrder.length}
        onOpenAdmin={() => setIsAdminOpen(true)}
        savedLocally={savedLocally}
        isFirebaseActive={isFirebaseConfigured()}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Stepper de Navegação */}
        <Stepper
          currentStep={currentStep}
          onSelectStep={(step) => {
            setCurrentStep(step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedSteps={completedSteps}
        />

        {/* Componente do Passo Atual */}
        {currentStep === 'intro' && (
          <StepIntro
            formData={formData}
            updateData={updateData}
            onNext={handleNext}
          />
        )}

        {currentStep === 'precos' && (
          <StepPrices
            formData={formData}
            updateData={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {currentStep === 'custos' && (
          <StepCosts
            formData={formData}
            updateData={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {currentStep === 'estrutura' && (
          <StepStructure
            formData={formData}
            updateData={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {currentStep === 'divulgacao' && (
          <StepClients
            formData={formData}
            updateData={updateData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

        {currentStep === 'revisao' && (
          <StepReview
            formData={formData}
            onGoToStep={(step) => {
              setCurrentStep(step);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onPrev={handlePrev}
          />
        )}
      </main>

      {/* Modal de Sucesso */}
      {submittedId && (
        <SuccessModal
          submissionId={submittedId}
          formData={formData}
          onReset={handleResetForm}
          onOpenAdmin={() => {
            setSubmittedId(null);
            setIsAdminOpen(true);
          }}
          isOffline={isOfflineSubmission}
        />
      )}

      {/* Painel Administrativo de Respostas */}
      <AdminViewer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-200/80 py-8 text-center text-xs text-gray-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Dados protegidos e integrados ao banco de dados Firebase.</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Marcelo Imóveis • Todos os direitos reservados</span>
          </div>
          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-gray-400 hover:text-brand-navy flex items-center gap-1 transition-colors"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Painel do Gestor</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;

