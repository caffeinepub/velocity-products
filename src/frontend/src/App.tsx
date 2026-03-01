import { useCallback, useRef, useState } from "react";

const MINECRAFT_IMG =
  "https://lh3.google.com/u/0/d/1UctoJ_3iqEMWF-s84GppkWSY7MQzV9BT=w1543-h1215-iv1?auditContext=forDisplay";
const CHROMEOS_IMG =
  "https://lh3.googleusercontent.com/rd-d/ALs6j_EjH7sVxRDAzB529SIeyE1En-4ONvVYH6eaWFkvppszED_lYZARXHuWz3FYTMPaVYgHc55V0awxy4vyfBqPe0qLAgIgoMlDZthUNu_AEEcgbjNKR1uWrjskmPT2m27wgWzMVH7wcgLuMysJQ5D4IkjCNE2hpCZTN_2UpKRJwEfZnl0cM-Bbph7ibvP6ROgDrhdGFcG8f4QOH7M3_n2EHQQBTmQXmbh_cRKRTXVRAOqMAnV1t6zfR862-fkZmwMuqDy2j-s8f0gY98SZW9ztuTm19-eqhsMlaXoUKCVCHRWL3ligIocE4ZG8J0y9vgTa0VA80N9E5LX2krtaEw6gsanCcxfDZ9Pib_AFZ5YK35iG4HxArRW8mcPp-cbxzXR0_7StTaLvvm0xlSUssi9s99ZK5suHuVCyGey8fpNbZMnraSMT82rBTCKwwWqCpX-WcJRpj0dEHabyPOqzGxN5Ixn3Ilz5emK63L1mtzSyhifPUBbp_3Gt7fsU1fzn9Ec18KIIn-Oco3OA49bsCjkm_vlcpBBuRA4hnV89v0V5uIKP6H_rZESNWUEr1mSnitcYjbZel_Qqkp5wFZwKKjff0F-y525nzF3sBHgrWYsLDP30OfLdj3kFTZLHrPMt-RX_gnem_aEuO_J0yJ2XidpxzjUW6-yrounkhJ1Su28BZLuZUQG4x3Gif-hJAnaQtUJ1kpwgFHrhquK5xiRJkqpIm-Dv5muXNQi_LHNwpW4TBxU5QYy4OE0iJ5olhV-jMFk6c2f0rB5bQ78rYj2l-FyjsAbsBIe-dU1eaY2o6ybmi5mCxaAmyooCtNeNNjcxoNS8pBaoHfmtg6cgaFLI-y7wxn8YU03EYjgET0llRmShNzSY2XQD-png-sKqpIdAi-kzq6UB7suMVkW-CCEfSb9TF1DSPd1_tKp4IMNlJ8k-jl2iUqpZqBvkKO8cI4sKnnqh6P-cnjFFTjE_FUgOIsFl_03qHclYDk4Ki_PrqrFsyAa6LYmQ7kfpUDlcQI2uwGxVBlAkWH95-ShP5gYQfrb4OuleLnHkD7vFNs7SUSY5fT3BiVuTIH1VdAK8y6HHF1QSNlk3Mt2CuvIz_3wsmPsizZnpBJsZc_11U3xOgovTMtlq7FNP5CqT7G77FYbZ8xox1O4IhxC8b6Hx0qAzthZKjl8zr4aPOxC5yLnYhUlv_Q3y9DmjPoYmDSuzW7Usf5i683d_5XIHrF75IxM3FPeoN2PCho1jUe3Bh3bp_oOsSPdRJ7jFekaS_pzv4qrA70I=w2098-h1215?auditContext=forDisplay";
const ROBLOX_IMG =
  "https://lh3.google.com/u/0/d/1j87IxequUoDZbDyIYrir8BBRmOS54NVL=w1543-h1215-iv1?auditContext=forDisplay";
const ONE_BLOCK_IMG =
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/a9/90/b1/a990b146-f9cb-7136-dc81-fd70e7ea2dbe/36304c14-13d7-47d4-b016-6f3d3deb52d1_one-block-maps-minecraft-mcpe-screen2.jpg/626x290bb.webp";

