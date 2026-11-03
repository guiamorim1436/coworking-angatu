import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Sparkles, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 82;

export default function WalkthroughScroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = String(i).padStart(3, '0');
      img.src = `/walkthrough/frame_${frameIndex}.webp`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const renderFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1280;
      const ih = img.naturalHeight || 720;

      // Cover scaling
      const hRatio = cw / iw;
      const vRatio = ch / ih;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (cw - iw * ratio) / 2;
      const centerShiftY = (ch - ih * ratio) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, centerShiftX, centerShiftY, iw * ratio, ih * ratio);
    };

    const handleResize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      renderFrame(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const frameObj = { currentFrame: 0 };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=3200',
      pin: true,
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(p * TOTAL_FRAMES)
        );
        frameObj.currentFrame = targetFrame;
        renderFrame(targetFrame);

        // Update active overlay card
        if (p < 0.25) setActiveStep(0);
        else if (p < 0.52) setActiveStep(1);
        else if (p < 0.78) setActiveStep(2);
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
      icon: <Compass className="w-5 h-5 text-[#4A7C59]" />,
      tag: "Ponto Nobre no Gutierrez",
      title: "Chegada Estratégica na Contorno c/ Raja",
      desc: "Localização de fácil acesso para famílias de toda a Zona Sul e região metropolitana, com estacionamento rotativo seguro no edifício."
    },
    {
      step: "02",
      icon: <Sparkles className="w-5 h-5 text-[#C48B54]" />,
      tag: "Recepção Lúdica de 25m²",
      title: "Ambiente Safári & Espaço Kids",
      desc: "Acolhimento acolhedor e climatizado com brinquedoteca segura e banheiro exclusivo com fraldário. A consulta começa na calma da espera."
    },
    {
      step: "03",
      icon: <Users className="w-5 h-5 text-[#4A7C59]" />,
      tag: "Diferencial Exclusivo",
      title: "Secretária Dedicada ao Consultório",
      desc: "Sem filas ou sobrecarga de multi-clínicas. Confirmação ativa anti-falta, recepção carinhosa das famílias e auxílio na sua rotina diária."
    },
    {
      step: "04",
      icon: <ShieldCheck className="w-5 h-5 text-[#1E3F35]" />,
      tag: "Consultório 25m² Privativo",
      title: "Luz Natural & Estrutura Completa",
      desc: "Paredes de vidro, vista aberta, ar-condicionado silencioso, maca, balança, smart TV, impressora e banheiro privativo para o médico."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#19201D] overflow-hidden">
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#1E3F35] text-[#FAF8F5]">
          <div className="w-16 h-16 border-4 border-[#4A7C59]/30 border-t-[#C48B54] rounded-full animate-spin mb-4" />
          <p className="text-lg font-display font-semibold">Carregando tour interativo pelo consultório...</p>
          <span className="text-sm text-[#C9DBCF] mt-1">{loadProgress}% concluído</span>
        </div>
      )}

      {/* Canvas Frame Renderer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 transition-opacity duration-700"
      />

      {/* Soft gradient vignetting for high contrast text readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#19201D]/90 via-transparent to-[#19201D]/60 z-10" />

      {/* Header Badge */}
      <div className="absolute top-6 left-6 md:left-12 z-20 flex items-center space-x-3 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E2DBCF]/80 shadow-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-[#4A7C59] animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3F35]">
          Tour Interativo Guiado pelo Scroll
        </span>
      </div>

      {/* Step Progress Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-3">
        {cards.map((c, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === i
                ? 'bg-[#C48B54] scale-125 ring-4 ring-[#C48B54]/30'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            title={c.title}
          />
        ))}
      </div>

      {/* Dynamic Floating Glass Card */}
      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-20">
        <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-white/40 transition-all duration-500 transform translate-y-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-[#4A7C59]/10">
                {cards[activeStep].icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59]">
                {cards[activeStep].tag}
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#1E3F35]/10 text-[#1E3F35]">
              {cards[activeStep].step} / 04
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-[#1E3F35] leading-tight mb-2">
            {cards[activeStep].title}
          </h3>

          <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
            {cards[activeStep].desc}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-[#E2DBCF]/60 text-xs text-[#2A573F]">
            <span className="font-medium">Role para continuar entrando ➔</span>
            <span className="font-semibold">Espaço Angatu Gutierrez</span>
          </div>
        </div>
      </div>
    </section>
  );
}
