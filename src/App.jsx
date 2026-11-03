import React, { useState } from 'react';
import {
  Baby,
  MapPin,
  MessageCircle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';

export default function App() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    especialidade: ''
  });

  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=R.+Herculano+de+Freitas,+58+-+Sl+407+-+Gutierrez,+Belo+Horizonte+-+MG,+30441-039";
  const ADDRESS_TEXT = "R. Herculano de Freitas, 58 - Sl 407 - Gutierrez, Belo Horizonte - MG, 30441-039";

  // Gallery spaces with inverted order (Atendimento & Secretária in 2nd, Consultório Principal in 6th)
  // Text "Área Clínica & Exame" removed
  const spaces = [
    {
      src: "/photos/recepcao_safari_kids.webp",
      title: "Recepção Safári & Espaço Kids",
      tag: "25 m² • Espera Acolhedora",
      desc: "Arquitetura lúdica com climatização, brinquedoteca e fraldário estruturado."
    },
    {
      src: "/photos/recepcao_hall.webp",
      title: "Atendimento & Secretária",
      tag: "Exclusividade",
      desc: "Recepção personalizada para um único consultório em funcionamento."
    },
    {
      src: "/photos/consultorio_mesa.webp",
      title: "Ergonomia & Atendimento",
      tag: "Conforto Médico",
      desc: "Cadeira executiva Flexform e mesa espaçosa para acolher pais e crianças."
    },
    {
      src: "/photos/consultorio_maca.webp",
      title: "Maca Pediátrica",
      tag: "Estrutura Clínica",
      desc: "Maca pediátrica higienizada, balança digital e Smart TV integrada."
    },
    {
      src: "/photos/copa_conforto.webp",
      title: "Copa Reservada",
      tag: "Praticidade",
      desc: "Espaço privativo com cafeteira, frigobar e micro-ondas para sua comodidade."
    },
    {
      src: "/photos/consultorio_visao_ampla.webp",
      title: "Consultório Principal",
      tag: "25 m² • Luz Natural",
      desc: "Paredes em vidro, vista panorâmica e banheiro privativo para o médico."
    }
  ];

  const handleNextPhoto = (e) => {
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % spaces.length);
  };

  const handlePrevPhoto = (e) => {
    e?.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + spaces.length) % spaces.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome.trim()) return;

    // Sou Fulano, [especialidade], gostaria de conhecer o espaço. Meu email é [email}
    const message = `Sou ${formData.nome.trim()}, ${formData.especialidade.trim() || 'profissional de saúde'}, gostaria de conhecer o espaço. Meu email é ${formData.email.trim() || 'não informado'}`;
    const whatsappUrl = `https://wa.me/5531997141515?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#1A2621] font-sans antialiased selection:bg-[#284B3D] selection:text-white">

      {/* Header Minimalista */}
      <header className="w-full border-b border-[#EAE3D6]/70 bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 md:h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.24em] text-[#1C362B] uppercase">
              ANGATU
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A65] font-medium mt-0.5">
              Coworking Pediátrico
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section Responsiva (Usa todo o espaço horizontal) */}
      <section className="w-full pt-12 pb-16 md:pt-20 md:pb-28">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-4xl mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8C7A65] block mb-4">
              Gutierrez • Belo Horizonte
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-display font-medium text-[#1C362B] leading-[1.1] tracking-[-0.02em]">
              O consultório pediátrico em seu mais alto padrão.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#53655C] font-light leading-relaxed max-w-2xl">
              25 m² de consultório privativo com luz natural, sala de espera lúdica e secretária dedicada aos seus pacientes. Traga apenas o seu jaleco.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Botão Agendar Visita colocado no lugar de Conhecer o Espaço */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1C362B] hover:bg-[#12231C] text-[#FDFBF7] text-sm font-medium tracking-wide px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
              >
                <span>Agendar Visita</span>
                <ArrowRight className="w-4 h-4 text-[#C9AF96]" />
              </button>

              <a
                href="#ambientes"
                className="text-sm font-medium text-[#53655C] hover:text-[#1C362B] px-6 py-4 rounded-full transition-colors"
              >
                Ver Ambientes ↓
              </a>
            </div>
          </div>

          {/* Destaque Fotográfico Full-Width Responsivo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D6] aspect-[16/9] max-h-[640px] w-full">
            <img
              src="/photos/recepcao_safari_kids.webp"
              alt="Espaço Safári Angatu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C362B]/85 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between text-white">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9AF96] font-semibold block mb-1">
                  Arquitetura que Acolhe
                </span>
                <h2 className="text-xl md:text-2xl font-display font-medium">
                  Tema Safári contemporâneo com espaço kids e fraldário completo.
                </h2>
              </div>
              
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#EAE3D6] hover:text-white underline mt-3 md:mt-0 transition-colors"
              >
                <span>Ver localização no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Os 3 Pilares com Grid Fluido */}
      <section className="w-full py-20 md:py-28 border-t border-[#EAE3D6]/70 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#8C7A65] tracking-widest block">
                01 / ESTRUTURA
              </span>
              <h3 className="text-2xl font-display font-medium text-[#1C362B]">
                Consultório Amplo de 25 m²
              </h3>
              <p className="text-sm text-[#53655C] leading-relaxed font-light">
                Paredes de vidro com iluminação natural revigorante, isolamento acústico, ar-condicionado silencioso e banheiro privativo exclusivo para o profissional médico.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#8C7A65] tracking-widest block">
                02 / ACOLHIMENTO
              </span>
              <h3 className="text-2xl font-display font-medium text-[#1C362B]">
                Espera Lúdica de 25 m²
              </h3>
              <p className="text-sm text-[#53655C] leading-relaxed font-light">
                Projetada para encantar as crianças e tranquilizar os pais. Brinquedoteca higienizada, fraldário completo e ambiente seguro que prepara o paciente para a consulta.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-medium text-[#8C7A65] tracking-widest block">
                03 / ASSISTÊNCIA
              </span>
              <h3 className="text-2xl font-display font-medium text-[#1C362B]">
                Secretária Dedicada
              </h3>
              <p className="text-sm text-[#53655C] leading-relaxed font-light">
                Atendimento focado em um único consultório. Confirmação ativa anti-falta, acolhimento pelo nome e suporte à rotina pediátrica sem filas ou sobrecarga de multi-clínicas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Galeria de Fotos Arquitetônica com Setas Interativas */}
      <section id="ambientes" className="w-full py-24 bg-[#FDFBF7]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A65] block mb-2">
                Ambientes Reais
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-[#1C362B]">
                O espaço em cada detalhe.
              </h2>
            </div>
            <p className="text-sm text-[#53655C] font-light max-w-sm mt-3 md:mt-0">
              Fotos reais do consultório e áreas sociais no Gutierrez. Clique em qualquer foto para navegar com as setas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group cursor-pointer space-y-3"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE3D6] border border-[#EAE3D6]/80 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <h4 className="text-base font-display font-medium text-[#1C362B]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[#8C7A65] tracking-wider uppercase">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#68776F] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal com Setas de Navegação (Prev / Next) */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#12231C]/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Seta Esquerda */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white text-white hover:text-[#1C362B] p-3 rounded-full backdrop-blur-md transition-all shadow-xl"
            title="Foto Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white text-white hover:text-[#1C362B] p-3 rounded-full backdrop-blur-md transition-all shadow-xl"
            title="Próxima Foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={spaces[selectedPhotoIndex].src}
                alt={spaces[selectedPhotoIndex].title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>
            <div className="p-6 md:p-8 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C7A65] block mb-1">
                  {spaces[selectedPhotoIndex].tag} ({selectedPhotoIndex + 1} de {spaces.length})
                </span>
                <h3 className="text-xl font-display font-medium text-[#1C362B]">
                  {spaces[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-[#53655C] mt-1">
                  {spaces[selectedPhotoIndex].desc}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPhotoIndex(null);
                  setIsModalOpen(true);
                }}
                className="text-xs uppercase tracking-wider font-semibold text-[#1C362B] underline shrink-0 ml-4"
              >
                Agendar Visita ➔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Condições & Exclusividade */}
      <section className="w-full py-20 md:py-28 bg-[#F5F0E6] border-t border-[#EAE3D6]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A65] block mb-3">
            Condições Comerciais
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-medium text-[#1C362B] tracking-tight">
            Transparência e previsibilidade para a sua clínica.
          </h2>

          <p className="mt-4 text-base text-[#53655C] font-light max-w-xl mx-auto">
            Sem condomínio, sem IPTU e sem dor de cabeça de gestão. Você investe apenas nos turnos semanais que utiliza.
          </p>

          {/* Card de Valores Sofisticado */}
          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-[#EAE3D6] shadow-xl text-left max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#EAE3D6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A67C52] font-semibold block mb-1">
                  Condição de Boas-Vindas
                </span>
                <h3 className="text-3xl font-display font-medium text-[#1C362B]">
                  R$ 500 <span className="text-sm font-normal text-[#68776F]">/ mês por turno</span>
                </h3>
                <p className="text-xs text-[#68776F] mt-1">Válido para os 2 primeiros meses de atendimento.</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:text-right">
                <span className="text-xs uppercase tracking-widest text-[#68776F] block mb-1">
                  A partir do 3º mês
                </span>
                <div className="text-2xl font-display font-medium text-[#1C362B]">
                  R$ 1.000 <span className="text-xs font-normal text-[#68776F]">/ mês</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3 text-xs text-[#53655C]">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#A67C52]" />
                <span>Secretária dedicada inclusa no atendimento</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#A67C52]" />
                <span>Internet Wi-Fi de alta velocidade, luz, água e limpeza diária</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#A67C52]" />
                <span>Estacionamento rotativo no edifício para os pacientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#A67C52]" />
                <span>Chave PIX: <strong>31 9 9714-1515</strong> (ANGATU)</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8C7A65]">Turnos limitados para preservar a tranquilidade.</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#1C362B] hover:bg-[#12231C] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all text-center"
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Convite Pessoal & Endereço com Hyperlink Google Maps */}
      <section className="w-full py-24 bg-[#1C362B] text-[#FDFBF7] text-center">
        <div className="w-full max-w-4xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9AF96] font-semibold block mb-3">
            Visita Presencial
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">
            Venha tomar um café e vivenciar o espaço.
          </h2>
          <p className="text-sm md:text-base text-[#D3E0D9] font-light max-w-lg mx-auto mb-8">
            Conheça o consultório pessoalmente antes de tomar sua decisão. Estamos à disposição para apresentar cada ambiente no Gutierrez.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-[#A67C52] hover:bg-[#8C653F] text-white text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Minha Visita</span>
          </button>

          {/* Hyperlink do Google Maps no Endereço Completo */}
          <div className="mt-14 pt-8 border-t border-white/10 text-xs text-[#D3E0D9]">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-[#C9AF96] hover:text-white transition-colors underline underline-offset-4"
            >
              <MapPin className="w-4 h-4 shrink-0 text-[#C9AF96]" />
              <span className="font-medium">{ADDRESS_TEXT}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <p className="text-[#8C9B93] mt-2">Coworking Pediátrico Angatu • WhatsApp: (31) 9 9714-1515</p>
          </div>
        </div>
      </section>

      {/* Modal / Dialog de Agendamento (Nome, Email, Especialidade -> Redirecionamento WhatsApp) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#12231C]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-[#EAE3D6] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#8C7A65] hover:text-[#1C362B] p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C7A65] block mb-1">
                Agendamento de Visita
              </span>
              <h3 className="text-2xl font-display font-medium text-[#1C362B]">
                Conheça o Coworking Angatu
              </h3>
              <p className="text-xs text-[#53655C] mt-1.5 font-light">
                Informe seus dados abaixo para conectar diretamente com nossa coordenação no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C362B] mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dra. Mariana ou Dr. Lucas"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] bg-[#FDFBF7] text-sm text-[#1C362B] focus:outline-none focus:ring-2 focus:ring-[#1C362B]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C362B] mb-1.5">
                  Especialidade
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Pediatria Geral, Fonoaudiologia, Psicologia..."
                  value={formData.especialidade}
                  onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] bg-[#FDFBF7] text-sm text-[#1C362B] focus:outline-none focus:ring-2 focus:ring-[#1C362B]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C362B] mb-1.5">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@medico.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAE3D6] bg-[#FDFBF7] text-sm text-[#1C362B] focus:outline-none focus:ring-2 focus:ring-[#1C362B]/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1C362B] hover:bg-[#12231C] text-white font-medium py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9AF96]" />
                  <span>Continuar no WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#8C7A65] pt-1">
                Atendimento rápido direto com a equipe Angatu.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 rounded-full shadow-2xl flex items-center space-x-2 transition-all hover:scale-105"
        title="Agendar Visita no WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden md:inline text-xs font-medium pr-1">Agendar Visita</span>
      </button>

    </div>
  );
}