const LUCIDWARE_LOGO =
  "https://lh3.google.com/u/0/d/1_gIeA5k4L0YXBWKJSJ1T4wLwaoUdmKsn=w1776-h1370-iv1?auditContext=prefetch";

const SECURLY_BYPASS_TEXT = `Method 1: lucidware ONC v4.1.1 (Private method so it's safer and faster)
1. Go to the settings of the WiFi you're connected to.
2. Scroll down until you see "Network." Click on the dropdown menu and click custom name servers.
3. Fill in the following numbers in the respected order:
66.23.198.252
66.94.105.229
167.86.91.171
0.0.0.0
4. Exit out of settings and wait 5-10 minutes for Securly to be killed.

Method 2: KSF Secure DNS (Public and slower, but more stable)
1. Open the Settings app.
2. Go to Security and Privacy.
3. Enable Use secure DNS.
4. Select With: Custom, then enter https://dns.nextdns.io/a4ea85.`;

const ONE_BLOCK_INSTRUCTIONS_TEXT = `1. Installing a launcher

OPTION 1: HTML File

Download this file:

%%DOWNLOAD_BUTTON%%

Drag the HTML file into your tabs.

OPTION 2: Web Launcher

Use a Securly ONC for ChromeOS or a guest profile inspected tab.

Open WebMC Launcher and launch 1.12.2.

2. Joining the server

Pick a unique username you will remember, go to multiplayer, and press Add Server.

For the name, pick anything. For the IP, enter wss://mc.ricenetwork.xyz and save it.

Join the server and pick a password you will remember. (Recommended to use your username or something simple like 12341234)

Once you're in the lobby, press the compass and click the grass block.`;

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
  imageObjectPosition?: string;
}

interface CardProps {
  product: Product;
  thumbnailHeight?: number;
}

