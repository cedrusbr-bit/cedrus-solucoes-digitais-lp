import React from 'react';
import { Award, Star, ShieldCheck, Zap } from 'lucide-react';

export default function AuthorityBar() {
  const clients = [
    { name: 'Dr. Roberto Estética', type: 'Saúde' },
    { name: 'Gourmet Burguer', type: 'Franquia' },
    { name: 'Borges Advocacia', type: 'Corporativo' },
    { name: 'Studio Bella', type: 'Beleza' },
    { name: 'Alfa Engenharia', type: 'Construção' }
  ];

  return (
    <section className="relative z-10 w-full bg-[#151518] border-y border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Section left: Credentials */}
          <div className="lg:col-span-5 flex flex-wrap items-center justify-start gap-6 sm:gap-10">
            {/* Google Partner */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#00E676] shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                <Award className="h-5.5 w-5.5 text-[#00E676]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">Selo Oficial</span>
                <span className="text-xs font-black text-white flex items-center gap-1 uppercase tracking-wider">
                  Google Partner <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00E676] animate-pulse" />
                </span>
              </div>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-yellow-400 shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                <Star className="h-5.5 w-5.5 fill-current text-yellow-400" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">Média Geral</span>
                <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1">
                  5.0★ <span className="text-yellow-400 font-bold">Excelente</span>
                </span>
              </div>
            </div>
          </div>

          {/* Section right: Infinite Carousel of Clients styled like Nisoz */}
          <div className="lg:col-span-7 flex flex-col justify-center border-t border-white/5 lg:border-t-0 lg:border-l lg:pl-10 pt-6 lg:pt-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] mb-3 block text-center lg:text-left">
              PARCEIROS OTMIZADOS PELA CEDRUS:
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              {clients.map((client) => (
                <div 
                  key={client.name}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0D0D0F] border border-white/5 flex items-center gap-2 hover:border-[#00E676]/30 transition-all duration-300"
                >
                  <Zap className="h-3 w-3 text-[#00E676]" />
                  <span className="text-[11px] font-extrabold text-white/95">{client.name}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#00E676] bg-[#00E676]/10 px-1 py-0.5 rounded-md">
                    {client.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
