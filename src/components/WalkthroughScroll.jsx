import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Sparkles, ShieldCheck, ChevronDown, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 100;

export default function WalkthroughScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const imagesRef = useRef([]);

  // Preload native 1920x1080 (16:9) WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    // Preload first frame immediately
    const firstImg = new Image();
    firstImg.src = '/walkthrough/frame_001.webp';
    firstImg.onload = () => {
      // First frame ready for immediate display
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = String(i).padStart(3, '0');
      img.src = `/walkthrough/frame_${frameIndex}.webp`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount >= Math.min(12, TOTAL_FRAMES)) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 16:9 Full Screen Cover Render (ZERO TARJAS / NO BLACK BARS)
    const renderFrame = (index) => {
      const img = imagesRef.current[index] || imagesRef.current[0];
      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;

      // Pure cover math: guaranteed edge-to-edge with zero letterboxing or pillarboxing
      const hRatio = cw / iw;
      const vRatio = ch / ih;
      const ratio = Math.max(hRatio, vRatio);

      const renderW = iw * ratio;
      const renderH = ih * ratio;
      const posX = (cw - renderW) / 2;
      const posY = (ch - renderH) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, posX, posY, renderW, renderH);
    };

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${window.innerHeight}px`;

      renderFrame(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=4200',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(p * (TOTAL_FRAMES - 1))
        );
        renderFrame(targetFrame);

        // Step thresholds
        if (p < 0.22) setActiveStep(0);
        else if (p < 0.50) setActiveStep(1);
        else if (p < 0.75) setActiveStep(2);
        else setActiveStep(3);
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      st.kill();
    };
  }, [loaded]);

  const cards = [
    {
      step: "01",
      icon: <Compass className="w-5 h-5 text-[#88B04B]" />,
      tag: "Entrada • Gutierrez BH",
      title: "Seu consultório pediátrico no ponto mais nobre de BH",
      desc: "Cruzamento da Av. do Contorno com Raja Gabaglia. Acesso rápido e seguro para famílias de toda a capital, com estacionamento rotativo no prédio."
    },
    {
      step: "02",
      icon: <Sparkles className="w-5 h-5 text-[#C48B54]" />,
      tag: "Recepção Lúdica de 25m²",
      title: "Tema Safári contemporâneo com Espaço Kids",
      desc: "Brinquedoteca segura e acolhedora, ar-condicionado, Wi-Fi e fraldário completo. A consulta começa na calma da sala de espera."
    },
    {
      step: "03",
      icon: <Users className="w-5 h-5 text-[#88B04B]" />,
      tag: "Diferencial Exclusivo",
      title: "Secretária dedicada para um único consultório",
      desc: "Sem filas ou sobrecarga de multi-clínicas. Confirmação ativa anti-falta, recepção afetuosa de pais e bebês e suporte ao seu dia a dia."
    },
    {
      step: "04",
      icon: <ShieldCheck className="w-5 h-5 text-[#88B04B]" />,
      tag: "Consultório 25m² Privativo",
      title: "Luz natural, ergonomia e banheiro privativo",
      desc: "Paredes de vidro com vista livre, cadeira Flexform, ar-condicionado silencioso, maca pediátrica higienizada, balança, smart TV e impressora pronta."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#111A16] overflow-hidden select-none">
      {/* Loading Screen */}
      {!loaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#132822] text-[#FAF8F5]">
          <div className="w-14 h-14 border-4 border-[#4A7C59]/30 border-t-[#88B04B] rounded-full animate-spin mb-4" />
          <p className="text-xl font-display font-extrabold tracking-tight">Iniciando Tour no Coworking Angatu...</p>
          <span className="text-xs uppercase tracking-widest text-[#C9DBCF] mt-1.5">
            Alta Resolução 16:9 ({loadProgress}%)
          </span>
        </div>
      )}

      {/* 16:9 Edge-to-Edge Canvas (NO TARJAS / ZERO BLACK BARS) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0 object-cover"
      />

      {/* Cinematic Vignette Overlays for Maximum Premium Contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#111A16]/90 via-transparent to-[#111A16]/60 z-10" />
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-[#111A16]/40 z-10" />

      {/* Minimal Top Brand Badge (NO HEADER / NO MENU) */}
      <div className="absolute top-6 left-6 md:left-10 z-20 flex items-center space-x-3 bg-[#132822]/85 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 text-white shadow-2xl">
        <span className="w-2.5 h-2.5 rounded-full bg-[#88B04B] animate-pulse" />
        <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#FAF8F5]">
          ANGATU • Coworking Pediátrico
        </span>
        <span className="text-xs text-[#C9DBCF] border-l border-white/20 pl-2 hidden sm:inline">
          Gutierrez, BH
        </span>
      </div>

      {/* Direct WhatsApp CTA Floating Top-Right */}
      <div className="absolute top-6 right-6 md:right-10 z-20">
        <a
          href="https://wa.me/5531997141515?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20turnos%20do%20Coworking%20Angatu%20no%20Gutierrez."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C48B54] hover:bg-[#A66E3A] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          <span>Agendar Visita</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Initial Scroll Prompt (Step 0) */}
      {activeStep === 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-4">
          <div className="inline-block bg-[#132822]/80 backdrop-blur-2xl px-8 py-5 rounded-3xl border border-white/25 shadow-2xl animate-bounce">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#88B04B] block mb-1.5">
              Tour Virtual 16:9 • Alta Definição
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Role a página para entrar no consultório
            </h2>
            <div className="flex items-center justify-center mt-3 text-[#C9DBCF]">
              <ChevronDown className="w-7 h-7 text-[#88B04B] animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Premium Story Card */}
      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-auto md:max-w-lg z-20">
        <div className="bg-[#132822]/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/20 text-white transition-all duration-500">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-[#4A7C59]/30">
                {cards[activeStep].icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#88B04B]">
                {cards[activeStep].tag}
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-[#C9DBCF]">
              {cards[activeStep].step} / 04
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-extrabold text-white leading-tight mb-2">
            {cards[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-[#C9DBCF] leading-relaxed mb-4">
            {cards[activeStep].desc}
          </p>

          <div className="flex items-center justify-between pt-3.5 border-t border-white/15 text-xs text-[#88B04B]">
            <span className="font-semibold flex items-center space-x-1.5">
              <span>Role para continuar o tour</span>
              <span className="text-sm">↓</span>
            </span>
            <span className="text-white/60">Contorno c/ Raja • Gutierrez</span>
          </div>
        </div>
      </div>

      {/* Right Progress Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-3">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === i
                ? 'bg-[#88B04B] scale-150 ring-4 ring-[#88B04B]/30'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