function ProductCard({ product, thumbnailHeight = 180 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    // Use the stable outer wrapper's bounds, not the tilted article's bounds
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

  // cursor style: pointer only over interactive elements, default over the rest

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ perspective: "1000px", cursor: "default" }}
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <article
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? "transform 0.15s ease-out"
            : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          borderRadius: "4px",
          cursor: "default",
        }}
        className="relative bg-[#111111] border border-white/10 h-full flex flex-col"
      >
        {/* Glow overlay — only visible on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              borderRadius: "4px",
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.07) 0%, transparent 65%)`,
            }}
          />
        )}

        {/* Thumbnail with category badge overlay */}
        <div
          className="w-full overflow-hidden relative"
          style={{
            borderRadius: "4px 4px 0 0",
            height: `${thumbnailHeight}px`,
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            style={{
              display: "block",
              objectPosition: product.imageObjectPosition ?? "center",
            }}
          />
          {/* Category badge — top-left over image, turns white when panel is hovered */}
          <span
            className="absolute top-2 left-2 text-[10px] tracking-widest font-semibold px-2 py-0.5 border border-white/20 transition-colors duration-200 cursor-default z-20"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: "1px",
              backgroundColor: isHovered ? "#ffffff" : "rgba(0,0,0,0.55)",
              color: isHovered ? "#000000" : "#ffffff",
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-3 flex-grow">
          {/* Title */}
          <h3
            className="text-base leading-snug"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              color: "#F0F0F0",
            }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#606060",
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
                  borderRadius: "2px",
                  color: "#606060",
                  background: "transparent",
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
                  borderRadius: "2px",
                  color: "#F0F0F0",
                  background: "rgba(255,255,255,0.04)",
                  cursor: "pointer",
                }}
              >
                {product.useDownloadIcon ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <title>Download</title>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <title>Open</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
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

const PAGE_SHELL_OPEN = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>lucidware™</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; color: #ffffff; font-family: 'DM Sans', sans-serif; min-height: 100vh; }
    header { width: 100%; display: flex; align-items: center; justify-content: center; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .header-inner { display: flex; align-items: center; gap: 8px; }
    .header-logo { width: 32px; height: 32px; object-fit: contain; flex-shrink: 0; margin-top: 3px; }
    .header-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.25rem; letter-spacing: -0.025em; color: #F0F0F0; }
    .header-badge { font-family: 'DM Sans', sans-serif; font-size: 10px; letter-spacing: 0.2em; font-weight: 600; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 1px; background: rgba(0,0,0,0.55); color: #ffffff; }
    .content { max-width: 600px; margin: 0 auto; padding: 60px 24px 60px; text-align: center; }
    .text-body { white-space: pre-wrap; font-size: 13px; line-height: 1.8; color: #ffffff; font-family: 'DM Sans', sans-serif; text-align: center; display: block; }
    /* Rich markup styles */
    .section-header { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: #F0F0F0; display: block; margin: 1.4em 0 0.5em; }
    .bigger { font-size: 1.08em; display: inline; }
    .badge-tag { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 10px; letter-spacing: 0.18em; font-weight: 600; padding: 1px 7px; border: 1px solid rgba(255,255,255,0.35); border-radius: 1px; background: #ffffff; color: #000000; vertical-align: middle; margin: 0 3px; }
    .dl-btn { display: inline-flex; align-items: center; gap: 6px; margin: 8px 0; padding: 7px 16px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #F0F0F0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.2); border-radius: 2px; cursor: pointer; text-decoration: none; transition: background 0.15s; }
    .dl-btn:hover { background: rgba(255,255,255,0.1); }
    .dl-btn svg { flex-shrink: 0; }
    p.line { margin: 0; padding: 0; min-height: 1.8em; }
    p.line.blank { min-height: 0.9em; }
  </style>
</head>
<body>
  <header>
    <div class="header-inner">
      <img src="${LUCIDWARE_LOGO}" alt="lucidware logo" class="header-logo" />
      <span class="header-title">lucidware™</span>
      <span class="header-badge">BETA</span>
    </div>
  </header>
  <div class="content">`;

const PAGE_SHELL_CLOSE = `  </div>
</body>
</html>`;

function openTextPage(content: string) {
  const newWin = window.open("", "_blank");
  if (!newWin) return;
  const escaped = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  newWin.document.write(
    `${PAGE_SHELL_OPEN}<span class="text-body">${escaped}</span>${PAGE_SHELL_CLOSE}`,
  );
  newWin.document.close();
}

function openOneBlockPage() {
  const newWin = window.open("", "_blank");
  if (!newWin) return;

  const DOWNLOAD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

  // Split on the download button placeholder, escape each part, then reassemble
  const parts = ONE_BLOCK_INSTRUCTIONS_TEXT.split("%%DOWNLOAD_BUTTON%%");
  const escapePart = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const downloadBtn = `<a class="dl-btn" href="https://drive.google.com/uc?export=download&id=1KW_lkOp4uaL2EMOocJUVgGeY3DLKr9ln" download="lucidware-eagler.html">${DOWNLOAD_SVG}lucidware-eagler.html</a>`;

  const html = `<span class="text-body">${escapePart(parts[0])}${downloadBtn}${escapePart(parts[1] ?? "")}</span>`;

  newWin.document.write(`${PAGE_SHELL_OPEN}${html}${PAGE_SHELL_CLOSE}`);
  newWin.document.close();
}

export default function App() {
  const handleSecurlyDownload = () => {
    openTextPage(SECURLY_BYPASS_TEXT);
  };

  const handleOneBlockDownload = () => {
    openOneBlockPage();
  };

  // Row 1: Minecraft, ChromeOS, One Block World (3 cols)
  // Row 2: Fortinet Bypass, Roblox (2 cols)
  const row1Products: Product[] = [
    {
      id: 1,
      category: "MINECRAFT",
      title: "WebMC Launcher",
      description:
        "All versions of Eaglercraft with the Wisp modification in one launcher.",
      image: MINECRAFT_IMG,
      buttonLabel: "Open",
      buttonAction: () =>
        window.open("https://webmc.colbster937.dev/", "_blank"),
    },
    {
      id: 2,
      category: "CHROMEOS",
      title: "SecurlyONC 4.1",
      description:
        "Disables Securly entirely on ChromeOS. Doesn't work for Fortiguard or network blocks.",
      image: CHROMEOS_IMG,
      buttonLabel: "Open",
      buttonAction: handleSecurlyDownload,
    },
    {
      id: 3,
      category: "SERVER",
      title: "One Block World",
      description:
        "Detailed instructions on how to join the private One Block world.",
      image: ONE_BLOCK_IMG,
      buttonLabel: "Open",
      buttonAction: handleOneBlockDownload,
    },
  ];

  const row2Products: Product[] = [
    {
      id: 4,
      category: "ROBLOX",
      title: "Roblox Reworked Emulator",
      description: "A closed test for Roblox emulating on school devices.",
      image: ROBLOX_IMG,
      buttonLabel: "Paid Users Only",
      buttonAction: () => {},
      isComingSoon: true,
    },
    {
      id: 5,
      category: "GLOBAL",
      title: "Fortinet Bypass",
      description:
        "A currently work-in-progress solution to Fortinet wifi address blocks.",
      image:
        "https://us1.discourse-cdn.com/spiceworks/original/4X/d/e/b/deb31d028745f35dcf540fc1cc95047c40b66eb3.png",
      buttonLabel: "Coming Soon",
      buttonAction: () => {},
      isComingSoon: true,
      imageObjectPosition: "top",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        @keyframes dot-fade {
          0%, 100% { background-color: #444444; }
          50% { background-color: #ffffff; }
        }
      `}</style>

      {/* Hero viewport wrapper — exactly 100vh tall */}
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <header
          className="w-full flex items-center justify-center py-6 border-b border-white/5"
          style={{ flexShrink: 0 }}
        >
          <div className="flex items-center gap-2">
            <img
              src="https://lh3.google.com/u/0/d/1_gIeA5k4L0YXBWKJSJ1T4wLwaoUdmKsn=w1776-h1370-iv1?auditContext=prefetch"
              alt="lucidware logo"
              style={{
                width: 32,
                height: 32,
                objectFit: "contain",
                flexShrink: 0,
                marginTop: 3,
              }}
            />
            <span
              className="text-xl tracking-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                color: "#F0F0F0",
              }}
            >
              lucidware™
            </span>
            <span
              className="text-[10px] tracking-widest font-semibold px-2 py-0.5 border border-white/20"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: "1px",
                backgroundColor: "rgba(0,0,0,0.55)",
                color: "#ffffff",
              }}
            >
              BETA
            </span>
          </div>
        </header>

        {/* Hero Section — fills remaining viewport height */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
          style={{ flex: 1 }}
        >
          {/* Live Products label */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                animation: "dot-fade 2.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#ffffff",
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
              fontSize: "clamp(3rem, 8vw, 6rem)",
            }}
          >
            <span style={{ display: "block", color: "#F0F0F0" }}>Made</span>
            <span style={{ display: "block", color: "#F0F0F0" }}>with</span>
            <span
              style={{
                display: "block",
                color: "#FFFFFF",
                fontWeight: 700,
                fontStyle: "italic",
                textDecoration: "underline",
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
              color: "#606060",
            }}
          >
            Unrestricted play and seamless performance through optimized browser
            applications.
          </p>

          {/* View Features button */}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-2.5 text-sm font-medium border border-white/15 transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 select-none"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.04)",
              color: "#B0B0B0",
              userSelect: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ userSelect: "none", pointerEvents: "none" }}>
              View Features
            </span>
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
            <span
              className="text-[10px] tracking-widest uppercase"
              style={{ color: "#606060" }}
            >
              Scroll
            </span>
            <div className="w-px h-6 bg-white/30" />
          </div>
        </section>
      </div>
      {/* end 100vh wrapper */}

      {/* Products Grid */}
      <main id="products" className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-10 flex items-center gap-3">
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#606060",
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
            color: "#F0F0F0",
          }}
        >
          Features
        </h2>

        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-3 gap-6 items-stretch mb-6">
          {row1Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Row 2: 2 columns */}
        <div
          className="grid grid-cols-2 gap-6 items-stretch"
          style={{ minHeight: "380px" }}
        >
          {row2Products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              thumbnailHeight={180}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
