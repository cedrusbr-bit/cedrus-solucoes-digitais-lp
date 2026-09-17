import React, { useState, useEffect } from 'react';
import { Leaf, PhoneCall, ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (service?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Análise de Busca', href: '#analise' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 px-4 sm:px-8' 
        : 'py-5 px-4 sm:px-8'
    }`}>
      <div className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
        isScrolled 
          ? 'border-white/10 bg-[#0D0D0F]/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md' 
          : 'border-white/5 bg-[#151518]/40 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between px-6 py-3.5">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151518] border border-[#00E676]/20 text-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.1)] group-hover:scale-105 group-hover:border-[#00E676]/50 transition-all duration-300">
              <Leaf className="h-5 w-5 animate-pulse text-[#00E676]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#00E676] transition-colors duration-300">
                Cedrus<span className="text-[#00E676]">.</span>
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#A1A1AA]">
                Soluções Digitais
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00E676] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal('Geral')}
              className="group hidden sm:flex items-center gap-2 rounded-xl bg-[#00E676] px-5 py-2.5 text-xs font-extrabold text-black hover:bg-[#00A86B] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Consultoria Gratuita</span>
              <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151518] text-[#A1A1AA] hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0D0D0F] rounded-b-2xl p-6 space-y-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#00E676] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('Geral');
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00E676] py-3 text-xs font-extrabold text-black hover:bg-[#00A86B] transition-all"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Consultoria Gratuita</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
