interface TabSwitcherProps {
  activeTab: 'software' | 'tools';
  onChange: (tab: 'software' | 'tools') => void;
}

export default function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className="flex items-center rounded-lg overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => onChange('software')}
        className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
          activeTab === 'software'
            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.15)]'
            : 'text-muted-text hover:text-white hover:bg-white/8'
        }`}
      >
        Software
      </button>
      <button
        type="button"
        onClick={() => onChange('tools')}
        className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
          activeTab === 'tools'
            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.15)]'
            : 'text-muted-text hover:text-white hover:bg-white/8'
        }`}
      >
        Tools
      </button>
    </div>
  );
}
