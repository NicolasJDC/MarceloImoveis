# Marcelo Imóveis - Formulário de Diagnóstico & Gestão de Temporada

Aplicação web moderna, interativa e responsiva para coleta de dados estratégicos, histórico de preços, custos operacionais e inventário estrutural de imóveis de temporada.

Desenvolvido para atender aos padrões visuais e funcionais de **Marcelo Imóveis**, seguindo à risca a paleta institucional e o design system definido em `design.md`.

---

## 🎨 Design System e Identidade Visual

- **Cor Primária (Confiança e Institucional):** Azul Marinho (`#1E3A8A` / `#172554`)
- **Cor Secundária (Acolhimento e Destaques):** Dourado / Areia Suave (`#D4AF37`)
- **Ação / Conversão (CTA):** Verde Esmeralda (`#10B981` / `#059669`) — botões de avançar, envio e conexão direta com WhatsApp
- **Backgrounds:** Off-white (`#F9FAFB`) e Branco Puro (`#FFFFFF`) para cards e seções
- **Tipografia:**
  - Títulos e Destaques: **Montserrat** (Google Fonts)
  - Corpo de Texto e Interface: **Inter** (Google Fonts)

---

## 🚀 Tecnologias (Stack)

- **Frontend:** React 18 + TypeScript + Vite
- **Estilização:** Tailwind CSS (com paleta customizada no `tailwind.config.js`)
- **Ícones:** Lucide React
- **Efeitos:** Canvas Confetti (ao finalizar o envio)
- **Banco de Dados:** Google Firebase (Cloud Firestore) com fallback automático para LocalStorage (modo demonstração/offline)
- **Deploy:** Vercel + GitHub

---

## 📋 Estrutura do Formulário (Baseado em `perguntas.md`)

1. **Identificação Inicial:** Nome do proprietário/responsável, WhatsApp, apelido do imóvel e e-mail.
2. **Seção 1: Histórico de Preços e Faturamento (Gestão da sua mãe):**
   - Diária de semana vs. final de semana
   - Pacotes especiais (Réveillon, Carnaval, feriados prolongados)
   - Ocupação na alta e baixa temporada
   - Taxa de limpeza separada
   - Forma de pagamento e caução de garantia
3. **Seção 2: Custos e Operação da Casa:**
   - Custos fixos mensais (água, luz, internet, IPTU, piscina)
   - Responsável pela limpeza, vistoria e entrega de chaves
   - Controle da agenda de datas (caderno, planilha, celular)
4. **Seção 3: Estrutura Física e Segurança do Imóvel:**
   - Capacidade máxima e camas (casal, solteiro, colchões)
   - Quartos, suítes, banheiros e vagas de garagem
   - Checklist de lazer (piscina, churrasqueira, ar-condicionado, Wi-Fi, etc.)
   - Checklist de segurança (muros altos, câmeras, cerca elétrica, portão eletrônico)
   - Distância da praia e comércios
   - Regras da casa (pets, limite de som, roupa de cama)
5. **Seção 4: Clientes Antigos e Divulgação Atual:**
   - Histórico e contatos de quem já alugou
   - Cadastros anteriores em plataformas (Airbnb, Booking) e avaliações
   - Instagram e histórico com botão "Turbinar"
   - Banco de fotos e vídeos da casa
6. **Revisão Geral & Confirmação:** Permite conferir e editar qualquer seção antes do envio final.
7. **Tela de Sucesso com Ação WhatsApp:** Gera link direto com mensagem pronta para envio ao WhatsApp do Marcelo.
8. **Painel do Gestor (Admin):** Visualizador de todas as respostas recebidas com exportação para Excel (CSV) e JSON.

---

## 🛠️ Como Executar Localmente

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará rodando em `http://localhost:5173`.

---

## 🔥 Configuração do Firebase Firestore

O projeto funciona imediatamente em modo local, mas para conectar ao seu banco de dados Firebase em nuvem:

1. Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto (ex: `marcelo-imoveis`).
2. No menu lateral, clique em **Criação > Firestore Database** e clique em **Criar banco de dados** (escolha o modo de teste ou configure as regras).
3. Em **Visão geral do projeto > Configurações do Projeto (ícone de engrenagem)**, role até a seção "Seus aplicativos" e adicione um aplicativo **Web** (`</>`).
4. Copie as chaves fornecidas e crie um arquivo `.env.local` na raiz deste projeto (baseado em `.env.example`):

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

### Regras do Firestore (Segurança):
No console do Firebase Firestore, na aba **Regras**, configure para permitir leitura e escrita pelo formulário:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /respostas_questionario/{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## 🐙 Como Subir para o GitHub

1. No terminal do seu computador (dentro da pasta `MarceloImoveis`), inicialize o repositório git:
```bash
git init
git add .
git commit -m "feat: formulario onboarding marcelo imoveis com design system e firebase"
```

2. Crie um repositório no seu GitHub (ex: `marcelo-imoveis-formulario`) e conecte:
```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/marcelo-imoveis-formulario.git
git push -u origin main
```

---

## ⚡ Como Fazer o Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **Add New... > Project**.
3. Selecione o repositório `marcelo-imoveis-formulario` e clique em **Import**.
4. Em **Environment Variables**, adicione as mesmas variáveis do seu Firebase:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
5. Clique em **Deploy**.
6. Em menos de 1 minuto seu formulário estará online com HTTPS gratuito e pronto para uso!

