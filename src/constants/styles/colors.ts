// Palette officielle devChallenges.io
// #FEF7EE #F6C768 #6F757C #1B1D1F #BEE3CC #302522 #111315 #4D5562 #ED735D

export const colors = {
  // Palette officielle
  cream: '#FEF7EE',       // Arrière-plans clairs
  yellow: '#F6C768',      // Badge Popular
  gray: '#6F757C',        // Texte secondaire  
  darkGray: '#1B1D1F',    // Backgrounds sombres
  mint: '#BEE3CC',        // Badge Prix (vert clair)
  brown: '#302522',       // Texte foncé
  black: '#111315',       // Arrière-plan principal
  slate: '#4D5562',       // Boutons inactifs
  coral: '#ED735D',       // Sold out / Accents
  
  // Mappings fonctionnels
  bgOverlay: 'rgba(17, 19, 21, 0.9)',     // #111315 avec opacité
  bgCard: '#1B1D1F',                      // #1B1D1F
  
  // Text colors
  textPrimary: '#FEF7EE',                 // #FEF7EE (cream)
  textSecondary: '#6F757C',               // #6F757C (gray)
  textMuted: '#4D5562',                   // #4D5562 (slate)
  
  // Accent colors
  badgePopular: '#F6C768',                // #F6C768 (yellow)
  badgePrice: '#BEE3CC',                  // #BEE3CC (mint green)
  stars: '#F6C768',                       // #F6C768 (yellow)
  soldOut: '#ED735D',                     // #ED735D (coral)
  
  // Button colors
  btnActive: '#4D5562',                   // #4D5562 (slate)
  btnInactive: 'transparent',
  
  // Card
  cardBorder: 'rgba(111, 117, 124, 0.3)', // #6F757C avec opacité
  cardHover: 'rgba(27, 29, 31, 0.8)',     // #1B1D1F avec opacité
} as const;