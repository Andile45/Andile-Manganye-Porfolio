import { Github, Linkedin, Mail } from './icons';
import { FooterSocialLink } from './FooterSocialLink';
import { useCanHover } from '../hooks/useCanHover';

const socialLinks = [
  {
    href: 'mailto:manganyeandile@gmail.com',
    label: 'Email Andile Manganye',
    title: 'Email',
    description: 'Best for role inquiries, collaborations, and quick introductions.',
    hint: 'manganyeandile@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    href: 'https://github.com/Andile45',
    label: 'GitHub profile',
    title: 'GitHub',
    description: 'Source code, contributions, and project repositories.',
    hint: '@Andile45 · Opens in a new tab',
    Icon: Github,
    external: true,
  },
  {
    href: 'https://linkedin.com/in/andile-manganye-a27591319',
    label: 'LinkedIn profile',
    title: 'LinkedIn',
    description: 'Professional profile, experience, and networking.',
    hint: 'andile-manganye · Opens in a new tab',
    Icon: Linkedin,
    external: true,
  },
] as const;

export default function Footer() {
  const canHover = useCanHover();

  return (
    <footer className="border-t border-zinc-200 px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <nav aria-label="Social links">
          <ul className="flex items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <FooterSocialLink
                  href={link.href}
                  label={link.label}
                  title={link.title}
                  description={link.description}
                  hint={link.hint}
                  icon={link.Icon}
                  external={link.external}
                  canHover={canHover}
                />
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Andile Manganye · Built with{' '}
          <span className="text-zinc-700">React</span>,{' '}
          <span className="text-zinc-700">TypeScript</span> &{' '}
          <span className="text-zinc-700">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
