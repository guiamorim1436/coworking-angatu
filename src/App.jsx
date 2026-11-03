import React, { useState } from 'react';
import {
  Baby,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Coffee,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
  Tv,
  Users,
  Wifi,
  ChevronRight,
  ExternalLink,
  Award,
  ArrowUpRight
} from 'lucide-react';

import WalkthroughScroll from './components/WalkthroughScroll';
import ThreeModelViewer from './components/ThreeModelViewer';
import PricingCalculator from './components/PricingCalculator';

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);

  const WHATSAPP_URL = "https://wa.me/5531997141515?text=" + encodeURIComponent("Olá! Gostaria de agendar uma visita ao Coworking Pediátrico Angatu no Gutierrez para conhecer os turnos disponíveis.");

  const photos = [
    {
      src: "/photos/recepcao_safari_kids.webp",
      title: "Recepção Lúdica de 25m²",
      category: "Espera & Kids",
      desc: "Tema Safári contemporâneo com espaço infantil, ar-condicionado e fraldário completo."
    },
    {
      src: "/photos/consultorio_visao_ampla.webp",
      title: "Consultório 25m² com Luz Natural",
      category: "Atendimento",
      desc: "Paredes de vidro com vista panorâmica, iluminação natural e isolamento acústico."
    },
    {
      src: "/photos/consultorio_mesa.webp",
      title: "Mesa Médica & Cadeira Flexform",
      category: "Ergonomia",
      desc: "Conforto postural de alto padrão para longas jornadas de atendimento."
    },
    {
      src: "/photos/consultorio_maca.webp",
      title: "Maca Pediátrica Clínica",
      category: "Exame Clínico",
      desc: "Estrutura higienizada e anatômica para acolher bebês e crianças com segurança."
    },
    {
      src: "/photos/consultorio_balanca.webp",
      title: "Balança Digital & Antropômetro",
      category: "Equipamentos",
      desc: "Precisão na medição do desenvolvimento infantil pronta para o atendimento."
    },
    {
      src: "/photos/copa_conforto.webp",
      title: "Copa Completa de Apoio",
      category: "Conforto",
      desc: "Micro-ondas, frigobar, cafeteira e utensílios reservados para o profissional."
    }
  ];

  const faqs = [
    {
      q: "Para quais especialidades o consultório é indicado?",
      a: "O espaço foi projetado especificamente para a assistência materno-infantil: Pediatria Geral, Odontopediatria, Fonoaudiologia Infantil, Psicopedagogia, Psicologia Infantil, Nutrição Pediátrica, Fisioterapia Infantil e neuropediatria."
    },
    {
      q: "Qual é o valor do aluguel e como funciona a promoção de inauguração?",
      a: "Nos dois primeiros meses, você conta com a condição especial de boas-vindas por R$ 500,00/mês por turno. A partir do 3º mês, o valor passa para R$ 1.000,00/mês por turno. Esse valor contempla secretária dedicada, internet Wi-Fi de alta velocidade, condomínio, luz, água e limpeza diária com descartáveis."
    },
    {
      q: "O que é considerado um 'Turno'?",
      a: "Um turno corresponde a um período de 4 a 5 horas semanais fixas (exemplo: Manhã das 08h às 12h ou Tarde das 13h às 18h) em um dia fixo da semana, válido durante todo o mês (4 a 5 semanas). O horário é reservado exclusivamente para você."
    },
    {
      q: "Como funciona a secretária dedicada e exclusiva?",
      a: "Diferente de coworkings convencionais onde 1 recepcionista atende 15 salas caóticas ao mesmo tempo, nossa secretária assiste exclusivamente a este consultório em funcionamento. Ela acolhe as famílias pelo nome, orienta exames e realiza confirmação ativa anti-falta (reduzindo no-show)."
    },
    {
      q: "O que o médico precisa levar no primeiro dia?",
      a: "Apenas seu computador pessoal, estetoscópio/instrumentos específicos de exame e carimbo. A sala já possui impressora configurada, maca, balança, smart TV, climatização e insumos de apoio prontos."
    },
    {
      q: "Como funciona o estacionamento para os pacientes e para o médico?",
      a: "O edifício conta com estacionamento rotativo seguro com manobrista para os pais dos pacientes. Para o médico, em breve haverá vaga de garagem privativa reservada durante o turno de atendimento."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#19201D] font-sans selection:bg-[#4A7C59] selection:text-white">

      {/* Top Banner Promo */}
      <div className="bg-[#1E3F35] text-white py-2.5 px-4 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#88B04B] animate-ping" />
            <span className="font-semibold text-[#88B04B]">Condição Especial de Boas-Vindas:</span>
            <span className="hidden sm:inline">2 Primeiros Meses por apenas <strong>R$ 500/mês por turno</strong> (depois R$ 1.000/mês).</span>
            <span className="sm:hidden">R$ 500/mês nos 2 primeiros meses.</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 underline hover:text-[#88B04B] transition-colors"
          >
            <span>Ver Turnos Livres</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DBCF]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3F35] flex items-center justify-center text-white shadow-md">
              <Baby className="w-6 h-6 text-[#88B04B]" />
            </div>
            <div>
              <div className="text-xl font-display font-extrabold text-[#1E3F35] tracking-tight">
                ANGATU
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#4A7C59]">
                Coworking Pediátrico
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#4A5568]">
            <a href="#tour" className="hover:text-[#1E3F35] transition-colors">Tour Virtual</a>
            <a href="#diferenciais" className="hover:text-[#1E3F35] transition-colors">Diferenciais</a>
            <a href="#secretaria" className="hover:text-[#1E3F35] transition-colors">Secretária Dedicada</a>
            <a href="#estrutura" className="hover:text-[#1E3F35] transition-colors">Estrutura 25m²</a>
            <a href="#simulador" className="hover:text-[#1E3F35] transition-colors">Valores</a>
            <a href="#faq" className="hover:text-[#1E3F35] transition-colors">Dúvidas</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#4A7C59] hover:bg-[#2A573F] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Visita</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E5EDE7] text-[#1E3F35] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#4A7C59]" />
                <span>Gutierrez • Belo Horizonte • Av. do Contorno c/ Raja</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#1E3F35] leading-[1.12] tracking-tight">
                Seu consultório pediátrico pronto, com secretária dedicada e zero dor de cabeça.
              </h1>

              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl">
                Consultório amplo de <strong>25 m² com luz natural</strong>, sala de espera lúdica temática safári e suporte de secretária com acolhimento humanizado para mães e crianças. Chegue apenas com seu jaleco e estetoscópio; nós cuidamos de toda a operação.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-sm text-[#2A573F]">
                  <CheckCircle className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span><strong>Secretária dedicada:</strong> confirmação ativa anti-falta</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#2A573F]">
                  <CheckCircle className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span><strong>Sala de espera 25 m²:</strong> espaço kids e fraldário</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#2A573F]">
                  <CheckCircle className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span><strong>Banheiro privativo</strong> exclusivo dentro do consultório</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#2A573F]">
                  <CheckCircle className="w-4 h-4 text-[#4A7C59] shrink-0" />
                  <span><strong>Sem condomínio,</strong> sem IPTU ou encargos CLT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E3F35] hover:bg-[#132822] text-white px-8 py-4 rounded-xl font-bold text-center flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-[#88B04B]" />
                  <span>Agendar Visita no WhatsApp</span>
                </a>
                <a
                  href="#tour"
                  className="bg-white hover:bg-[#F0ECE1] text-[#1E3F35] border border-[#E2DBCF] px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Iniciar Tour pelo Espaço</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#E2DBCF]/80 flex flex-wrap items-center gap-6 text-xs text-[#4A5568]">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-[#C48B54]" />
                  <span>Perfeito para Recém-Formados & Médicos Experientes</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#4A7C59]" />
                  <span>Estacionamento Rotativo no Prédio</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card with High-Res Photo & 3D Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-h-[560px] w-full">
                <img
                  src="/photos/recepcao_safari_kids.webp"
                  alt="Recepção Pediátrica Angatu no Gutierrez"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19201D]/90 via-transparent to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E3F35] shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C48B54]" />
                  <span>Gutierrez • BH</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#88B04B] font-bold mb-1">
                    Ambiente Safári & Lúdico
                  </div>
                  <h3 className="text-xl font-display font-bold leading-snug">
                    A calma que a família precisa para uma consulta de excelência.
                  </h3>
                  <p className="text-xs text-[#C9DBCF] mt-1">
                    25 m² climatizados, brinquedoteca e fraldário completo.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audiences: Recém-Formados vs. Médicos Experientes */}
      <section className="py-16 bg-white border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] mb-2">
              Para Quem Foi Desenhado
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-[#1E3F35]">
              Você se formou para cuidar de crianças, não para ser síndico ou gestor de reformas.
            </h3>
            <p className="text-[#4A5568] mt-3 text-base">
              Montar e manter uma clínica em Belo Horizonte virou um ralo de energia e capital. O Angatu resolve exatamente as dores de dois momentos da carreira:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E2DBCF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-5">
                <Stethoscope className="w-6 h-6 text-[#4A7C59]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] mb-1">Perfil 01</div>
              <h4 className="text-2xl font-display font-bold text-[#1E3F35] mb-3">
                Recém-Saído da Residência ou Especialização
              </h4>
              <p className="text-sm font-semibold text-[#C48B54] mb-4">
                "Quero começar a atender no particular imediatamente, mas sem dar um salto no escuro financeiro."
              </p>
              <ul className="space-y-2.5 text-sm text-[#4A5568]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C48B54] font-bold">✕</span>
                  <span><strong>Sem gastar R$ 60 a R$ 100 mil</strong> com projeto, arquiteto, mobília e alvarás sanitários.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Endereço nobre no Gutierrez</strong> para colocar no receituário e passar autoridade imediata aos primeiros pacientes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Custo fixo mínimo e previsível:</strong> R$ 500/mês nos primeiros meses (1 única consulta já paga o turno).</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E2DBCF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#F0ECE1] flex items-center justify-center text-[#1E3F35] mb-5">
                <Building2 className="w-6 h-6 text-[#C48B54]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C48B54] mb-1">Perfil 02</div>
              <h4 className="text-2xl font-display font-bold text-[#1E3F35] mb-3">
                Médico ou Especialista Já Consolidado
              </h4>
              <p className="text-sm font-semibold text-[#4A7C59] mb-4">
                "Tenho minha base de pacientes, mas cansei do estresse e do custo fixo de manter consultório próprio."
              </p>
              <ul className="space-y-2.5 text-sm text-[#4A5568]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C48B54] font-bold">✕</span>
                  <span><strong>Fim do passivo trabalhista:</strong> esqueça contratação, rescisões e faltas de funcionária própria.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Zero preocupação com manutenção:</strong> ar-condicionado, limpeza hospitalar e internet sempre impecáveis.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Secretária dedicada com atendimento de excelência:</strong> acolhe os pacientes da sua carteira com elegância.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive GSAP Walkthrough Section (Video Frame-by-Frame Scrub) */}
      <div id="tour">
        <WalkthroughScroll />
      </div>

      {/* O Grande Diferencial: A Secretária Dedicada */}
      <section id="secretaria" className="py-20 bg-[#1E3F35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4A7C59]/30 text-[#88B04B] text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Atendimento de Consultório Único</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold leading-tight">
                Esqueça aquela secretária de coworking sobrecarregada com 15 salas ao mesmo tempo.
              </h2>

              <p className="text-base text-[#C9DBCF] leading-relaxed">
                O maior receio de um médico ao alugar em espaços compartilhados é a recepção fria e desatenta. No Angatu, nossa secretária assiste <strong>exclusivamente a um consultório em funcionamento</strong>.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 bg-[#132822]/60 p-4 rounded-2xl border border-[#4A7C59]/20">
                  <CheckCircle className="w-5 h-5 text-[#88B04B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Confirmação Ativa Anti-Falta (Redução de No-Show)</h4>
                    <p className="text-xs text-[#C9DBCF] mt-1">Contato cordial pré-consulta confirmando horários e tirando dúvidas de localização dos pais.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-[#132822]/60 p-4 rounded-2xl border border-[#4A7C59]/20">
                  <CheckCircle className="w-5 h-5 text-[#88B04B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Acolhimento Familiar & Especialização Pediátrica</h4>
                    <p className="text-xs text-[#C9DBCF] mt-1">Treinamento específico para receber mães com carrinhos de bebê, irmãos e crianças agitadas com empatia e tranquilidade.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-[#132822]/60 p-4 rounded-2xl border border-[#4A7C59]/20">
                  <CheckCircle className="w-5 h-5 text-[#88B04B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Apoio em Geração de Leads & Marketing</h4>
                    <p className="text-xs text-[#C9DBCF] mt-1">Assistência estratégica na retenção e retorno de pacientes para impulsionar a sua agenda particular.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#C48B54] hover:bg-[#A66E3A] text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conhecer a Equipe & o Espaço</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/photos/recepcao_hall.webp"
                  alt="Recepção e Hall Angatu"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132822] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-white/10 text-xs text-[#C9DBCF]">
                  <p className="italic">
                    "A experiência do seu paciente particular começa no primeiro 'olá' na recepção. Garantimos que ele sinta o cuidado e a sofisticação que seu atendimento merece."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3D Interactive Spatial View & Photo Gallery */}
      <section id="estrutura" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] mb-2 block">
              Exploração Espacial
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#1E3F35]">
              Arquitetura pensada para o acolhimento da infância.
            </h2>
            <p className="text-sm md:text-base text-[#4A5568] mt-3">
              Explore a maquete 3D procedural do consultório e confira as fotos reais dos ambientes montados no Gutierrez.
            </p>
          </div>

          {/* 3D Model Procedural Viewer */}
          <div className="mb-14">
            <ThreeModelViewer />
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#E2DBCF] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#E5EDE7]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A7C59] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#1E3F35] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculator (Updated to R$ 1.000 regular) */}
      <section id="simulador" className="py-20 bg-[#F0ECE1]/60 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* Complete Infrastructure Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] block mb-2">
              Estrutura Inclusa no Aluguel
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#1E3F35]">
              Tudo pronto no primeiro minuto de uso.
            </h2>
            <p className="text-sm text-[#4A5568] mt-2">
              Sem taxas ocultas. Você não paga taxa de condomínio, IPTU ou manutenção por fora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DBCF]">
              <div className="w-10 h-10 rounded-xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-4">
                <Stethoscope className="w-5 h-5 text-[#4A7C59]" />
              </div>
              <h4 className="font-display font-bold text-[#1E3F35] text-base mb-2">No Consultório</h4>
              <ul className="text-xs text-[#4A5568] space-y-2">
                <li>• 25m² com janelas de vidro e luz natural</li>
                <li>• Cadeira ergonômica Flexform de diretoria</li>
                <li>• Banheiro privativo exclusivo do médico</li>
                <li>• Maca pediátrica higienizada</li>
                <li>• Balança digital pediátrica com antropômetro</li>
                <li>• Smart TV para distração durante o exame</li>
                <li>• Impressora pronta para conexão Wi-Fi</li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DBCF]">
              <div className="w-10 h-10 rounded-xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-4">
                <Baby className="w-5 h-5 text-[#C48B54]" />
              </div>
              <h4 className="font-display font-bold text-[#1E3F35] text-base mb-2">Na Recepção</h4>
              <ul className="text-xs text-[#4A5568] space-y-2">
                <li>• 25m² temáticos safári/lúdico</li>
                <li>• Espaço Kids com brinquedoteca segura</li>
                <li>• Banheiro exclusivo para pacientes</li>
                <li>• Fraldário completo com bancada</li>
                <li>• Ar-condicionado e Wi-Fi de alta velocidade</li>
                <li>• 6 assentos confortáveis para adultos</li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DBCF]">
              <div className="w-10 h-10 rounded-xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-4">
                <Coffee className="w-5 h-5 text-[#4A7C59]" />
              </div>
              <h4 className="font-display font-bold text-[#1E3F35] text-base mb-2">Na Copa & Apoio</h4>
              <ul className="text-xs text-[#4A5568] space-y-2">
                <li>• Copa reservada para o profissional</li>
                <li>• Micro-ondas, frigobar e cafeteira</li>
                <li>• Café e água fresca de cortesia</li>
                <li>• Limpeza diária e manutenção inclusas</li>
                <li>• Reposição de sabonete e descartáveis</li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E2DBCF]">
              <div className="w-10 h-10 rounded-xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-4">
                <Building2 className="w-5 h-5 text-[#C48B54]" />
              </div>
              <h4 className="font-display font-bold text-[#1E3F35] text-base mb-2">No Edifício</h4>
              <ul className="text-xs text-[#4A5568] space-y-2">
                <li>• Endereço nobre no Bairro Gutierrez</li>
                <li>• Cruzamento Av. do Contorno com Raja</li>
                <li>• Estacionamento rotativo para pacientes</li>
                <li>• Portaria segura com controle de acesso</li>
                <li>• Vaga privativa para o médico (em breve)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] block mb-2">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl font-display font-extrabold text-[#1E3F35]">
              Tire todas as suas dúvidas antes da visita.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2DBCF] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-display font-bold text-base text-[#1E3F35] hover:text-[#4A7C59] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-[#C48B54] font-mono ml-4">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-sm text-[#4A5568] leading-relaxed border-t border-[#FAF8F5] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Location */}
      <section className="py-20 bg-[#1E3F35] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3 py-1 rounded-full bg-[#4A7C59]/40 text-[#88B04B] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            Vagas Limitadas por Turno
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight mb-4">
            Venha tomar um café conosco e conhecer seu novo consultório.
          </h2>
          <p className="text-base text-[#C9DBCF] max-w-2xl mx-auto mb-8">
            Os turnos no Gutierrez são restritos para manter o atendimento exclusivo e sem sobrecarga. Agende uma visita sem compromisso para escolher o melhor dia para a sua agenda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#C48B54] hover:bg-[#A66E3A] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl hover:shadow-2xl text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar Minha Visita no WhatsApp</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[#4A7C59]/30 text-xs text-[#C9DBCF] flex flex-wrap items-center justify-center gap-6">
            <span>📍 Bairro Gutierrez, Belo Horizonte - MG</span>
            <span>📱 WhatsApp & Chave PIX: (31) 9 9714-1515</span>
            <span>💳 Recebedor: ANGATU</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 transition-all duration-300 hover:scale-110 group"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline text-xs font-bold pr-1">Falar no WhatsApp</span>
      </a>

    </div>
  );
}
