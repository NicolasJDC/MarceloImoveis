export interface OnboardingFormData {
  // Identificação inicial
  identificacao: {
    nomeResponsavel: string;
    whatsapp: string;
    email?: string;
    nomeOuIdentificadorImovel: string;
  };

  // 1. Histórico de Preços e Faturamento
  precos: {
    valorDiariaSemana: string;
    valorDiariaFimDeSemana: string;
    obsDiarias: string;

    pacoteReveillon: string;
    pacoteCarnaval: string;
    pacoteFeriados: string;
    obsPacotes: string;

    ocupacaoAltaTemporada: string;
    ocupacaoBaixaTemporada: string;

    cobraTaxaLimpeza: 'sim' | 'nao' | 'incluso_na_diaria' | '';
    valorTaxaLimpeza: string;

    formaPagamento: string;
    pedeCaucao: 'sim' | 'nao' | 'as_vezes' | '';
    valorCaucao: string;
  };

  // 2. Custos e Operação da Casa
  custos: {
    custosFixosMensais: string;
    detalhesCustosFixos: string;

    responsavelOperacao: string;
    custoDiariaLimpeza: string;

    ondeAnotaAgenda: string[];
    outroOndeAnotaAgenda: string;
  };

  // 3. Estrutura Física e Segurança do Imóvel
  estrutura: {
    capacidadeMaxima: string;
    camasCasal: string;
    camasSolteiro: string;
    colchoesAvulsos: string;
    obsAcomodacoes: string;

    qtdQuartos: string;
    qtdSuites: string;
    qtdBanheiros: string;
    vagasGaragem: string;

    itensLazer: string[];
    detalhesLazer: string;

    itensSeguranca: string[];
    detalhesSeguranca: string;

    distanciaPraia: string;
    comerciosProximos: string;

    aceitaPets: 'sim' | 'nao' | 'sob_consulta' | '';
    horarioLimiteSom: string;
    roupaDeCama: 'fornece' | 'hospede_leva' | 'opcional_com_taxa' | '';
    outrasRegras: string;
  };

  // 4. Clientes Antigos e Divulgação Atual
  divulgacao: {
    ondeEstaoContatos: string;
    consegueAcessoAparelho: 'sim' | 'precisa_ajuda' | 'nao' | '';
    obsContatos: string;

    jaCadastradaPlataformas: 'sim' | 'nao' | 'apenas_no_passado' | '';
    detalhesPlataformas: string;

    instagramPerfil: string;
    verbaTurbinar: string;
    obsInstagram: string;

    statusFotosVideos: 'ja_tem_pasta' | 'precisa_tirar_novas' | 'tem_poucas' | '';
    linkOuObsFotos: string;
  };

  // Metadados do envio
  metadata?: {
    id?: string;
    criadoEm?: string;
    atualizadoEm?: string;
    ip?: string;
    status?: 'enviado' | 'rascunho';
  };
}

export type StepKey = 'intro' | 'precos' | 'custos' | 'estrutura' | 'divulgacao' | 'revisao';

export interface StepInfo {
  id: StepKey;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
}

