/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthorityBar from './components/AuthorityBar';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import LeadModal from './components/LeadModal';
import Footer from './components/Footer';
import { Check, X as CloseIcon, HelpCircle, ShieldCheck, Zap, Heart, TrendingUp, Sparkles } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Geral');

  const handleOpenModal = (service: string = 'Geral') => {
    setModalService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121214] text-white selection:bg-[#00E676]/30 selection:text-white">
      
      {/* 1. Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* 2. Hero Section (First Fold with Interactive Map Simulator) */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 3. Authority Bar (Horizontal Band below the fold) */}
      <AuthorityBar />

      {/* 4. Services Grid (Grid 2x2) */}
      <ServicesGrid onOpenModal={handleOpenModal} />

      {/* 5. Strategy & Why Choose Us (Nisoz tabs & circular animated charts) */}
      <WhyChooseUs />

      {/* 5.5 Premium Comparison Section (Nisoz bento design) */}
      <section className="bg-[#0D0D0F] pb-24 md:pb-32 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#00E676] bg-[#00E676]/5 border border-[#00E676]/20 px-3.5 py-1 rounded-full inline-block">
              Análise de Mercado
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-4 tracking-tight sm:text-3xl">
              Compare as Agências Comuns com a Engenharia da Cedrus
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-[#151518] shadow-2xl relative">
            
            {/* Header comparison row */}
            <div className="grid grid-cols-3 bg-[#0D0D0F] border-b border-white/5 p-5 md:p-6 font-black text-xs uppercase tracking-widest text-center">
              <div className="text-left text-[#A1A1AA]">MÉTRICAS E SOLUÇÕES</div>
              <div className="text-[#00E676] flex items-center justify-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> CEDRUS DIGITAL
              </div>
              <div className="text-[#A1A1AA]/70">MERCADO COMUM</div>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-white/5 text-xs text-center font-bold">
              
              {/* Row 1 */}
              <div className="grid grid-cols-3 p-5 md:p-6 items-center transition-all hover:bg-white/[0.01]">
                <div className="text-left font-extrabold text-white">Velocidade do Site</div>
                <div className="text-[#00E676] bg-[#00E676]/10 py-2.5 rounded-xl border border-[#00E676]/20 font-black tracking-wide">
                  ⚡ Extrema (&lt; 1.0s)
                </div>
                <div className="text-[#A1A1AA]/50 font-medium">Lenta (Acima de 4.5s)</div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 p-5 md:p-6 items-center transition-all hover:bg-white/[0.01]">
                <div className="text-left font-extrabold text-white">Foco Estratégico</div>
                <div className="text-[#00E676] bg-[#00E676]/10 py-2.5 rounded-xl border border-[#00E676]/20 font-black tracking-wide">
                  Ligações & Vendas Reais
                </div>
                <div className="text-[#A1A1AA]/50 font-medium">Visualizações Vazias</div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 p-5 md:p-6 items-center transition-all hover:bg-white/[0.01]">
                <div className="text-left font-extrabold text-white">SEO Local Google Maps</div>
                <div className="text-[#00E676] bg-[#00E676]/10 py-2.5 rounded-xl border border-[#00E676]/20 font-black tracking-wide">
                  Otimização Georreferenciada
                </div>
                <div className="text-[#A1A1AA]/50 font-medium">Apenas cadastro básico</div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-3 p-5 md:p-6 items-center transition-all hover:bg-white/[0.01]">
                <div className="text-left font-extrabold text-white">Análise de Dados</div>
                <div className="text-[#00E676] bg-[#00E676]/10 py-2.5 rounded-xl border border-[#00E676]/20 font-black tracking-wide">
                  IA & Dashboard ao vivo
                </div>
                <div className="text-[#A1A1AA]/50 font-medium">Relatórios estáticos frios</div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-3 p-5 md:p-6 items-center transition-all hover:bg-white/[0.01]">
                <div className="text-left font-extrabold text-white">Suporte Técnico</div>
                <div className="text-[#00E676] bg-[#00E676]/10 py-2.5 rounded-xl border border-[#00E676]/20 font-black tracking-wide">
                  Diretor dedicado via WhatsApp
                </div>
                <div className="text-[#A1A1AA]/50 font-medium">Tickets & Atendentes frios</div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Dynamic final conversion section */}
      <section className="bg-[#121214] py-16 text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Pronto para sair da invisibilidade e multiplicar suas vendas?
          </h3>
          <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pare de perder clientes qualificados todos os dias para a concorrência que já está otimizada no Google. Garanta seu posicionamento estratégico agora.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => handleOpenModal('Geral')}
              className="group flex items-center gap-2 rounded-xl bg-[#00E676] px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#00A86B] hover:shadow-[0_0_30px_rgba(0,230,118,0.4)]"
            >
              <span>Quero Dominar o Meu Mercado</span>
              <TrendingUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* 8. Lead Capture & AI Diagnostic Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
      />

    </div>
  );
}

