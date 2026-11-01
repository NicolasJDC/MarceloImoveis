import React, { useState, useEffect } from 'react';
import { X, Download, Database, RefreshCw, Calendar, User, Search, Eye, ExternalLink } from 'lucide-react';
import { getFormSubmissions, isFirebaseConfigured } from '../lib/firebase';
import type { OnboardingFormData } from '../types/form';

interface AdminViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminViewer: React.FC<AdminViewerProps> = ({ isOpen, onClose }) => {
  const [submissions, setSubmissions] = useState<OnboardingFormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSub, setSelectedSub] = useState<OnboardingFormData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getFormSubmissions();
      setSubmissions(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = submissions.filter((sub) => {
    const term = searchTerm.toLowerCase();
    const nome = sub.identificacao?.nomeResponsavel?.toLowerCase() || '';
    const imovel = sub.identificacao?.nomeOuIdentificadorImovel?.toLowerCase() || '';
    return nome.includes(term) || imovel.includes(term);
  });

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(submissions, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respostas_marcelo_imoveis_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const exportCSV = () => {
    if (submissions.length === 0) return;
    
    // Header
    const headers = [
      'Data de Envio',
      'Responsável',
      'WhatsApp',
      'Imóvel',
      'Diária Semana',
      'Diária Fim de Semana',
      'Pacote Réveillon',
      'Pacote Carnaval',
      'Ocupação Alta',
      'Ocupação Baixa',
      'Taxa Limpeza',
      'Forma Pagamento',
      'Custos Fixos Mensais',
      'Quem faz Limpeza/Vistoria',
      'Controle de Agenda',
      'Capacidade Máx',
      'Quartos',
      'Suítes',
      'Banheiros',
      'Vagas',
      'Distância Praia',
      'Aceita Pets',
      'Horário Som',
      'Roupa de Cama',
      'Contatos Antigos Onde',
      'Cadastrada Plataformas',
      'Instagram',
      'Verba Turbinar',
      'Status Fotos/Vídeos'
    ];

    const rows = submissions.map((s) => [
      s.metadata?.criadoEm ? new Date(s.metadata.criadoEm).toLocaleString('pt-BR') : '',
      `"${s.identificacao?.nomeResponsavel || ''}"`,
      `"${s.identificacao?.whatsapp || ''}"`,
      `"${s.identificacao?.nomeOuIdentificadorImovel || ''}"`,
      `"${s.precos?.valorDiariaSemana || ''}"`,
      `"${s.precos?.valorDiariaFimDeSemana || ''}"`,
      `"${s.precos?.pacoteReveillon || ''}"`,
      `"${s.precos?.pacoteCarnaval || ''}"`,
      `"${s.precos?.ocupacaoAltaTemporada || ''}"`,
      `"${s.precos?.ocupacaoBaixaTemporada || ''}"`,
      `"${s.precos?.cobraTaxaLimpeza === 'sim' ? s.precos.valorTaxaLimpeza : s.precos?.cobraTaxaLimpeza || ''}"`,
      `"${s.precos?.formaPagamento || ''}"`,
      `"${s.custos?.custosFixosMensais || ''}"`,
      `"${s.custos?.responsavelOperacao || ''}"`,
      `"${(s.custos?.ondeAnotaAgenda || []).join('; ')}"`,
      `"${s.estrutura?.capacidadeMaxima || ''}"`,
      `"${s.estrutura?.qtdQuartos || ''}"`,
      `"${s.estrutura?.qtdSuites || ''}"`,
      `"${s.estrutura?.qtdBanheiros || ''}"`,
      `"${s.estrutura?.vagasGaragem || ''}"`,
      `"${s.estrutura?.distanciaPraia || ''}"`,
      `"${s.estrutura?.aceitaPets || ''}"`,
      `"${s.estrutura?.horarioLimiteSom || ''}"`,
      `"${s.estrutura?.roupaDeCama || ''}"`,
      `"${s.divulgacao?.ondeEstaoContatos || ''}"`,
      `"${s.divulgacao?.jaCadastradaPlataformas || ''}"`,
      `"${s.divulgacao?.instagramPerfil || ''}"`,
      `"${s.divulgacao?.verbaTurbinar || ''}"`,
      `"${s.divulgacao?.statusFotosVideos || ''}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respostas_marcelo_imoveis_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header do Modal */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-brand-bg/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-sm">
              <Database className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-lg text-brand-navy">
                Painel de Respostas Recebidas
              </h2>
              <p className="text-xs text-gray-500">
                {isFirebaseConfigured() ? 'Conectado ao Firebase Cloud Firestore' : 'Armazenamento Local / Navegador'}
                {' • '}
                {submissions.length} {submissions.length === 1 ? 'resposta' : 'respostas'} registrada(s)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 text-gray-500 hover:text-brand-navy rounded-xl hover:bg-gray-100 transition-colors"
              title="Recarregar"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-600 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Barra de Ações & Busca */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por responsável ou imóvel..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-gray-200 text-xs focus:border-brand-navy bg-brand-bg/30"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={exportCSV}
              disabled={submissions.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Exportar Excel (CSV)</span>
            </button>

            <button
              onClick={exportJSON}
              disabled={submissions.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-brand-navy" />
              <span>Exportar JSON</span>
            </button>
          </div>
        </div>

        {/* Conteúdo com Listagem e Detalhes */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <Database className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-700">Nenhuma resposta encontrada.</p>
              <p className="text-xs text-gray-400 mt-1">Preencha o formulário e clique em enviar para registrar a primeira submissão.</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.metadata?.id || idx}
                className="bg-brand-bg/50 rounded-2xl border border-gray-200/80 p-4 hover:border-brand-navy/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/50 pb-3 mb-3">
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-brand-navy flex items-center gap-2">
                      {item.identificacao?.nomeOuIdentificadorImovel || 'Imóvel sem nome'}
                      <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-blue-100/70 text-brand-navy font-mono">
                        {item.metadata?.id?.slice(0, 8)}...
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-gray-400" />
                        {item.identificacao?.nomeResponsavel}
                      </span>
                      {item.identificacao?.whatsapp && (
                        <span>• Tel: {item.identificacao.whatsapp}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {item.metadata?.criadoEm ? new Date(item.metadata.criadoEm).toLocaleString('pt-BR') : 'Data não registrada'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSub(selectedSub === item ? null : item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{selectedSub === item ? 'Ocultar Detalhes' : 'Ver Todas Respostas'}</span>
                  </button>
                </div>

                {/* Resumo Rápido em Linha */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-400 text-[10px] block uppercase font-bold">Diária Semana/FDS</span>
                    <span className="font-semibold text-brand-navy">{item.precos?.valorDiariaSemana || '-'} / {item.precos?.valorDiariaFimDeSemana || '-'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-400 text-[10px] block uppercase font-bold">Custos Fixos</span>
                    <span className="font-semibold text-brand-navy">{item.custos?.custosFixosMensais || '-'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-400 text-[10px] block uppercase font-bold">Capacidade / Quartos</span>
                    <span className="font-semibold text-brand-navy">{item.estrutura?.capacidadeMaxima || '-'} ({item.estrutura?.qtdQuartos || '-'} qts)</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-400 text-[10px] block uppercase font-bold">Distância Praia</span>
                    <span className="font-semibold text-brand-navy">{item.estrutura?.distanciaPraia || '-'}</span>
                  </div>
                </div>

                {/* Detalhes Expansíveis */}
                {selectedSub === item && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 text-xs bg-white p-4 rounded-xl border">
                    <div>
                      <h4 className="font-bold text-brand-navy font-montserrat mb-1">1. Histórico de Preços</h4>
                      <p><strong>Pacote Réveillon:</strong> {item.precos?.pacoteReveillon || '-'}</p>
                      <p><strong>Pacote Carnaval:</strong> {item.precos?.pacoteCarnaval || '-'}</p>
                      <p><strong>Feriados:</strong> {item.precos?.pacoteFeriados || '-'}</p>
                      <p><strong>Ocupação Alta/Baixa:</strong> {item.precos?.ocupacaoAltaTemporada || '-'} | {item.precos?.ocupacaoBaixaTemporada || '-'}</p>
                      <p><strong>Taxa Limpeza:</strong> {item.precos?.cobraTaxaLimpeza} ({item.precos?.valorTaxaLimpeza || '-'})</p>
                      <p><strong>Forma de Pagamento:</strong> {item.precos?.formaPagamento || '-'}</p>
                      <p><strong>Caução:</strong> {item.precos?.pedeCaucao} ({item.precos?.valorCaucao || '-'})</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="font-bold text-brand-navy font-montserrat mb-1">2. Custos e Operação</h4>
                      <p><strong>Custos Mensais:</strong> {item.custos?.custosFixosMensais || '-'}</p>
                      <p><strong>Detalhes Gastos:</strong> {item.custos?.detalhesCustosFixos || '-'}</p>
                      <p><strong>Responsável Operação:</strong> {item.custos?.responsavelOperacao || '-'}</p>
                      <p><strong>Valor Diária Limpeza:</strong> {item.custos?.custoDiariaLimpeza || '-'}</p>
                      <p><strong>Onde Anota Agenda:</strong> {(item.custos?.ondeAnotaAgenda || []).join(', ')} ({item.custos?.outroOndeAnotaAgenda || ''})</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="font-bold text-brand-navy font-montserrat mb-1">3. Estrutura Física e Segurança</h4>
                      <p><strong>Acomodações:</strong> {item.estrutura?.camasCasal || 0} camas casal, {item.estrutura?.camasSolteiro || 0} solteiro, {item.estrutura?.colchoesAvulsos || 0} colchões</p>
                      <p><strong>Distribuição:</strong> {item.estrutura?.qtdQuartos} quartos ({item.estrutura?.qtdSuites} suítes), {item.estrutura?.qtdBanheiros} banheiros, {item.estrutura?.vagasGaragem} vagas</p>
                      <p><strong>Lazer:</strong> {(item.estrutura?.itensLazer || []).join(', ') || '-'} | {item.estrutura?.detalhesLazer || ''}</p>
                      <p><strong>Segurança:</strong> {(item.estrutura?.itensSeguranca || []).join(', ') || '-'} | {item.estrutura?.detalhesSeguranca || ''}</p>
                      <p><strong>Distância Praia / Comércios:</strong> {item.estrutura?.distanciaPraia || '-'} | {item.estrutura?.comerciosProximos || '-'}</p>
                      <p><strong>Regras:</strong> Pets: {item.estrutura?.aceitaPets} | Som: {item.estrutura?.horarioLimiteSom} | Roupa de cama: {item.estrutura?.roupaDeCama} | Outras: {item.estrutura?.outrasRegras || '-'}</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="font-bold text-brand-navy font-montserrat mb-1">4. Clientes e Divulgação</h4>
                      <p><strong>Contatos Anteriores:</strong> {item.divulgacao?.ondeEstaoContatos || '-'} (Acesso aparelho: {item.divulgacao?.consegueAcessoAparelho})</p>
                      <p><strong>Plataformas (Airbnb, Booking):</strong> {item.divulgacao?.jaCadastradaPlataformas} ({item.divulgacao?.detalhesPlataformas || '-'})</p>
                      <p><strong>Instagram & Turbinar:</strong> {item.divulgacao?.instagramPerfil || '-'} | Verba: {item.divulgacao?.verbaTurbinar || '-'} | {item.divulgacao?.obsInstagram || ''}</p>
                      <p><strong>Fotos e Vídeos:</strong> {item.divulgacao?.statusFotosVideos || '-'} | Link/Obs: {item.divulgacao?.linkOuObsFotos || '-'}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer do Modal */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-navy hover:bg-brand-navy-dark text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
};

