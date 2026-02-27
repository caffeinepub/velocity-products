import { useState, useRef, useCallback, useEffect } from 'react';

const MINECRAFT_IMG = 'https://lh3.google.com/u/0/d/1UctoJ_3iqEMWF-s84GppkWSY7MQzV9BT=w1543-h1215-iv1?auditContext=forDisplay';
const CHROMEOS_IMG = 'https://lh3.googleusercontent.com/rd-d/ALs6j_EjH7sVxRDAzB529SIeyE1En-4ONvVYH6eaWFkvppszED_lYZARXHuWz3FYTMPaVYgHc55V0awxy4vyfBqPe0qLAgIgoMlDZthUNu_AEEcgbjNKR1uWrjskmPT2m27wgWzMVH7wcgLuMysJQ5D4IkjCNE2hpCZTN_2UpKRJwEfZnl0cM-Bbph7ibvP6ROgDrhdGFcG8f4QOH7M3_n2EHQQBTmQXmbh_cRKRTXVRAOqMAnV1t6zfR862-fkZmwMuqDy2j-s8f0gY98SZW9ztuTm19-eqhsMlaXoUKCVCHRWL3ligIocE4ZG8J0y9vgTa0VA80N9E5LX2krtaEw6gsanCcxfDZ9Pib_AFZ5YK35iG4HxArRW8mcPp-cbxzXR0_7StTaLvvm0xlSUssi9s99ZK5suHuVCyGey8fpNbZMnraSMT82rBTCKwwWqCpX-WcJRpj0dEHabyPOqzGxN5Ixn3Ilz5emK63L1mtzSyhifPUBbp_3Gt7fsU1fzn9Ec18KIIn-Oco3OA49bsCjkm_vlcpBBuRA4hnV89v0V5uIKP6H_rZESNWUEr1mSnitcYjbZel_Qqkp5wFZwKKjff0F-y525nzF3sBHgrWYsLDP30OfLdj3kFTZLHrPMt-RX_gnem_aEuO_J0yJ2XidpxzjUW6-yrounkhJ1Su28BZLuZUQG4x3Gif-hJAnaQtUJ1kpwgFHrhquK5xiRJkqpIm-Dv5muXNQi_LHNwpW4TBxU5QYy4OE0iJ5olhV-jMFk6c2f0rB5bQ78rYj2l-FyjsAbsBIe-dU1eaY2o6ybmi5mCxaAmyooCtNeNNjcxoNS8pBaoHfmtg6cgaFLI-y7wxn8YU03EYjgET0llRmShNzSY2XQD-png-sKqpIdAi-kzq6UB7suMVkW-CCEfSb9TF1DSPd1_tKp4IMNlJ8k-jl2iUqpZqBvkKO8cI4sKnnqh6P-cnjFFTjE_FUgOIsFl_03qHclYDk4Ki_PrqrFsyAa6LYmQ7kfpUDlcQI2uwGxVBlAkWH95-ShP5gYQfrb4OuleLnHkD7vFNs7SUSY5fT3BiVuTIH1VdAK8y6HHF1QSNlk3Mt2CuvIz_3wsmPsizZnpBJsZc_11U3xOgovTMtlq7FNP5CqT7G77FYbZ8xox1O4IhxC8b6Hx0qAzthZKjl8zr4aPOxC5yLnYhUlv_Q3y9DmjPoYmDSuzW7Usf5i683d_5XIHrF75IxM3FPeoN2PCho1jUe3Bh3bp_oOsSPdRJ7jFekaS_pzv4qrA70I=w2098-h1215?auditContext=forDisplay';
const ROBLOX_IMG = 'https://lh3.google.com/u/0/d/1j87IxequUoDZbDyIYrir8BBRmOS54NVL=w1543-h1215-iv1?auditContext=forDisplay';
const OPEN_ICON = '/assets/uploads/image-1-1.png';

const SECURLY_BYPASS_TEXT = `CLOSET.GG 2026
66.23.198.252
66.94.105.229
167.86.91.171
0.0.0.0
May take up to 15 minutes to fully disable Securly.`;

interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonAction: () => void;
  isComingSoon?: boolean;
  useDownloadIcon?: boolean;
}

interface CardProps {
  product: Product;
}

