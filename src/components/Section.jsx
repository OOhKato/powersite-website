export function PageSection({ id, className = '', standalone = false, children }) {
  return (
    <section
      id={id}
      className={`w-full ${standalone ? 'py-10 md:py-14 lg:py-16' : 'py-16 md:py-20 lg:py-24'} ${className}`}
    >
      {children}
    </section>
  )
}

export function PageContainer({ className = '', children }) {
  return (
    <div className={`mx-auto box-border w-full max-w-6xl px-5 sm:px-8 lg:px-12 text-center ${className}`}>
      {children}
    </div>
  )
}

export function SectionHeader({ children, className = '' }) {
  return (
    <header className={`mb-10 md:mb-14 text-center ${className}`}>
      {children}
    </header>
  )
}
