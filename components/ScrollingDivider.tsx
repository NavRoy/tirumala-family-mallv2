'use client'

export function ScrollingDivider({ className = '' }: { className?: string }) {
  const items = Array.from({ length: 6 })

  return (
    <div className={`w-full overflow-hidden py-5 relative ${className}`} aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg,#fff,transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg,#fff,transparent)' }} />
      <div className="w-full h-px mb-2.5"
        style={{ background: 'linear-gradient(90deg,transparent,#C8A96E 20%,#8B3A2A 50%,#C8A96E 80%,transparent)', opacity: 0.35 }} />
      <div className="flex items-center" style={{ width: 'max-content', animation: 'glide18 18s linear infinite' }}>
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <Lotus /><Sep /><Arch /><Arch /><Arch /><Sep /><Flower /><Sep /><Arch /><Arch /><Arch /><Sep />
          </span>
        ))}
      </div>
      <div className="w-full h-px mt-2.5"
        style={{ background: 'linear-gradient(90deg,transparent,#C8A96E 20%,#8B3A2A 50%,#C8A96E 80%,transparent)', opacity: 0.35 }} />
      <style>{`@keyframes glide18{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}

function Sep() {
  return (
    <span className="flex items-center flex-shrink-0">
      <span style={{display:'inline-block',width:44,height:1,background:'#C8A96E',opacity:.4,flexShrink:0}}/>
      <span style={{display:'inline-block',width:4,height:4,borderRadius:'50%',background:'#C8A96E',flexShrink:0,margin:'0 5px'}}/>
      <span style={{display:'inline-block',width:4,height:4,background:'#C8A96E',transform:'rotate(45deg)',opacity:.55,flexShrink:0,margin:'0 4px'}}/>
      <span style={{display:'inline-block',width:7,height:7,background:'#8B3A2A',transform:'rotate(45deg)',opacity:.65,flexShrink:0,margin:'0 5px'}}/>
      <span style={{display:'inline-block',width:4,height:4,background:'#C8A96E',transform:'rotate(45deg)',opacity:.55,flexShrink:0,margin:'0 4px'}}/>
      <span style={{display:'inline-block',width:4,height:4,borderRadius:'50%',background:'#C8A96E',flexShrink:0,margin:'0 5px'}}/>
      <span style={{display:'inline-block',width:28,height:1,background:'#C8A96E',opacity:.5,flexShrink:0}}/>
    </span>
  )
}

function Lotus() {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" style={{flexShrink:0,margin:'0 4px'}}>
      <ellipse cx="16" cy="16.5" rx="8.5" ry="5" fill="#8B3A2A" opacity=".6"/>
      <ellipse cx="7.5" cy="10.5" rx="6" ry="3.2" fill="#8B3A2A" opacity=".4" transform="rotate(-28 7.5 10.5)"/>
      <ellipse cx="24.5" cy="10.5" rx="6" ry="3.2" fill="#8B3A2A" opacity=".4" transform="rotate(28 24.5 10.5)"/>
      <ellipse cx="16" cy="7" rx="4.5" ry="7" fill="#8B3A2A" opacity=".52"/>
      <circle cx="16" cy="15.5" r="2.5" fill="#C8A96E" opacity=".85"/>
      <circle cx="16" cy="15.5" r="4.5" fill="none" stroke="#C8A96E" strokeWidth="0.7" opacity=".35"/>
    </svg>
  )
}

function Arch() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" style={{flexShrink:0,margin:'0 2px'}}>
      <path d="M8 2C4 2 1.5 5 1.5 9C1.5 13.5 4.5 16 8 16C11.5 16 14.5 13.5 14.5 9C14.5 5 12 2 8 2Z" stroke="#8B3A2A" strokeWidth="0.9" opacity=".5"/>
      <ellipse cx="8" cy="9.5" rx="3" ry="4" fill="#C8A96E" opacity=".38"/>
      <circle cx="8" cy="9.5" r="1.4" fill="#8B3A2A" opacity=".6"/>
    </svg>
  )
}

function Flower() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{flexShrink:0,margin:'0 3px'}}>
      <circle cx="10" cy="10" r="3" fill="#C8A96E" opacity=".75"/>
      <ellipse cx="10" cy="4.5" rx="2" ry="3.5" fill="#8B3A2A" opacity=".42"/>
      <ellipse cx="10" cy="15.5" rx="2" ry="3.5" fill="#8B3A2A" opacity=".42"/>
      <ellipse cx="4.5" cy="10" rx="3.5" ry="2" fill="#8B3A2A" opacity=".42"/>
      <ellipse cx="15.5" cy="10" rx="3.5" ry="2" fill="#8B3A2A" opacity=".42"/>
      <ellipse cx="5.8" cy="5.8" rx="2" ry="3.5" fill="#8B3A2A" opacity=".28" transform="rotate(-45 5.8 5.8)"/>
      <ellipse cx="14.2" cy="5.8" rx="2" ry="3.5" fill="#8B3A2A" opacity=".28" transform="rotate(45 14.2 5.8)"/>
      <ellipse cx="5.8" cy="14.2" rx="2" ry="3.5" fill="#8B3A2A" opacity=".28" transform="rotate(45 5.8 14.2)"/>
      <ellipse cx="14.2" cy="14.2" rx="2" ry="3.5" fill="#8B3A2A" opacity=".28" transform="rotate(-45 14.2 14.2)"/>
    </svg>
  )
}

export default ScrollingDivider
