import ProductCard from '../components/ProductCard';

/* ─── Header ─────────────────────────────────────────────── */
function SiteHeader() {
  return (
    <header className="w-full flex justify-center items-center pt-8 pb-4 px-6">
      <span
        className="text-white text-2xl font-black tracking-tight select-none"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
      >
        closet.gg™
      </span>
    </header>
  );
}

const SECURLY_BYPASS_TEXT = `CLOSET.GG 2026
66.23.198.252
66.94.105.229
167.86.91.171
0.0.0.0
May take up to 15 minutes to fully disable Securly.`;

const PRODUCTS = [
  {
    id: 1,
    thumbnail: 'https://lh3.google.com/u/0/d/1UctoJ_3iqEMWF-s84GppkWSY7MQzV9BT=w1543-h1215-iv1',
    category: 'MINECRAFT',
    title: 'Minecraft Web Edition',
    description: 'All versions of Eaglercraft with the Wisp modification in one launcher.',
    buttonType: 'open' as const,
    buttonAction: 'https://webmc.colbster937.dev/',
  },
  {
    id: 2,
    thumbnail: 'https://lh3.googleusercontent.com/rd-d/ALs6j_EjH7sVxRDAzB529SIeyE1En-4ONvVYH6eaWFkvppszED_lYZARXHuWz3FYTMPaVYgHc55V0awxy4vyfBqPe0qLAgIgoMlDZthUNu_AEEcgbjNKR1uWrjskmPT2m27wgWzMVH7wcgLuMysJQ5D4IkjCNE2hpCZTN_2UpKRJwEfZnl0cM-Bbph7ibvP6ROgDrhdGFcG8f4QOH7M3_n2EHQQBTmQXmbh_cRKRTXVRAOqMAnV1t6zfR862-fkZmwMuqDy2j-s8f0gY98SZW9ztuTm19-eqhsMlaXoUKCVCHRWL3ligIocE4ZG8J0y9vgTa0VA80N9E5LX2krtaEw6gsanCcxfDZ9Pib_AFZ5YK35iG4HxArRW8mcPp-cbxzXR0_7StTaLvvm0xlSUssi9s99ZK5suHuVCyGey8fpNbZMnraSMT82rBTCKwwWqCpX-WcJRpj0dEHabyPOqzGxN5Ixn3Ilz5emK63L1mtzSyhifPUBbp_3Gt7fsU1fzn9Ec18KIIn-Oco3OA49bsCjkm_vlcpBBuRA4hnV89v0V5uIKP6H_rZESNWUEr1mSnitcYjbZel_Qqkp5wFZwKKjff0F-y525nzF3sBHgrWYsLDP30OfLdj3kFTZLHrPMt-RX_gnem_aEuO_J0yJ2XidpxzjUW6-yrounkhJ1Su28BZLuZUQG4x3Gif-hJAnaQtUJ1kpwgFHrhquK5xiRJkqpIm-Dv5muXNQi_LHNwpW4TBxU5QYy4OE0iJ5olhV-jMFk6c2f0rB5bQ78rYj2l-FyjsAbsBIe-dU1eaY2o6ybmi5mCxaAmyooCtNeNNjcxoNS8pBaoHfmtg6cgaFLI-y7wxn8YU03EYjgET0llRmShNzSY2XQD-png-sKqpIdAi-kzq6UB7suMVkW-CCEfSb9TF1DSPd1_tKp4IMNlJ8k-jl2iUqpZqBvkKO8cI4sKnnqh6P-cnjFFTjE_FUgOIsFl_03qHclYDk4Ki_PrqrFsyAa6LYmQ7kfpUDlcQI2uwGxVBlAkWH95-ShP5gYQfrb4OuleLnHkD7vFNs7SUSY5fT3BiVuTIH1VdAK8y6HHF1QSNlk3Mt2CuvIz_3wsmPsizZnpBJsZc_11U3xOgovTMtlq7FNP5CqT7G77FYbZ8xox1O4IhxC8b6Hx0qAzthZKjl8zr4aPOxC5yLnYhUlv_Q3y9DmjPoYmDSuzW7Usf5i683d_5XIHrF75IxM3FPeoN2PCho1jUe3Bh3bp_oOsSPdRJ7jFekaS_pzv4qrA70I=w2098-h1215',
    category: 'CHROMEOS',
    title: 'Securly Bypass',
    description: "Disables Securly entirely on ChromeOS. Doesn't work for Fortiguard or network blocks.",
    buttonType: 'download' as const,
    downloadContent: SECURLY_BYPASS_TEXT,
  },
  {
    id: 3,
    thumbnail: 'https://lh3.google.com/u/0/d/1j87IxequUoDZbDyIYrir8BBRmOS54NVL=w1543-h1215-iv1',
    category: 'ROBLOX',
    title: 'Roblox Emulator V2',
    description: 'The newest and updated unblocked Roblox for school. Coming soon for a maximum of three people.',
    buttonType: 'coming-soon' as const,
  },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-page text-white overflow-x-hidden">

      {/* Site Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pb-24" style={{ marginTop: '-72px' }}>
        {/* Live Products label */}
        <div className="flex items-center gap-2 mb-16">
          <span
            className="dot-flash inline-block w-2 h-2 rounded-full"
          />
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase text-white/80"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Live Products
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.9] tracking-tight text-white mb-8"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          The end of<br /><span className="italic" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: '6px' }}>boredom</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/65 text-base leading-relaxed max-w-md mb-12"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Unrestricted play and seamless performance through optimized browser games.<br />
          Advanced systems designed to work around network restrictions.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap justify-center mb-24">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('products-grid');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-lg border border-white/30 text-white text-sm font-bold tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Features
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-white/30"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="h-px bg-white/8 mb-8" />
      </div>

      {/* Products Grid */}
      <main id="products-grid" className="relative z-10 max-w-screen-xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              title={product.title}
              description={product.description}
              buttonType={product.buttonType}
              buttonAction={'buttonAction' in product ? product.buttonAction : undefined}
              downloadContent={'downloadContent' in product ? product.downloadContent : undefined}
            />
          ))}
        </div>
      </main>


    </div>
  );
}
