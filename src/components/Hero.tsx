import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Search, MapPin, Phone, Star, Sparkles, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenModal: (service?: string) => void;
}

const SECTORS = [
  { id: 'dentista', label: '🦷 Dentistas', keyword: 'melhor dentista perto de mim', business: 'OdontoPrime Clínica Integrada' },
  { id: 'restaurante', label: '🍕 Pizzarias', keyword: 'restaurante delivery mais próximo', business: 'Cantina Bella Itália' },
  { id: 'advogado', label: '⚖️ Advogados', keyword: 'advogado especialista em empresas', business: 'Silva & Associados Advocacia' },
  { id: 'estetica', label: '✨ Estética', keyword: 'clínica de estética corporal avançada', business: 'BellaPele Harmonização' }
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);
  const [isAfter, setIsAfter] = useState(true);
  const [impressionCount, setImpressionCount] = useState(310);
  const [callCount, setCallCount] = useState(12);

  // Counter animation when sector or before/after changes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAfter) {
      const targetImpressions = 14820;
      const targetCalls = 385;
      
      const impStep = Math.ceil((targetImpressions - 310) / 25);
      const callStep = Math.ceil((targetCalls - 12) / 25);

      let currentImp = 310;
      let currentCalls = 12;

      interval = setInterval(() => {
        currentImp = Math.min(targetImpressions, currentImp + impStep);
        currentCalls = Math.min(targetCalls, currentCalls + callStep);
        
        setImpressionCount(currentImp);
        setCallCount(currentCalls);

        if (currentImp === targetImpressions && currentCalls === targetCalls) {
          clearInterval(interval);
        }
      }, 20);
    } else {
      setImpressionCount(310);
      setCallCount(12);
    }

    return () => clearInterval(interval);
  }, [isAfter, selectedSector]);

  return (
    <section className="relative overflow-hidden bg-[#0D0D0F] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      {/* Nisoz style floating decorative blobs/circles */}
      <div className="absolute top-1/4 left-10 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 -z-10 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[120px] animate-nisoz-float" />
      
      {/* Floating abstract rings/decorations (Nisoz hallmark) */}
      <div className="absolute top-20 right-[15%] hidden lg:block h-20 w-20 rounded-full border border-white/5 animate-nisoz-float" />
      <div className="absolute bottom-40 left-[5%] hidden lg:block h-12 w-12 rounded-full border-2 border-dashed border-[#00E676]/20 animate-spin [animation-duration:20s]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Copywriting */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2.5 self-start rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-3.5 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-[#00E676]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00E676]">
                Agência de Performance • Nisoz Model
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              COLOCAMOS SUA EMPRESA <br />
              <span className="relative inline-block text-[#00E676] my-1">
                NO TOPO DO GOOGLE
                <span className="absolute bottom-1 left-0 h-1.5 w-full bg-[#00E676]/25 rounded-full" />
              </span> <br />
              E <span className="text-transparent font-black tracking-tighter [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">MULTIPLICAMOS</span> AS VENDAS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-[#A1A1AA] sm:text-lg md:text-xl font-medium max-w-2xl"
            >
              Conectamos tecnologia de inteligência artificial de ponta, SEO local de alta densidade e campanhas cirúrgicas de Google Ads para colocar seu negócio onde as decisões de compra acontecem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => onOpenModal('Geral')}
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#00E676] px-8 py-4.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#00A86B] hover:shadow-[0_0_35px_rgba(0,230,118,0.45)]"
              >
                <span>Quero Dominar o Meu Mercado</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#151518]/80 px-6 py-4.5 text-sm font-extrabold text-white transition-all duration-300 hover:border-white/20 hover:bg-[#1E1E22]"
              >
                Conhecer Nossas Soluções
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              <div>
                <span className="block text-2xl font-extrabold text-white sm:text-3xl tracking-tight">+R$ 100M</span>
                <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Faturamento Gerado</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white sm:text-3xl tracking-tight">5.0★</span>
                <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Nota Média Local</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white sm:text-3xl tracking-tight">98.2%</span>
                <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Retenção de Clientes</span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Interactive Rank Simulator (The Craft) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full rounded-3xl border border-white/10 bg-[#151518] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] glow-green"
            >
              {/* Simulator Header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-2 font-mono text-[9px] font-bold tracking-widest text-[#A1A1AA] uppercase">
                    CEDRUS SEARCH ENGINE SIMULATOR
                  </span>
                </div>
                
                <span className="rounded-md bg-[#0D0D0F] px-2 py-1 text-[9px] font-bold text-[#00E676] border border-[#00E676]/20 uppercase tracking-widest">
                  Live Preview
                </span>
              </div>

              {/* Sector Chips */}
              <div className="mb-5">
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#A1A1AA] mb-2.5">
                  1. Selecione seu segmento de mercado:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {SECTORS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setSelectedSector(sec)}
                      className={`rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                        selectedSector.id === sec.id
                          ? 'bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30'
                          : 'bg-[#0D0D0F] text-[#A1A1AA] hover:text-white border border-white/5'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Box Mockup */}
              <div className="mb-5 flex items-center gap-3 rounded-2xl bg-[#0D0D0F] px-4 py-3.5 border border-white/5 shadow-inner">
                <Search className="h-4 w-4 text-[#00E676]" />
                <span className="text-xs text-white/90 font-bold font-mono">
                  {selectedSector.keyword}
                </span>
                <span className="ml-auto rounded-lg bg-[#151518] px-2 py-1 text-[8px] font-bold text-[#A1A1AA] uppercase tracking-wider border border-white/5">
                  Local Maps
                </span>
              </div>

              {/* Before/After Toggle */}
              <div className="mb-5 flex rounded-xl bg-[#0D0D0F] p-1.5 border border-white/5">
                <button
                  onClick={() => setIsAfter(false)}
                  className={`flex-1 rounded-lg py-2 text-center text-xs font-bold transition-all duration-300 ${
                    !isAfter
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  Sem Otimização (Antes)
                </button>
                <button
                  onClick={() => setIsAfter(true)}
                  className={`flex-1 rounded-lg py-2 text-center text-xs font-bold transition-all duration-300 ${
                    isAfter
                      ? 'bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30 shadow-lg'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  Otimizado pela Cedrus
                </button>
              </div>

              {/* Dynamic Rankings Box */}
              <div className="space-y-3 relative">
                
                <AnimatePresence mode="popLayout">
                  {isAfter ? (
                    /* AFTER STATE - CLIENT IN FIRST PLACE */
                    <div className="space-y-3">
                      {/* Rank 1 (Client) */}
                      <motion.div
                        layoutId="client-rank-box"
                        key="after-rank-1"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative flex items-center gap-3.5 rounded-2xl border border-[#00E676]/40 bg-[#1C2C22] p-4 shadow-[0_0_25px_rgba(0,230,118,0.15)] hover:border-[#00E676]/60 transition-all duration-300"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E676]/20 text-[#00E676] font-black text-sm border border-[#00E676]/30">
                          1º
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate text-xs font-extrabold text-white tracking-tight">
                              {selectedSector.business}
                            </span>
                            <span className="flex shrink-0 items-center gap-0.5 rounded-full bg-[#00E676]/20 px-2 py-0.5 text-[8px] font-black text-[#00E676] uppercase tracking-wider">
                              <Sparkles className="h-2 w-2" /> TOP 1
                            </span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-[10px] text-[#A1A1AA] font-semibold">
                            <span className="flex items-center text-yellow-400 font-bold">
                              5.0 <Star className="ml-0.5 h-2.5 w-2.5 fill-current" />
                              <Star className="h-2.5 w-2.5 fill-current" />
                              <Star className="h-2.5 w-2.5 fill-current" />
                              <Star className="h-2.5 w-2.5 fill-current" />
                              <Star className="h-2.5 w-2.5 fill-current" />
                            </span>
                            <span>•</span>
                            <span className="text-[#00E676]">Aberto agora</span>
                          </div>
                        </div>
                        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00E676]/20 text-[#00E676] border border-[#00E676]/30">
                          <Phone className="h-4 w-4 animate-bounce" />
                          <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E676]"></span>
                          </span>
                        </div>
                      </motion.div>

                      {/* Rank 2 (Competitor A) */}
                      <motion.div
                        key="after-rank-2"
                        className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[#0D0D0F]/50 p-4 opacity-50"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#A1A1AA] text-xs font-bold">
                          2º
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="truncate text-xs font-bold text-white/80 block">
                            Concorrente Regional Antigo
                          </span>
                          <span className="text-[10px] text-[#A1A1AA]">4.1 ★ (38 avaliações)</span>
                        </div>
                      </motion.div>

                      {/* Rank 3 (Competitor B) */}
                      <motion.div
                        key="after-rank-3"
                        className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[#0D0D0F]/50 p-4 opacity-30"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#A1A1AA] text-xs font-bold">
                          3º
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="truncate text-xs font-bold text-white/80 block">
                            Outra Empresa Concorrente
                          </span>
                          <span className="text-[10px] text-[#A1A1AA]">3.8 ★ (11 avaliações)</span>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* BEFORE STATE - CLIENT IS DOWN AT BOTTOM */
                    <div className="space-y-3">
                      {/* Rank 1 */}
                      <motion.div
                        key="before-rank-1"
                        className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[#0D0D0F] p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500 text-xs font-bold">
                          1º
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="truncate text-xs font-bold text-white block">
                            Concorrente Regional Antigo
                          </span>
                          <span className="text-[10px] text-[#A1A1AA]">4.1 ★ (38 avaliações)</span>
                        </div>
                      </motion.div>

                      {/* Rank 2 */}
                      <motion.div
                        key="before-rank-2"
                        className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-[#0D0D0F] p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#A1A1AA] text-xs font-bold">
                          2º
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="truncate text-xs font-bold text-white/80 block">
                            Outra Empresa Concorrente
                          </span>
                          <span className="text-[10px] text-[#A1A1AA]">3.8 ★ (11 avaliações)</span>
                        </div>
                      </motion.div>

                      {/* Client way down at Rank 8 */}
                      <motion.div
                        layoutId="client-rank-box"
                        key="before-rank-client"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="relative flex items-center gap-3.5 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 opacity-80"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 font-bold text-xs border border-red-500/20">
                          8º
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate text-xs font-bold text-white/90">
                              {selectedSector.business}
                            </span>
                            <span className="flex shrink-0 items-center rounded-full bg-red-500/10 px-1.5 py-0.5 text-[8px] font-black text-red-400 uppercase tracking-widest">
                              Invisível
                            </span>
                          </div>
                          <p className="text-[10px] text-red-400/80 mt-1 font-semibold">
                            Não aparece nas buscas do Maps. Clientes vão para concorrentes.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>

              </div>

              {/* Animated Live Stats Section */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                
                {/* Metric 1 */}
                <div className="rounded-2xl bg-[#0D0D0F] p-4 border border-white/5 relative overflow-hidden group">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#A1A1AA] block">
                    Cliques Mensais
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white tracking-tight font-mono">
                      {impressionCount.toLocaleString('pt-BR')}
                    </span>
                    <span className={`text-[10px] font-black flex items-center ${isAfter ? 'text-[#00E676]' : 'text-[#A1A1AA]'}`}>
                      {isAfter ? '+4.680%' : '+0%'}
                    </span>
                  </div>
                  {/* Miniature growth sparkline */}
                  <div className="mt-2.5 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${isAfter ? 'bg-[#00E676]' : 'bg-red-500/40'}`}
                      initial={{ width: '10%' }}
                      animate={{ width: isAfter ? '100%' : '10%' }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="rounded-2xl bg-[#0D0D0F] p-4 border border-white/5 relative overflow-hidden group">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#A1A1AA] block">
                    Contatos via Maps
                  </span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-white tracking-tight font-mono">
                      {callCount}
                    </span>
                    <span className={`text-[10px] font-black flex items-center ${isAfter ? 'text-[#00E676]' : 'text-[#A1A1AA]'}`}>
                      {isAfter ? '+3.108%' : '+0%'}
                    </span>
                  </div>
                  {/* Miniature calls indicator */}
                  <div className="mt-2.5 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${isAfter ? 'bg-emerald-400' : 'bg-red-500/40'}`}
                      initial={{ width: '10%' }}
                      animate={{ width: isAfter ? '90%' : '10%' }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </div>

              </div>

              {/* Bottom explanatory helper */}
              <div className="mt-4 text-center">
                <span className="text-[9px] text-[#A1A1AA] italic font-semibold">
                  *Médias auditadas de empresas de serviços no primeiro mês de otimização.
                </span>
              </div>
            </motion.div>

            {/* Glowing Map Badge Decorative decoration */}
            <div className="absolute -bottom-6 -left-6 z-10 hidden sm:flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#151518] p-4 shadow-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/20">
                <Smartphone className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#A1A1AA]">Foco em Conversão</span>
                <span className="text-sm font-extrabold text-white">Ligações de Clientes Reais</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
