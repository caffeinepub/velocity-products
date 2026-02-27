import { useState, useCallback } from 'react';
import { use3DTilt } from '../hooks/use3DTilt';

interface ProductCardProps {
  thumbnail: string;
  category: string;
  title: string;
  description: string;
  buttonType: 'open' | 'download' | 'coming-soon';
  buttonAction?: string;
  downloadContent?: string;
}

function handleDownload(content: string) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'securly-bypass.txt';
  a.click();
  URL.revokeObjectURL(url);
}

export default function ProductCard({
  thumbnail,
  category,
  title,
  description,
  buttonType,
  buttonAction,
  downloadContent = '',
}: ProductCardProps) {
  const { ref, onMouseMove: tiltMove, onMouseLeave: tiltLeave, style } = use3DTilt(12);
  const [lightStyle, setLightStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    tiltMove(e);
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLightStyle({
      opacity: 1,
      background: `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`,
    });
  }, [tiltMove, ref]);

  const onMouseLeave = useCallback(() => {
    tiltLeave();
    setLightStyle({ opacity: 0 });
  }, [tiltLeave]);

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
      className="group relative flex flex-col rounded-xl bg-surface border border-surface-border cursor-default select-none isolate"
    >
      {/* Per-card cursor light */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-xl"
        style={lightStyle}
      />

      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-t-xl z-10" style={{ aspectRatio: '400/220' }}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 z-20 px-2 py-0.5 text-xs font-bold tracking-widest uppercase bg-black/70 text-white border border-white/20 rounded-sm backdrop-blur-sm group-hover:bg-white group-hover:text-black group-hover:border-black/20 transition-colors duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-5 gap-3">
        <h3
          className="text-white font-bold text-lg leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          {title}
        </h3>
        <p
          className="text-muted-text text-sm leading-relaxed flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>

        {buttonType === 'open' && (
          <button
            type="button"
            onClick={() => window.open(buttonAction, '_blank', 'noopener,noreferrer')}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-white/20 bg-white/5 text-white text-sm font-semibold tracking-wide
              hover:bg-white/10 hover:border-white/40
              transition-all duration-200 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <img src="https://lh3.googleusercontent.com/rd-d/ALs6j_H4Ts5L6noqzFShX5NUC6PBs_ctYXKXPUTQoPPeg3UiJxusyb5e5YBnFlDWCROOJb64qRgiamxLqKA3imqe6d9viCegslcT3M6smgMRfccYXEN8OQM2uYJs_7kURhD3f7rAbFOiJvkJS3XcuX_L18Z3K5NjheySObWpYcYDc_KChnWKR0FtWhSyAcIDZWk0N9JKSOH-mrOHtCLrPQhJkyYKJyc0bSjkR7sJPMjTgr25R99HO5BQAevg0h6PlI56DBD_yu2gxlFhxAGlS4OlAthI-d3tWKw2YX0hbTHn0YY6Rh9kaVyG95Pe8wb2zwUcvHMHBUtGfU32SaPneW2cFq051LHPvQZBabRCflWRpyoPoC1R22WFbe9s69oPP8xqed04vaxD09iuAOAMua3eND8_b2ZY8Z6gIH7XC_qOhGmwfnw1q6bgb0PVQPfpvRJPLDnO2koIGo2rnNAZn1miAsy_TV3lY7thaoKb7BEt3TCGBIswlfmsJmayDEkZTklomVnLo0-KFDVfGzqCXA8TI_x3d0HYcRNVdYcie_eNuK0ztOTA_l_2IDfKgRmleXJHaXAodamGPA3HGt6ahy7w4ItguP2LlMxv0G4tR4RGsuk-QWZM104suTZC7UI84yZCC0SSrMxqPklt1ZS6b_3_PFiH47Eh_K9tqHTXkYipFvmmK02SBZdow6kSi1iG5VsWmiTdoKN_mswK_0dLhYh8SrZslMCEdcHXxdJJDD8pg35w65MSRuNh8VmEsGcob1SQE2-7vZNjM5MsI-VEmBDO8qviDfaPPYxcj0PR4_4SaAIpF1wLpl-0A3FPGZHvw4dR753WSiRTcZ0C81JE84ftDbTgHd4XUaZaS2pRHRj0fmBC4kLsbJUWMbALxYovjz4DXCG3iAVX9dYGRlKy-mWdDa5rP9wpTCeZa0d9_FQlTqJcvNa4JDmQuGFnmEulJYdlYxYpxvXokfEkrDuIO2hBScUyWk2kPTd9FgOO3_RIXxIg96tIbbgVRTz7apcSfqyeHK69mCxGM-kcp8g7M-LyawtIzAUmHe06ldaTGJ3VCTOKSQmAuPrd1vi-pDpJhcC6W0YpDXcmdRlLuLPr2-eL-l2bt49WQWE1RKeLNs2PP-z_xVzHLlI403lBFFeM4CBilPjxUHDkOZYkXNDBTr95p_55_nP92KBg_1T9J8gd3ySdIqm3CbYI9qQHX3WCIcBtcrlSPi-DDoPBtB_8AWxUxdAHuTxCMTTZRQu_foyOJTwzU2_PG1Q8VIydWhIyk78=w2098-h1215" alt="" width={16} height={16} className="object-contain" />
            Open
          </button>
        )}

        {buttonType === 'download' && (
          <button
            type="button"
            onClick={() => handleDownload(downloadContent)}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-white/20 bg-white/5 text-white text-sm font-semibold tracking-wide
              hover:bg-white/10 hover:border-white/40
              transition-all duration-200 active:scale-95"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <img src="https://lh3.googleusercontent.com/rd-d/ALs6j_H4Ts5L6noqzFShX5NUC6PBs_ctYXKXPUTQoPPeg3UiJxusyb5e5YBnFlDWCROOJb64qRgiamxLqKA3imqe6d9viCegslcT3M6smgMRfccYXEN8OQM2uYJs_7kURhD3f7rAbFOiJvkJS3XcuX_L18Z3K5NjheySObWpYcYDc_KChnWKR0FtWhSyAcIDZWk0N9JKSOH-mrOHtCLrPQhJkyYKJyc0bSjkR7sJPMjTgr25R99HO5BQAevg0h6PlI56DBD_yu2gxlFhxAGlS4OlAthI-d3tWKw2YX0hbTHn0YY6Rh9kaVyG95Pe8wb2zwUcvHMHBUtGfU32SaPneW2cFq051LHPvQZBabRCflWRpyoPoC1R22WFbe9s69oPP8xqed04vaxD09iuAOAMua3eND8_b2ZY8Z6gIH7XC_qOhGmwfnw1q6bgb0PVQPfpvRJPLDnO2koIGo2rnNAZn1miAsy_TV3lY7thaoKb7BEt3TCGBIswlfmsJmayDEkZTklomVnLo0-KFDVfGzqCXA8TI_x3d0HYcRNVdYcie_eNuK0ztOTA_l_2IDfKgRmleXJHaXAodamGPA3HGt6ahy7w4ItguP2LlMxv0G4tR4RGsuk-QWZM104suTZC7UI84yZCC0SSrMxqPklt1ZS6b_3_PFiH47Eh_K9tqHTXkYipFvmmK02SBZdow6kSi1iG5VsWmiTdoKN_mswK_0dLhYh8SrZslMCEdcHXxdJJDD8pg35w65MSRuNh8VmEsGcob1SQE2-7vZNjM5MsI-VEmBDO8qviDfaPPYxcj0PR4_4SaAIpF1wLpl-0A3FPGZHvw4dR753WSiRTcZ0C81JE84ftDbTgHd4XUaZaS2pRHRj0fmBC4kLsbJUWMbALxYovjz4DXCG3iAVX9dYGRlKy-mWdDa5rP9wpTCeZa0d9_FQlTqJcvNa4JDmQuGFnmEulJYdlYxYpxvXokfEkrDuIO2hBScUyWk2kPTd9FgOO3_RIXxIg96tIbbgVRTz7apcSfqyeHK69mCxGM-kcp8g7M-LyawtIzAUmHe06ldaTGJ3VCTOKSQmAuPrd1vi-pDpJhcC6W0YpDXcmdRlLuLPr2-eL-l2bt49WQWE1RKeLNs2PP-z_xVzHLlI403lBFFeM4CBilPjxUHDkOZYkXNDBTr95p_55_nP92KBg_1T9J8gd3ySdIqm3CbYI9qQHX3WCIcBtcrlSPi-DDoPBtB_8AWxUxdAHuTxCMTTZRQu_foyOJTwzU2_PG1Q8VIydWhIyk78=w2098-h1215" alt="" width={16} height={16} className="object-contain" />
            Download
          </button>
        )}

        {buttonType === 'coming-soon' && (
          <button
            type="button"
            disabled
            className="mt-2 w-full py-2.5 px-4 rounded-lg border border-white/10 bg-transparent text-muted-text text-sm font-semibold tracking-wide cursor-not-allowed opacity-50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Coming Soon
          </button>
        )}
      </div>
    </article>
  );
}
