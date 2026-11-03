import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Sparkles, ShieldCheck, ChevronDown, Volume2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 90;

export default function WalkthroughScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const imagesRef = useRef([]);

  // Preload native 1080x1920 Full HD WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    // Preload first frame immediately
    const firstImg = new Image();
    firstImg.src = '/walkthrough/frame_001.webp';
    firstImg.onload = () => {
      // First frame ready
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = String(i).padStart(3, '0');
      img.src = `/walkthrough/frame_${frameIndex}.webp`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount >= Math.min(15, TOTAL_FRAMES)) {
          // Can start rendering once first batch is ready
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
    let animationFrameId;

    const renderFrame = (index) => {
      const img = imagesRef.current[index] || imagesRef.current[0];
      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1080;
      const ih = img.naturalHeight || 1920;

      ctx.clearRect(0, 0, cw, ch);

      const isLandscape = cw > ch;

      if (isLandscape) {
        // Desktop / Landscape:
        // 1. Cinematic ambient glow background to fill widescreen organically without black borders
        ctx.save();
        ctx.filter = 'blur(45px) brightness(0.35)';
        ctx.drawImage(img, -cw * 0.1, -ch * 0.1, cw * 1.2, ch * 1.2);
        ctx.restore();

        // 2. Razor-sharp centered stage in native 1080x1920 resolution
        const scale = ch / ih;
        const renderW = iw * scale;
        const renderH = ch;
        const posX = (cw - renderW) / 2;
        const posY = 0;

        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 35;
        ctx.drawImage(img, 0, 0, iw, ih, posX, posY, renderW, renderH);
        ctx.restore();
      } else {
        // Mobile / Portrait:
        // Edge-to-edge native 1:1 pixel perfection
        const hRatio = cw / iw;
        const vRatio = ch / ih;
        const ratio = Math.max(hRatio, vRatio);
        const cx = (cw - iw * ratio) / 2;
        const cy = (ch - ih * ratio) / 2;
        ctx.drawImage(img, 0, 0, iw, ih, cx, cy, iw * ratio, ih * ratio);
      }
    };

    const handleResize = () => {
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
      end: '+=3800',
      pin: true,
      scrub: 0.6,
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
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
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
    <section ref={containerRef} className="relative w-full h-screen bg-[#132822] overflow-hidden">
      {/* Loading Screen */}
      {!loaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#1E3F35] text-[#FAF8F5]">
          <div className="w-14 h-14 border-4 border-[#4A7C59]/30 border-t-[#88B04B] rounded-full animate-spin mb-4" />
          <p className="text-xl font-display font-bold tracking-tight">Entrando no Coworking Angatu...</p>
          <span className="text-sm text-[#C9DBCF] mt-1">Carregando tour em alta definição ({loadProgress}%)</span>
        </div>
      )}

      {/* Razor-Sharp Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
      />

      {/* Subtle Vignette for Contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#132822]/95 via-transparent to-[#132822]/60 z-10" />

      {/* Minimal Top Brand Badge (NO HEADER / NO MENU) */}
      <div className="absolute top-6 left-6 md:left-10 z-20 flex items-center space-x-3 bg-[#132822]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white shadow-xl">
        <span className="w-2.5 h-2.5 rounded-full bg-[#88B04B] animate-pulse" />
        <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#FAF8F5]">
          ANGATU • Coworking Pediátrico
        </span>
        <span className="text-xs text-[#C9DBCF] border-l border-white/20 pl-2 hidden sm:inline">
          Gutierrez, BH
        </span>
      </div>

      {/* Direct WhatsApp CTA Button Floating Top-Right */}
      <div className="absolute top-6 right-6 md:right-10 z-20">
        <a
          href="https://wa.me/5531997141515?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20turnos%20do%20Coworking%20Angatu%20no%20Gutierrez."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C48B54] hover:bg-[#A66E3A] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-lg hover:shadow-xl"
        >
          <span>Agendar Visita</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Initial Scroll Prompt (Visible on Step 0) */}
      {activeStep === 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none select-none px-4">
          <div className="inline-block bg-[#132822]/75 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-2xl animate-bounce">
            <p className="text-xs font-bold uppercase tracking-widest text-[#88B04B] mb-1">
              Tour Interativo de Entrada
            </p>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Role a página para entrar no consultório
            </h2>
            <div className="flex items-center justify-center mt-2 text-[#C9DBCF]">
              <ChevronDown className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Story Card */}
      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-auto md:max-w-lg z-20">
        <div className="bg-[#132822]/90 backdrop-blur-xl p-6 md:p-7 rounded-3xl shadow-2xl border border-white/20 text-white transition-all duration-500">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-[#4A7C59]/30">
                {cards[activeStep].icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#88B04B]">
                {cards[activeStep].tag}
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-[#C9DBCF]">
              {cards[activeStep].step} / 04
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-extrabold text-white leading-tight mb-2">
            {cards[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-[#C9DBCF] leading-relaxed mb-4">
            {cards[activeStep].desc}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-[#88B04B]">
            <span className="font-semibold flex items-center space-x-1">
              <span>Role para continuar o tour</span>
              <span>↓</span>
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
