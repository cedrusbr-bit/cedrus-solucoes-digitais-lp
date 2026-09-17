import React from 'react';
import { motion } from 'motion/react';
import { Store, Cpu, Rocket, Code, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onOpenModal: (service: string) => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gmn',
    title: 'Google Meu Negócio',
    description: 'Perfil estruturado e otimizado com geotags e funil de avaliações para liderar as buscas do Google Maps e gerar ligações quentes diárias.',
    iconName: 'store',
    badge: 'Mais Vendido',
    features: [
      'Posicionamento absoluto no Maps regional',
      'Funil ativo de avaliações 5 estrelas',
      'Metadados e Georreferenciamento de fotos',
      'Defesa contra spam e concorrência desleal'
    ]
  },
  {
    id: 'seo',
    title: 'AI SEO Local & Mapas',
    description: 'Algoritmo de mapeamento proprietário e IA de busca para cobrir um raio de até 15km em volta da sua empresa com termos orgânicos no topo.',
    iconName: 'cpu',
    badge: 'Tecnologia Proprietária',
    features: [
      'Mapeamento de calor de posicionamento',
      'Geração de conteúdo otimizado por IA',
      'Criação de backlinks locais de relevância',
      'Garantia de indexação imediata'
    ]
  },
  {
    id: 'ads',
    title: 'Tráfego Pago (Google Ads)',
    description: 'Campanhas focadas exclusivamente no momento exato de intenção de compra do seu cliente, maximizando leads qualificados via telefone e WhatsApp.',
    iconName: 'rocket',
    badge: 'Escala Rápida',
    features: [
      'Filtro cirúrgico de palavras-chave negativas',
      'Anúncios de alta conversão estruturados',
      'Otimização e acompanhamento diário',
      'Rastreamento avançado de chamadas locais'
    ]
  },
  {
    id: 'sites',
    title: 'Sites & Landing Pages Premium',
    description: 'Criação de páginas ultra velozes com tecnologia moderna, design premium e copywriting altamente persuasivo voltado a multiplicar suas vendas.',
    iconName: 'globe',
    badge: 'Conversão Máxima',
    features: [
      'Velocidade extrema de carregamento (< 1s)',
      'Layout mobile-first adaptado para celular',
      'SEO técnico integrado no código-fonte',
      'Rastreamento de conversão pixel/analytics'
    ]
  }
];

export default function ServicesGrid({ onOpenModal }: ServicesGridProps) {
  
  const renderIcon = (iconName: string) => {
    const classes = "h-7 w-7 text-[#00E676] group-hover:scale-110 group-hover:text-black transition-all duration-300 relative z-10";
    switch (iconName) {
      case 'store':
        return <Store className={classes} />;
      case 'cpu':
        return <Cpu className={classes} />;
      case 'rocket':
        return <Rocket className={classes} />;
      case 'globe':
        return <Code className={classes} />;
      default:
        return <Store className={classes} />;
    }
  };

  return (
    <section id="servicos" className="bg-[#0D0D0F] py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/25 bg-[#00E676]/5 px-3 py-1 mb-4">
            <Star className="h-3.5 w-3.5 text-[#00E676]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00E676]">
              Nossas Especialidades
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.1]">
            Soluções Sob Medida para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00A86B]">Dominar a sua Região</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base md:text-lg font-medium">
            Integramos inteligência de dados, design premium e performance estratégica para direcionar clientes quentes e qualificados diretamente ao seu comercial.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#151518] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#00E676]/35 hover:shadow-[0_20px_40px_rgba(0,230,118,0.08)]"
            >
              {/* Backing stylized step number (Nisoz hallmark) */}
              <div className="absolute -top-4 -right-2 text-7xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.03)] select-none opacity-20 group-hover:opacity-100 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgba(0,230,118,0.15)] transition-all duration-500 font-mono">
                0{index + 1}
              </div>

              <div>
                {/* Header Row in Card */}
                <div className="flex items-center justify-between">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D0D0F] border border-white/10 shadow-inner group-hover:bg-[#00E676] group-hover:border-[#00E676] transition-all duration-500">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="rounded-xl bg-[#00E676]/10 px-3.5 py-1 text-[9px] font-black text-[#00E676] border border-[#00E676]/15 uppercase tracking-widest relative z-10">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="mt-8 text-2xl font-black text-white group-hover:text-[#00E676] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-[#A1A1AA] font-medium">
                  {service.description}
                </p>

                {/* Core Features List */}
                <ul className="mt-8 space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-[#A1A1AA] font-bold">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00E676]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Saiba mais footer trigger */}
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <button
                  onClick={() => onOpenModal(service.title)}
                  className="flex items-center gap-2.5 text-xs font-black text-[#00E676] group/link transition-colors duration-300 hover:text-white"
                >
                  <span>Solicitar Orçamento de {service.title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid Footer Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#A1A1AA] font-medium">
            Não sabe por onde começar a sua otimização?{' '}
            <button
              onClick={() => onOpenModal('Geral')}
              className="font-extrabold text-[#00E676] hover:underline cursor-pointer transition-colors duration-300"
            >
              Fale com nosso Diretor de Performance para receber uma análise gratuita
            </button>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
