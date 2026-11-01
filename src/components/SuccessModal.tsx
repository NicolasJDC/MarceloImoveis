import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageCircle, Home, Database, Copy, Check } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface SuccessModalProps {
  submissionId: string;
  formData: OnboardingFormData;
  onReset: () => void;
  onOpenAdmin: () => void;
  isOffline?: boolean;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  submissionId,
  formData,
  onReset,
  onOpenAdmin,
  isOffline,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    // Dispara confetes com as cores do projeto: Navy, Gold e Emerald!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1E3A8A', '#D4AF37', '#10B981', '#2563EB'],
      });
    } catch (e) {
      // Ignora caso falhe no ambiente
    }
  }, []);

  const { identificacao } = formData;
  const whatsappMessage = encodeURIComponent(
    `Olá Marcelo! Acabei de enviar as respostas do formulário de diagnóstico da casa.\n\n` +
    `👤 *Responsável:* ${identificacao.nomeResponsavel || 'Proprietário'}\n` +
    `🏡 *Imóvel:* ${identificacao.nomeOuIdentificadorImovel || 'Casa de Temporada'}\n` +
    `📋 *Código da Submissão:* ${submissionId}\n\n` +
    `Podemos alinhar os próximos passos da gestão!`
  );

  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(submissionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-center shadow-2xl border border-gray-100 relative">
        {/* Ícone de Sucesso */}
        <div className="w-20 h-20 bg-emerald-50 rounded-3xl mx-auto flex items-center justify-center mb-5 border-4 border-emerald-100 shadow-inner">
          <CheckCircle2 className="w-10 h-10 text-brand-emerald" />
        </div>

        {/* Título & Mensagem */}
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-montserrat">
          Etapa Concluída
        </span>
        <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-brand-navy mt-1 mb-2">
          Diagnóstico Enviado!
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
          Todas as informações sobre preços, custos, estrutura e contatos foram registradas com sucesso.
          {isOffline && (
            <span className="block mt-1 text-xs text-amber-600 font-medium">
              (Salvo localmente com segurança. Quando o Firebase for conectado, sincronizará automaticamente).
            </span>
          )}
        </p>

        {/* Card de Informações */}
        <div className="bg-brand-bg rounded-2xl p-4 border border-gray-200/70 text-left text-xs mb-6 space-y-2">
          <div className="flex items-center justify-between border-b border-gray-200/50 pb-2">
            <span className="text-gray-500 font-medium">Imóvel:</span>
            <span className="font-bold text-brand-navy">{identificacao.nomeOuIdentificadorImovel}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200/50 pb-2">
            <span className="text-gray-500 font-medium">Responsável:</span>
            <span className="font-semibold text-gray-800">{identificacao.nomeResponsavel}</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-gray-500 font-medium">ID da Submissão:</span>
            <div className="flex items-center gap-1.5">
              <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-mono text-[11px] text-gray-700">
                {submissionId.slice(0, 14)}...
              </code>
              <button
                onClick={copyToClipboard}
                className="p-1 hover:bg-gray-200 rounded text-gray-500 transition-colors"
                title="Copiar ID"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Botão de Notificação no WhatsApp - CTA Principal Verde Esmeralda (#10B981) */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-brand-emerald/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Avisar Marcelo pelo WhatsApp</span>
          </a>

          <div className="flex gap-2">
            <button
              onClick={onOpenAdmin}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Database className="w-3.5 h-3.5 text-brand-navy" />
              <span>Ver Respostas Salvas</span>
            </button>

            <button
              onClick={onReset}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-brand-gold" />
              <span>Novo Preenchimento</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

