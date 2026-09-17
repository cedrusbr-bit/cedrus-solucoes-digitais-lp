import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldAlert, Sparkles, Send, Loader2, Phone, Building, Globe, User, MessageSquare, AlertCircle } from 'lucide-react';
import { LeadData } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

type ModalStep = 'form' | 'scanning' | 'result';

export default function LeadModal({ isOpen, onClose, initialService = 'Geral' }: LeadModalProps) {
  const [step, setStep] = useState<ModalStep>('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    phone: '',
    businessName: '',
    service: initialService,
    website: ''
  });
  
  const [scanProgress, setScanProgress] = useState(0);
  const [scanMessage, setScanMessage] = useState('');

  // Sync service if prop changes
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  // Handle Scan Animation Steps
  useEffect(() => {
    if (step !== 'scanning') return;

    const messages = [
      'Conectando com APIs de busca do Google...',
      'Analisando presença regional no Google Maps...',
      'Escaneando relevância de palavras-chave locais...',
      'Avaliando concorrência em anúncios patrocinados...',
      'Medindo velocidade e otimização técnica do site...',
      'Gerando diagnóstico estratégico com IA Cedrus...'
    ];

    let currentMessageIndex = 0;
    setScanMessage(messages[0]);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setStep('result');
          }, 600);
          return 100;
        }
        
        // Update message at checkpoints
        const nextProgress = prev + 2;
        const msgIndex = Math.floor((nextProgress / 100) * messages.length);
        if (msgIndex !== currentMessageIndex && msgIndex < messages.length) {
          currentMessageIndex = msgIndex;
          setScanMessage(messages[msgIndex]);
        }

        return nextProgress;
      });
    }, 70);

    return () => clearInterval(progressInterval);
  }, [step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios (Nome, Celular e Empresa).');
      return;
    }
    setScanProgress(0);
    setStep('scanning');
  };

  // Generate WhatsApp pre-filled dynamic text
  const getWhatsAppUrl = () => {
    const text = `Olá Cedrus! Acabei de rodar o Pré-Diagnóstico para minha empresa *${formData.businessName}* no site e obtive a nota 42/100 (Alerta Crítico). Gostaria de liberar o meu Relatório de Auditoria Completo de ${formData.service} e agendar minha consultoria estratégica gratuita.

*Dados Cadastrados:*
• *Nome:* ${formData.name}
• *Empresa:* ${formData.businessName}
• *Telefone:* ${formData.phone}
• *Serviço de Interesse:* ${formData.service}
${formData.website ? `• *Site:* ${formData.website}` : ''}`;

    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?phone=5511999999999&text=${encodedText}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0D0D0F]/95 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#151518] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            
            {/* Background Accent */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#00E676]/10 blur-3xl pointer-events-none" />

            {/* Header / Close button */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4.5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#00E676] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A1A1AA]">
                  CEDRUS INTELIGÊNCIA COMERCIAL
                </span>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-[#A1A1AA] hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Step 1: Form Input */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Solicitar Diagnóstico Gratuito
                  </h3>
                  <p className="mt-1.5 text-xs text-[#A1A1AA] font-semibold">
                    Insira os dados da sua empresa abaixo para que nosso algoritmo analise seu posicionamento regional instantaneamente.
                  </p>
                </div>

                {errorMsg && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3.5 flex items-start gap-2.5 text-xs text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="font-semibold">{errorMsg}</span>
                  </div>
                )}

                {/* Name field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/95 flex items-center gap-1.5">
                    <User className="h-4 w-4 text-[#00E676]" /> Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: João Silva"
                    className="w-full rounded-xl border border-white/5 bg-[#0D0D0F] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E676]/40 focus:outline-none focus:ring-1 focus:ring-[#00E676]/40 transition-colors"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/95 flex items-center gap-1.5">
                    <Building className="h-4 w-4 text-[#00E676]" /> Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Ex: Clínica Odonto Prime"
                    className="w-full rounded-xl border border-white/5 bg-[#0D0D0F] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E676]/40 focus:outline-none focus:ring-1 focus:ring-[#00E676]/40 transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/95 flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-[#00E676]" /> WhatsApp / Celular *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full rounded-xl border border-white/5 bg-[#0D0D0F] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E676]/40 focus:outline-none focus:ring-1 focus:ring-[#00E676]/40 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/95 flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-[#00E676]" /> Qual solução te interessa?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/5 bg-[#0D0D0F] px-4 py-3 text-sm text-white focus:border-[#00E676]/40 focus:outline-none focus:ring-1 focus:ring-[#00E676]/40 transition-colors"
                  >
                    <option value="Geral">Todas as soluções (Geral)</option>
                    <option value="Google Meu Negócio">Google Meu Negócio & Otimização de Maps</option>
                    <option value="AI SEO Local">AI SEO Local (Busca Orgânica Inteligente)</option>
                    <option value="Anúncios no Google (Ads)">Tráfego Pago (Google Ads Patrocinado)</option>
                    <option value="Desenvolvimento de Sites">Criação de Sites de Alta Velocidade</option>
                  </select>
                </div>

                {/* Website URL (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/95 flex items-center gap-1.5">
                    <Globe className="h-4 w-4 text-[#00E676]" /> Site da Empresa (Opcional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Ex: https://suaempresa.com.br"
                    className="w-full rounded-xl border border-white/5 bg-[#0D0D0F] px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E676]/40 focus:outline-none focus:ring-1 focus:ring-[#00E676]/40 transition-colors"
                  />
                </div>

                {/* Button Submit */}
                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#00E676] py-4 text-sm font-black text-black hover:bg-[#00A86B] transition-colors shadow-lg hover:shadow-[0_0_25px_rgba(0,230,118,0.3)] duration-300 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Gerar Diagnóstico por IA</span>
                </button>
              </form>
            )}

            {/* Step 2: Scanning Simulation Animation */}
            {step === 'scanning' && (
              <div className="p-10 flex flex-col items-center justify-center min-h-[350px]">
                <Loader2 className="h-12 w-12 text-[#00E676] animate-spin mb-6" />
                
                <h4 className="text-lg font-bold text-white text-center">
                  Analisando Presença Comercial...
                </h4>
                
                <p className="mt-2 text-xs text-[#A1A1AA] text-center max-w-sm h-12 font-medium">
                  {scanMessage}
                </p>

                {/* Progress bar */}
                <div className="mt-8 w-full max-w-xs bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="bg-[#00E676] h-full rounded-full transition-all duration-70"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>

                <span className="mt-2 text-xs font-mono text-[#00E676] font-bold">
                  {scanProgress}%
                </span>
              </div>
            )}

            {/* Step 3: Diagnostic Result */}
            {step === 'result' && (
              <div className="p-6 space-y-6">
                
                {/* Result header */}
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 mb-4 animate-pulse">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-black text-white">
                    Pré-Diagnóstico Concluído!
                  </h4>
                  <p className="mt-1 text-xs text-[#A1A1AA] font-semibold">
                    Sua empresa foi escaneada no ecossistema de buscas locais.
                  </p>
                </div>

                {/* Score Widget */}
                <div className="rounded-2xl bg-[#0D0D0F] p-5 border border-red-500/20 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-red-500 text-[9px] font-black text-white px-3 py-0.5 rounded-br-lg uppercase tracking-wider">
                    Alerta Crítico
                  </div>
                  
                  <span className="block text-[10px] uppercase tracking-widest text-[#A1A1AA] font-extrabold mt-1">
                    Nota de Posicionamento Google
                  </span>
                  
                  <span className="block text-5xl font-extrabold text-red-500 tracking-tighter my-3 font-mono">
                    42<span className="text-white/20">/100</span>
                  </span>

                  <p className="text-xs text-white/90 font-bold">
                    Invisibilidade local severa detectada para "{formData.businessName}"
                  </p>
                </div>

                {/* Detected Vulnerabilities */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                    Vulnerabilidades Encontradas:
                  </span>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 text-xs text-white/80 leading-relaxed font-medium">
                      <span className="text-red-400 shrink-0 mt-0.5">⚠️</span>
                      <div>
                        <strong className="text-white">Perfil do Maps sem Otimização:</strong> Faltam geotags e palavras-chave de intenção comercial no perfil para rankear na sua vizinhança.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3 text-xs text-white/80 leading-relaxed font-medium">
                      <span className="text-red-400 shrink-0 mt-0.5">⚠️</span>
                      <div>
                        <strong className="text-white">Perda de Clientes Orgânicos:</strong> Concorrentes locais com menor qualidade estão recebendo mais ligações devido a SEO Técnico de IA ausente.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final WhatsApp CTA - using an elegant secure link to prevent iframe window.open issues */}
                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setTimeout(() => {
                        onClose();
                        setStep('form');
                      }, 500);
                    }}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 py-4 text-sm font-black text-white hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] duration-300 text-center"
                  >
                    <MessageSquare className="h-4.5 w-4.5" />
                    <span>Liberar Auditoria Completa via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setStep('form')}
                    className="w-full text-center text-xs text-[#A1A1AA] hover:text-white underline transition-colors cursor-pointer"
                  >
                    Refazer com outros dados
                  </button>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
