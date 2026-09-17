import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Target, Zap, BarChart3, Check, Star } from 'lucide-react';

const STRATEGIES = [
  {
    id: 'intel',
    num: '01',
    title: 'Inteligência Georreferenciada',
    subtitle: 'Mapeamento Local de Alta Precisão',
    description: 'Nossa inteligência artificial varre as buscas num raio de até 15km, identificando os termos exatos de intenção de compra que seus concorrentes estão ignorando.',
    bullets: [
      'Auditoria instantânea de calor de posicionamento',
      'Identificação de lacunas de busca comercial',
      'Sincronização imediata com banco do Google'
    ],
    metric: '98%',
    metricLabel: 'Acurácia de Termos'
  },
  {
    id: 'density',
    num: '02',
    title: 'SEO de Alta Densidade',
    subtitle: 'Domínio Absoluto do Algoritmo',
    description: 'Injetamos metadados geográficos, geotags, posts programados e links locais estruturados para sinalizar relevância máxima ao robô do Google.',
    bullets: [
      'Geotagueamento avançado de imagens e mídias',
      'Ficha imune a suspensões (otimizada para diretrizes)',
      'Autoridade de domínio regional orgânica'
    ],
    metric: '312%',
    metricLabel: 'Aumento de Exposição'
  },
  {
    id: 'funnel',
    num: '03',
    title: 'Funil de Ligações Ativo',
    subtitle: 'De Visitantes a Compradores',
    description: 'Não focamos apenas em visualizações vazias. Configuramos CTAs de ligar, rotas e formulários otimizados para garantir que quem te achou ligue imediatamente.',
    bullets: [
      'Roteiros de conversão em destaque',
      'Incentivo ativo de avaliações 5 estrelas',
      'Atendimento simulado rápido por IA'
    ],
    metric: '10x',
    metricLabel: 'Retorno Sobre Investimento'
  }
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(STRATEGIES[0]);

  return (
    <section id="diferenciais" className="bg-[#151518] py-24 md:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/25 bg-[#00E676]/5 px-3 py-1 mb-4">
              <Zap className="h-3.5 w-3.5 text-[#00E676]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00E676]">
                Por que a Cedrus?
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.1]">
              A Estratégia de Domínio Local <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E676] to-[#00A86B]">Que os Concorrentes Desconhecem</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm md:text-base text-[#A1A1AA] font-medium">
              Não fazemos trabalho superficial. Nosso método combina ciência de busca local com funis psicológicos de conversão imediata para garantir faturamento de verdade.
            </p>
          </div>
        </div>

        {/* Strategy Tabs & Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Tabs Column */}
          <div className="lg:col-span-4 space-y-3">
            {STRATEGIES.map((strat) => (
              <button
                key={strat.id}
                onClick={() => setActiveTab(strat)}
                className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 flex items-center justify-between group ${
                  activeTab.id === strat.id
                    ? 'bg-[#0D0D0F] border-[#00E676]/30 shadow-lg shadow-black/40'
                    : 'bg-[#1E1E22]/50 border-white/5 hover:border-white/10 hover:bg-[#1E1E22]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${
                    activeTab.id === strat.id ? 'text-[#00E676]' : 'text-[#A1A1AA]'
                  }`}>
                    {strat.num}
                  </span>
                  <span className={`text-sm font-black tracking-tight ${
                    activeTab.id === strat.id ? 'text-white' : 'text-[#A1A1AA]'
                  }`}>
                    {strat.title}
                  </span>
                </div>
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                  activeTab.id === strat.id
                    ? 'bg-[#00E676] border-[#00E676] text-black'
                    : 'bg-white/5 border-white/10 text-white/40'
                }`}>
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content (The Nisoz visual bento grid layout) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white/5 bg-[#0D0D0F] p-8 md:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Visual Glow Ornament */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#00E676]/5 blur-[60px]" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left part: text */}
                  <div className="md:col-span-8">
                    <span className="text-xs font-black uppercase tracking-widest text-[#00E676]">
                      {activeTab.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-2 mb-4">
                      {activeTab.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-medium">
                      {activeTab.description}
                    </p>

                    <ul className="space-y-3">
                      {activeTab.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-[#A1A1AA] font-bold">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/10">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right part: Circular metric (Classic Nisoz premium asset) */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#151518]/80 border border-white/5">
                    <div className="relative flex items-center justify-center h-28 w-28 rounded-full border-4 border-[#00E676]/10">
                      {/* Floating glowing circle accent */}
                      <div className="absolute inset-0 rounded-full border-t-4 border-[#00E676] animate-spin [animation-duration:4s]" />
                      <span className="text-3xl font-black text-white tracking-tight font-mono">
                        {activeTab.metric}
                      </span>
                    </div>
                    <span className="mt-4 text-center text-[10px] font-black uppercase tracking-widest text-[#A1A1AA]">
                      {activeTab.metricLabel}
                    </span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
