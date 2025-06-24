export const brand = {
  accent: '#22c55e',      // Vynce green 500
  accentLight: '#4ade80', // green 400
  accentDark: '#16a34a',  // green 600
  bg: 'from-[#0d0d0d] to-[#1a1a1a]', // dark radial gradient
  bgLight: 'from-[#1a1a1a] to-[#2d2d2d]', // lighter dark gradient
  text: {
    primary: '#ffffff',
    secondary: '#a1a1aa', // zinc 400
    muted: '#71717a',     // zinc 500
  },
  glass: {
    dark: 'bg-black/20 backdrop-blur-lg border border-white/10',
    light: 'bg-white/5 backdrop-blur-sm border border-white/5',
  }
};

export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const gradients = {
  primary: `bg-gradient-to-r ${brand.bg}`,
  accent: `bg-gradient-to-r from-${brand.accent} to-${brand.accentLight}`,
  text: `bg-gradient-to-r from-${brand.text.primary} to-${brand.text.secondary} bg-clip-text text-transparent`,
}; 