function ProductCard({ product }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    setTilt({ x: rotateX, y: rotateY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full h-full"
    >
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.4s ease-out',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          borderRadius: '8px',
        }}
        className="relative bg-[#111111] border border-white/10 cursor-pointer h-full flex flex-col"
      >
        {/* Glow overlay — only visible on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              borderRadius: '8px',
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.07) 0%, transparent 65%)`,
            }}
          />
        )}

        {/* Thumbnail */}
        <div
          className="w-full overflow-hidden"
          style={{ borderRadius: '8px 8px 0 0', height: '180px' }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-3 flex-grow">
          {/* Category badge */}
          <button
            type="button"
            onMouseEnter={() => setIsCategoryHovered(true)}
            onMouseLeave={() => setIsCategoryHovered(false)}
            className="inline-block self-start text-[10px] tracking-widest font-semibold px-2 py-0.5 border border-white/20 transition-colors duration-200 cursor-default"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: '3px',
              backgroundColor: isCategoryHovered ? '#ffffff' : 'transparent',
              color: isCategoryHovered ? '#000000' : '#606060',
              background: isCategoryHovered ? '#ffffff' : 'transparent',
            }}
          >
            {product.category}
          </button>

          {/* Title */}
          <h3
            className="text-base leading-snug"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              color: '#F0F0F0',
            }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#606060',
            }}
          >
            {product.description}
          </p>

          {/* Button — pinned to bottom */}
          <div className="mt-auto pt-2">
          {product.isComingSoon ? (
            <button
              type="button"
              disabled
              className="w-full py-2 text-xs font-semibold border border-white/10 cursor-not-allowed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: '6px',
                color: '#606060',
                background: 'transparent',
              }}
            >
              Coming Soon
            </button>
          ) : (
            <button
              type="button"
              onClick={product.buttonAction}
              className="w-full py-2 text-xs font-semibold border border-white/20 flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: '6px',
                color: '#F0F0F0',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              {product.useDownloadIcon ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <title>Download</title>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              ) : (
                <img src={OPEN_ICON} alt="open" className="w-4 h-4 object-contain" />
              )}
              {product.buttonLabel}
            </button>
          )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [dotVisible, setDotVisible] = useState(true);

  // Flashing dot animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDotVisible(v => !v);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleSecurlyDownload = () => {
    const blob = new Blob([SECURLY_BYPASS_TEXT], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'securly-bypass.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const products: Product[] = [
    {
      id: 1,
      category: 'MINECRAFT',
      title: 'Eaglercraft Launcher',
      description: 'All versions of Eaglercraft with the Wisp modification in one launcher.',
      image: MINECRAFT_IMG,
      buttonLabel: 'Open',
      buttonAction: () => window.open('https://webmc.colbster937.dev/', '_blank'),
    },
    {
      id: 2,
      category: 'CHROMEOS',
      title: 'Securly Bypass',
      description: "Disables Securly entirely on ChromeOS. Doesn't work for Fortiguard or network blocks.",
      image: CHROMEOS_IMG,
      buttonLabel: 'Download',
      buttonAction: handleSecurlyDownload,
      useDownloadIcon: true,
    },
    {
      id: 3,
      category: 'ROBLOX',
      title: 'Roblox Emulator V2',
      description: 'The newest and updated unblocked Roblox for school. Coming soon for a maximum of three people.',
      image: ROBLOX_IMG,
      buttonLabel: 'Coming Soon',
      buttonAction: () => {},
      isComingSoon: true,
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: '#0a0a0a', fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
      `}</style>

      {/* Hero viewport wrapper — exactly 100vh tall */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <header className="w-full flex items-center justify-center py-6 border-b border-white/5" style={{ flexShrink: 0 }}>
          <span
            className="text-xl tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: '#F0F0F0',
            }}
          >
            closet.gg™
          </span>
        </header>

        {/* Hero Section — fills remaining viewport height */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ flex: 1 }}>
        {/* Live Products label */}
        <div className="flex items-center gap-2 mb-8">
          <span
            className="inline-block w-2 h-2 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: dotVisible ? '#ffffff' : '#444444',
            }}
          />
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#606060',
            }}
          >
            Live Products
          </span>
        </div>

        {/* Hero heading: Made / with / precision */}
        <h1
          className="leading-none mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 6rem)',
          }}
        >
          <span style={{ display: 'block', color: '#F0F0F0' }}>Made</span>
          <span style={{ display: 'block', color: '#F0F0F0' }}>with</span>
          <span
            style={{
              display: 'block',
              color: '#FFFFFF',
              fontWeight: 700,
            }}
          >
            precision
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-md text-sm leading-relaxed mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#606060',
          }}
        >
          Unrestricted play and seamless performance through optimized browser games.
          <br />
          Advanced systems designed to work around network restrictions.
        </p>

        {/* View Features button */}
        <button
          type="button"
          onClick={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-7 py-2.5 text-sm font-medium border border-white/15 transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            borderRadius: '6px',
            background: 'rgba(255,255,255,0.04)',
            color: '#B0B0B0',
          }}
        >
          View Features
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: '#606060' }}>Scroll</span>
          <div className="w-px h-6 bg-white/30" />
        </div>
      </section>

      </div>{/* end 100vh wrapper */}

      {/* Products Grid */}
      <main id="products" className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-10 flex items-center gap-3">
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#606060',
            }}
          >
            Explore
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <h2
          className="text-3xl mb-10"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            color: '#F0F0F0',
          }}
        >
          Products
        </h2>

        <div className="grid grid-cols-3 gap-6 items-stretch">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
