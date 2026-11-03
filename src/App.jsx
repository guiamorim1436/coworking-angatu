import React, { useState } from 'react';
import {
  Baby,
  Building2,
  Calendar,
  CheckCircle,
  Coffee,
  HeartHandshake,
  MapPin,
  MessageCircle,
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

      {/* 1. O SITE JÁ INICIA COM O TOUR EM TELA CHEIA (SEM MENU / SEM CABEÇALHO) */}
      <div id="tour-hero">
        <WalkthroughScroll />
      </div>

      {/* 2. TRANSIÇÃO PÓS-TOUR: APRESENTAÇÃO E IDENTIFICAÇÃO DOS DOIS PÚBLICOS */}
      <section className="py-20 bg-white border-b border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] mb-2 block">
              Posicionamento Inteligente
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#1E3F35] tracking-tight">
              Você se formou para cuidar de crianças, não para gerenciar reformas e condomínios.
            </h2>
            <p className="text-[#4A5568] mt-4 text-base md:text-lg leading-relaxed">
              Montar e manter uma clínica própria em Belo Horizonte virou um ralo de energia e capital. O Angatu no Gutierrez foi desenhado para eliminar toda a burocracia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-[#E2DBCF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EDE7] flex items-center justify-center text-[#1E3F35] mb-5">
                <Stethoscope className="w-6 h-6 text-[#4A7C59]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#4A7C59] mb-1">Público 01</div>
              <h3 className="text-2xl font-display font-bold text-[#1E3F35] mb-3">
                Recém-Saído da Residência ou Especialização
              </h3>
              <p className="text-sm font-semibold text-[#C48B54] mb-4">
                "Quero começar a atender no particular imediatamente, com risco mínimo e custo previsível."
              </p>
              <ul className="space-y-3 text-sm text-[#4A5568]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C48B54] font-bold">✕</span>
                  <span><strong>Sem desembolsar R$ 60 mil a R$ 100 mil</strong> com arquitetura, mobília cara e alvarás.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Endereço nobre no Gutierrez</strong> para colocar no receituário e passar autoridade imediata.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>R$ 500/mês nos primeiros meses:</strong> 1 única consulta particular já cobre o turno inteiro.</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-[#E2DBCF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#F0ECE1] flex items-center justify-center text-[#1E3F35] mb-5">
                <Building2 className="w-6 h-6 text-[#C48B54]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C48B54] mb-1">Público 02</div>
              <h3 className="text-2xl font-display font-bold text-[#1E3F35] mb-3">
                Médico ou Especialista Já Experiente
              </h3>
              <p className="text-sm font-semibold text-[#4A7C59] mb-4">
                "Tenho minha base de pacientes, mas cansei do estresse e da dor de cabeça do consultório próprio."
              </p>
              <ul className="space-y-3 text-sm text-[#4A5568]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C48B54] font-bold">✕</span>
                  <span><strong>Fim do passivo trabalhista:</strong> esqueça contratação, rescisões e faltas de secretária.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Zero estresse de manutenção:</strong> ar-condicionado, limpeza hospitalar e internet sempre prontos.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#4A7C59] font-bold">✓</span>
                  <span><strong>Secretária dedicada com atendimento de excelência:</strong> acolhe seus pacientes com humanização e carinho.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O GRANDE DIFERENCIAL: A SECRETÁRIA DEDICADA */}
      <section className="py-20 bg-[#1E3F35] text-white">
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
                    <h4 className="font-bold text-white text-sm">Apoio em Geração de Leads & Retenção</h4>
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
                  <span>Conhecer a Equipe & o Espaço no WhatsApp</span>
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

      {/* 4. GALERIA DE FOTOS DOS AMBIENTES */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59] mb-2 block">
              Galeria de Ambientes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#1E3F35]">
              Arquitetura pensada para o acolhimento da infância.
            </h2>
            <p className="text-sm md:text-base text-[#4A5568] mt-3">
              Confira os ambientes reais do Coworking Angatu montados no Gutierrez, com padrão de acabamento impecável.
            </p>
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

      {/* 5. CALCULADORA DE VALORES (R$ 500 PROMO / R$ 1.000 REGULAR) */}
      <section className="py-20 bg-[#F0ECE1]/60 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* 6. GRADE COMPLETA DE EQUIPAMENTOS */}
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

      {/* 7. FAQ ACCORDION */}
      <section className="py-20 bg-[#FAF8F5]">
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

      {/* 8. CTA FINAL & INFORMAÇÕES */}
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
            <span>📍 Bairro Gutierrez, Belo Horizonte - MG (Contorno c/ Raja)</span>
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
