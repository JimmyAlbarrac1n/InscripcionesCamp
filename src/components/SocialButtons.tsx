// Botones a las redes oficiales de la Pastoral Juvenil Cristo Rey.
// Reutilizable: se usa en el Hero y luego en el Footer.

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/pastoral__juvenilcristorey", Icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/share/1Fthzh4co9/", Icon: FacebookIcon },
];

interface SocialButtonsProps {
  className?: string;
}

const SocialButtons = ({ className = "" }: SocialButtonsProps) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/25 text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_12px_24px_-8px_hsl(138_36%_27%/0.6)]"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
