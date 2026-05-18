export function Facebook({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
}

export function Twitter({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4 1.5 6-1.5-5.9-6-17.3-6-17.3 8.9-2.7 13-1.9 13-1.9s-4.9 1.8-5.9 2.2c-.4-.3-.9-1.9-.9-1.9s3.3 3.6 5.5 4.7c-.2.2-1.7-1.1-3.3-1.1-3.3s-1.7-3.6-3.8-3.6c-2.1 0-2.6 1.6-2.6 1.6s-.9-.7-1.9-1.4c-2 1.3-3.2 3-3.2 3s-1.6-.8-3.2-2.2c-1.6-1.4-2.8-1.9-2.8-1.9s4.4 5.5 12.5 5.1c-1.3.9-2.1 1.5-2.1 1.5s2.2 3 5.9 3.1c3.7.1 7.5-1.4 7.5-1.4s2.9-3.1 5.9-3.1c2.9 0 3.2 1.9 3.2 1.9s-.5 3.1-2.1 5c-1.7 1.9-4.4 2.8-4.4 2.8s-1.9 0-2.6-.6c-.7-.6-1.6-2.3-1.6-2.3s2.5-3 3.6-3.4c1.1-.4 3.3-1.6 3.3-1.6s-3.4-3-7.9-2.2c-4.5.8-9.6 3.1-9.6 3.1s1.1 3.6 2.9 4.1c1.8.5 2.3-.1 2.3-.1s-.6 1.8-2 3.4c-1.4 1.6-3.9 3.1-3.9 3.1s-1.6-.6-2.9-2.3c-1.3-1.7-2.4-5.9-2.4-5.9s4.6 3.6 9.4 2.2c4.8-1.4 7.3-4.9 7.3-4.9s1.3 1.4 2.4 1.9c1.1.5 3.3-1.6 3.3-1.6z"></path>
    </svg>
  )
}

export function Linkedin({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

export function Instagram({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}
