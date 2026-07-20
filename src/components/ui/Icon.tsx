import type { ReactNode } from 'react'

type IconName =
  | 'heart'
  | 'hand'
  | 'gift'
  | 'users'
  | 'user-plus'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'whatsapp'
  | 'menu'
  | 'close'
  | 'arrow'
  | 'mail'
  | 'phone'
  | 'map'

interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    heart: (
      <path
        fill="currentColor"
        d="M12 21s-6.716-4.284-9.193-7.053C.516 13.178 0 11.107 0 8.5 0 5.462 2.462 3 5.5 3c1.74 0 3.41.81 4.5 2.09C10.59 3.81 12.26 3 14 3 17.038 3 19.5 5.462 19.5 8.5c0 2.607-.516 4.678-2.807 6.447C18.716 16.716 12 21 12 21z"
      />
    ),
    hand: (
      <path
        d="M13 6.5V4a2 2 0 1 0-4 0v5m4-3.5V3a2 2 0 1 0-4 0v6.5M9 9V5a2 2 0 1 0-4 0v7.5m8-4V6a2 2 0 1 0-4 0v5.5m4 2.5V11a2 2 0 1 0-4 0v4.5m-8 0V12a2 2 0 1 0-4 0v3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    ),
    gift: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 8V21M3 12h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8c-2-3-5-3-5 0s3 3 5 0zm0 0c2-3 5-3 5 0s-3 3-5 0z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 19c.5-2 2.5-3.5 5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    'user-plus': (
  <>
    <circle
      cx="9"
      cy="8"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M18 8v6M15 11h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </>
),
    facebook: (
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    ),
    instagram: (
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    ),
    youtube: (
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    ),
    menu: (
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" fill="none" />
    ),
    close: (
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" fill="none" />
    ),
    arrow: (
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" fill="none" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    phone: (
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L14 16l4 1.5V21a1 1 0 01-1 1C7.5 22 2 16.5 2 9.5A1 1 0 013 8.5"
      />
    ),
    map: (
      <>
        <path d="M12 21s-7-4.5-7-11a7 7 0 1114 0c0 6.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    whatsapp: (
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.014 2.906a9.825 9.825 0 012.893 7.018c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    ),
  }

  const filled = ['heart', 'facebook', 'instagram', 'youtube', 'whatsapp'].includes(name)

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill={filled ? 'currentColor' : 'none'}
    >
      {paths[name]}
    </svg>
  )
}
