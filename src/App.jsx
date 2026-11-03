import React, { useState, useEffect } from 'react';
import {
  Baby,
  MapPin,
  MessageCircle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calculator,
  TrendingUp,
  X
} from 'lucide-react';

export default function App() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Profit Calculator State
  const [consultaPrice, setConsultaPrice] = useState(400);
  const [consultasPorTurno, setConsultasPorTurno] = useState(5);
  const [turnosPorSemana, setTurnosPorSemana] = useState(2);

  const consultasMensais = consultasPorTurno * turnosPorSemana * 4;
  const faturamentoBruto = consultasMensais * consultaPrice;
  const custoCoworkingRegular = turnosPorSemana * 1000;
  const custoCoworkingPromo = turnosPorSemana * 500;
  const lucroEstimado = faturamentoBruto - custoCoworkingRegular;
  const margemLucro = faturamentoBruto > 0 ? Math.round((lucroEstimado / faturamentoBruto) * 100) : 0;
  const economiaEstimada = Math.max(0, 9200 - custoCoworkingRegular);

  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    especialidade: ''
  });

  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=R.+Herculano+de+Freitas,+58+-+Sl+407+-+Gutierrez,+Belo+Horizonte+-+MG,+30441-039";
  const ADDRESS_TEXT = "R. Herculano de Freitas, 58 - Sl 407 - Gutierrez, Belo Horizonte - MG, 30441-039";

  // Gallery spaces with inverted order (Atendimento & Secretária in 2nd, Consultório Principal in 6th)
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

  // Auto-play carrossel Hero (5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % spaces.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [spaces.length]);

  const handleHeroPrev = (e) => {
    e?.stopPropagation();
    setHeroIndex((prev) => (prev - 1 + spaces.length) % spaces.length);
  };

  const handleHeroNext = (e) => {
    e?.stopPropagation();
    setHeroIndex((prev) => (prev + 1) % spaces.length);
  };

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

      {/* Header Minimalista - Full Width */}
      <header className="w-full border-b border-[#EAE3D6]/70 bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-20 md:h-24 flex items-center justify-between">
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

      {/* Hero Section Responsiva - Full Width com Carrossel */}
      <section className="w-full pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8C7A65] block mb-3">
                Gutierrez • Belo Horizonte
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-display font-medium text-[#1C362B] leading-[1.08] tracking-[-0.02em]">
                O consultório pediátrico em seu mais alto padrão.
              </h1>
            </div>

            <div className="max-w-xl flex flex-col items-start lg:items-end justify-between">
              <p className="text-base sm:text-lg text-[#53655C] font-light leading-relaxed lg:text-right">
                25 m² de consultório privativo com luz natural, sala de espera lúdica e secretária dedicada aos seus pacientes. Traga apenas o seu jaleco.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
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
          </div>

          {/* Carrossel Hero com Todo o Espaço Horizontal e Legenda Elegante */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D6] aspect-[16/9] md:aspect-[21/9] min-h-[380px] max-h-[680px] w-full group">
            {spaces.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform duration-1000 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C362B]/90 via-[#1C362B]/30 to-transparent" />
              </div>
            ))}

            {/* Setas de Navegação do Carrossel Hero */}
            <button
              onClick={handleHeroPrev}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-white hover:text-[#1C362B] p-3 rounded-full backdrop-blur-md transition-all opacity-80 hover:opacity-100 shadow-lg"
              title="Ambiente Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleHeroNext}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-white hover:text-[#1C362B] p-3 rounded-full backdrop-blur-md transition-all opacity-80 hover:opacity-100 shadow-lg"
              title="Próximo Ambiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Apenas Legenda Bonita & Indicador de Slides (Sem link do Google Maps) */}
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-10 right-6 md:right-10 z-20 flex flex-col md:flex-row md:items-end justify-between text-white gap-4">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9AF96] font-semibold block mb-1">
                  {spaces[heroIndex].tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
                  {spaces[heroIndex].title}
                </h2>
                <p className="text-xs md:text-sm text-[#EAE3D6] font-light mt-1 max-w-xl leading-relaxed">
                  {spaces[heroIndex].desc}
                </p>
              </div>

              {/* Indicadores Minimalistas de Slide */}
              <div className="flex items-center space-x-2">
                {spaces.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === heroIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    title={`Ir para foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Os 3 Pilares com Grid Fluido Full-Width */}
      <section className="w-full py-20 md:py-28 border-t border-[#EAE3D6]/70 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            
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

      {/* Galeria de Fotos Arquitetônica Full-Width */}
      <section id="ambientes" className="w-full py-24 bg-[#FDFBF7]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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

      {/* Condições & Exclusividade - Full Width Grid */}
      <section className="w-full py-20 md:py-28 bg-[#F5F0E6] border-t border-[#EAE3D6]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A65] block mb-3">
                Condições Comerciais
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-[#1C362B] tracking-tight leading-[1.15]">
                Transparência e previsibilidade para a sua clínica.
              </h2>
              <p className="mt-5 text-base text-[#53655C] font-light leading-relaxed">
                Sem condomínio, sem IPTU e sem dor de cabeça de gestão. Você investe apenas nos turnos semanais que utiliza, com secretária e estrutura completa inclusas.
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2.5 rounded-full bg-[#1C362B]/5 border border-[#1C362B]/10 text-xs text-[#1C362B] font-medium">
                Turnos limitados para preservar a tranquilidade.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EAE3D6] shadow-xl text-left w-full">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#EAE3D6] gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#A67C52] font-semibold block mb-1">
                      Condição de Boas-Vindas
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#1C362B]">
                      R$ 500 <span className="text-sm font-normal text-[#68776F]">/ mês por turno</span>
                    </h3>
                    <p className="text-xs text-[#68776F] mt-1">Válido para os 2 primeiros meses de atendimento.</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs uppercase tracking-widest text-[#68776F] block mb-1">
                      A partir do 3º mês
                    </span>
                    <div className="text-2xl sm:text-3xl font-display font-medium text-[#1C362B]">
                      R$ 1.000 <span className="text-xs font-normal text-[#68776F]">/ mês</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#53655C]">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                    <span>Secretária dedicada inclusa no atendimento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                    <span>Internet Wi-Fi de alta velocidade, água e luz</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                    <span>Estacionamento rotativo no edifício para os pacientes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                    <span>Sem custos de condomínio, IPTU ou encargos CLT</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#8C7A65]">Acolhimento humanizado para mães e crianças.</span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto bg-[#1C362B] hover:bg-[#12231C] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all text-center shadow-md hover:shadow-lg"
                  >
                    Agendar Visita
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Calculadora Interativa de Lucro & Retorno */}
      <section id="calculadora" className="w-full py-20 md:py-28 bg-[#FDFBF7] border-t border-[#EAE3D6]">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A65] block mb-2">
              Planejamento Financeiro
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-[#1C362B] tracking-tight">
              Simulador de Lucro do Seu Consultório
            </h2>
            <p className="mt-3 text-base text-[#53655C] font-light leading-relaxed">
              Descubra quanto você fatura atendendo no Angatu com secretária inclusa e compare com os custos de um consultório convencional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controles de Simulação */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 md:p-10 border border-[#EAE3D6] shadow-sm space-y-8">
              
              {/* Valor da Consulta */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-[#1C362B]">
                    Valor da Consulta Particular
                  </label>
                  <span className="text-2xl font-display font-medium text-[#1C362B]">
                    R$ {consultaPrice}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="25"
                  value={consultaPrice}
                  onChange={(e) => setConsultaPrice(Number(e.target.value))}
                  className="w-full accent-[#1C362B] cursor-pointer h-2 bg-[#EAE3D6] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#8C7A65] mt-1 font-mono">
                  <span>R$ 200</span>
                  <span>R$ 600</span>
                  <span>R$ 1.000</span>
                </div>
              </div>

              {/* Pacientes por Turno */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-semibold uppercase tracking-wider text-[#1C362B]">
                    Atendimentos por Turno (4h)
                  </label>
                  <span className="text-xl font-display font-medium text-[#1C362B]">
                    {consultasPorTurno} consultas
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setConsultasPorTurno(num)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        consultasPorTurno === num
                          ? 'bg-[#1C362B] text-white shadow-md'
                          : 'bg-[#FDFBF7] border border-[#EAE3D6] text-[#53655C] hover:border-[#1C362B]/40'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnos por Semana */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-semibold uppercase tracking-wider text-[#1C362B]">
                    Turnos Semanais
                  </label>
                  <span className="text-xl font-display font-medium text-[#1C362B]">
                    {turnosPorSemana} {turnosPorSemana === 1 ? 'turno' : 'turnos'} / semana
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setTurnosPorSemana(num)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        turnosPorSemana === num
                          ? 'bg-[#1C362B] text-white shadow-md'
                          : 'bg-[#FDFBF7] border border-[#EAE3D6] text-[#53655C] hover:border-[#1C362B]/40'
                      }`}
                    >
                      {num} {num === 1 ? 'dia' : 'dias'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-[#8C7A65] flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                <span>Base de 4 semanas/mês • Estimativa transparente e sem surpresas</span>
              </div>

            </div>

            {/* Painel de Resultados */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card Destaque de Lucro */}
              <div className="bg-[#1C362B] text-[#FDFBF7] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C9AF96] font-semibold block mb-1">
                      Lucro Líquido Estimado
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
                      R$ {lucroEstimado.toLocaleString('pt-BR')}
                      <span className="text-xs font-light text-[#D3E0D9] block mt-1 font-sans">
                        / mês no bolso do profissional
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#A67C52]/30 border border-[#A67C52]/50 px-3 py-1.5 rounded-full text-xs font-semibold text-[#FDFBF7] shrink-0">
                    {margemLucro}% de margem
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#8C9B93] block">Faturamento Bruto</span>
                    <span className="text-lg font-display font-medium text-white">
                      R$ {faturamentoBruto.toLocaleString('pt-BR')}
                    </span>
                    <span className="text-[11px] text-[#8C9B93] block">({consultasMensais} consultas/mês)</span>
                  </div>
                  <div>
                    <span className="text-[#8C9B93] block">Custo Coworking Angatu</span>
                    <span className="text-lg font-display font-medium text-[#C9AF96]">
                      R$ {custoCoworkingRegular.toLocaleString('pt-BR')} <span className="text-xs font-normal text-white/70">/ mês</span>
                    </span>
                    <span className="text-[11px] text-[#A67C52] block">
                      (R$ {custoCoworkingPromo.toLocaleString('pt-BR')} nos 2 primeiros meses)
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#A67C52] hover:bg-[#8C653F] text-white font-medium py-4 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Agendar Visita e Garantir Turnos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Comparativo com Consultório Tradicional */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#EAE3D6] shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#A67C52]/10 p-2.5 rounded-2xl text-[#A67C52] shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-medium text-[#1C362B]">
                      Economia Comparativa: R$ {economiaEstimada.toLocaleString('pt-BR')} / mês
                    </h4>
                    <p className="text-xs text-[#53655C] font-light leading-relaxed mt-1">
                      Em um consultório convencional na região nobre de BH, custos com aluguel comercial, condomínio, IPTU, secretária CLT com encargos, luz, água e internet totalizam mais de R$ 9.200/mês — faça chuva ou faça sol. No Angatu, seu custo é proporcional à sua escala.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Convite Pessoal & Endereço com Hyperlink Google Maps */}
      <section className="w-full py-24 bg-[#1C362B] text-[#FDFBF7] text-center">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto">
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
