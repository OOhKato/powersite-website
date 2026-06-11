export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'News', to: '/news' },
  { label: 'Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

export const sidebarLinks = navLinks.filter((link) => link.to !== '/')
