interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  id,
  titleClassName = '',
  subtitleClassName = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`mb-10 max-w-2xl ${alignClass}`}>
      <h2
        id={id}
        className={`text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-base text-text-muted sm:text-lg ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  )
}