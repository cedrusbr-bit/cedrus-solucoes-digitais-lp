import React from 'react';
import { Leaf, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenModal: (service?: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0D0D0F] pt-20 pb-10 text-[#A1A1AA] relative">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E1E22] border border-[#00E676]/20 text-[#00E676] shadow-[0_0_10px_rgba(0,230,118,0.1)]">
                <Leaf className="h-4.5 w-4.5" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Cedrus<span className="text-[#00E676]">.</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#A1A1AA] max-w-sm">
              Especialistas em SEO Local Avançado, Otimização de Google Meu Negócio, Tráfego Pago de Alta Conversão e Desenvolvimento de Plataformas Web de Extrema Velocidade. Levamos sua empresa ao topo do Google.
            </p>
            
            {/* Certifications badges */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5 text-[10px] font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00E676]" />
                Otimização Protegida
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/5 text-[10px] font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00E676]" />
                Conexão Criptografada SSL
              </div>
            </div>
          </div>

          {/* Service quicklinks */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-white">
              Nossas Especialidades
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal('Google Meu Negócio')}
                  className="hover:text-[#00E676] transition-colors"
                >
                  Google Meu Negócio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('AI SEO Local')}
                  className="hover:text-[#00E676] transition-colors"
                >
                  AI SEO Local com Inteligência Artificial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('Anúncios no Google (Ads)')}
                  className="hover:text-[#00E676] transition-colors"
                >
                  Gestão de Tráfego (Google Ads)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('Desenvolvimento de Sites')}
                  className="hover:text-[#00E676] transition-colors"
                >
                  Desenvolvimento de Sites e LPs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-white">
              Atendimento Comercial
            </span>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#00E676] shrink-0" />
                <span className="text-white font-medium">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00E676] shrink-0" />
                <span className="text-white font-medium">contato@cedrusdigital.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#00E676] shrink-0 mt-0.5" />
                <span>
                  Atendimento Premium Digital em todo o Brasil. Sedes de Consultoria Estratégica em São Paulo e regiões metropolitanas.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-[10px]">
            &copy; {currentYear} Cedrus Soluções Digitais. Todos os direitos reservados. CNPJ: 00.000.000/0001-00. <br />
            Desenvolvido com foco absoluto em Conversão, Velocidade e Alta Tecnologia.
          </p>
          <div className="flex gap-4 text-[10px]">
            <a href="#servicos" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#servicos" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
