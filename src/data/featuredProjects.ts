import type { iProjects } from '@/types/featuredProjects.types';

// Icons:
import Remix from '@/icons/remix.svelte';
import Svelteicon from '@/icons/svelteicon.svelte';
import T3 from '@/icons/t3.svelte';
import Tauri from '@/icons/tauri.svelte';
import Trpc from '@/icons/trpc.svelte';
import Astro from '@/icons/astro.svelte';

import {
  BoxIcon,
  ComponentIcon,
  CrownIcon,
  LinkIcon,
  MessageCircle,
  PenLineIcon
} from 'lucide-svelte';

export const featuredProjects: iProjects[] = [
  {
    title: 'pheralb/toast',
    description: '🍞 A beautiful notification library for React.',
    tags: ['Turborepo', 'Library', 'Astro', 'MDX'],
    url: 'https://toast.pheralb.dev',
    githubUrl: 'https://github.com/pheralb/toast',
    icon: 'https://camo.githubusercontent.com/ab9939a4460fd63c2b7a6eb9d36d24260e8ab2917b0714f923c655542a63c76a/68747470733a2f2f746f6173742e70686572616c622e6465762f696d616765732f6c6f676f5f7376672e737667',
    lucideIcon: MessageCircle,
    latest: true,
    mainTech: {
      title: 'Astro',
      url: 'https://astro.build',
      svelteIcon: Astro
    }
  },
  {
    title: 'slug',
    description: '🌱 An open-source URL shortener.',
    tags: ['Next.js', 'T3 Stack', 'Turso', 'shadcn/ui'],
    url: 'https://slug.vercel.app/',
    githubUrl: 'https://github.com/pheralb/slug',
    icon: 'https://raw.githubusercontent.com/pheralb/slug/main/public/images/logo_svg.svg',
    lucideIcon: LinkIcon,
    mainTech: {
      title: 'T3 Stack',
      url: 'https://t3.gg',
      svelteIcon: T3
    }
  },
  {
    title: 'svgl',
    description: '🧩 A beautiful library with SVG logos.',
    tags: ['Sveltekit', 'Typescript', 'SVGs', 'Tailwind'],
    url: 'https://svgl.app/',
    githubUrl: 'https://github.com/pheralb/svgl',
    icon: 'https://raw.githubusercontent.com/pheralb/svgl/main/static/images/logo.svg',
    lucideIcon: BoxIcon,
    mainTech: {
      title: 'Sveltekit',
      url: 'https://kit.svelte.dev/',
      svelteIcon: Svelteicon
    }
  },
  {
    title: 'typethings',
    description: '✍️ A modern, minimal markdown editor.',
    tags: ['Tauri', 'Turborepo', 'Tailwind', 'Tiptap'],
    githubUrl: 'https://github.com/pheralb/typethings',
    icon: 'https://raw.githubusercontent.com/pheralb/typethings/main/app/public/images/logo.svg',
    lucideIcon: PenLineIcon,
    mainTech: {
      title: 'Tauri',
      url: 'https://tauri.app/',
      svelteIcon: Tauri
    }
  },
  {
    title: 'react-symbols',
    description: '✨ Symbols Icons for React.',
    tags: ['Remix', 'Typescript', 'Turborepo', 'Tailwind'],
    url: 'https://react-symbols.vercel.app/',
    githubUrl: 'https://github.com/pheralb/react-symbols',
    icon: 'https://raw.githubusercontent.com/pheralb/react-symbols/main/website/public/images/logo_svg.svg',
    lucideIcon: ComponentIcon,
    mainTech: {
      title: 'Remix',
      url: 'https://remix.run/',
      svelteIcon: Remix
    }
  },
  {
    title: 'project-hackathon',
    description: '🌻 An open-source hackathon management.',
    tags: ['Next.js', 'Tailwind', 'tRPC', 'Prisma'],
    url: 'https://phck.vercel.app/',
    githubUrl: 'https://github.com/pheralb/project-hackathon',
    icon: 'https://raw.githubusercontent.com/pheralb/project-hackathon/main/public/images/phck.png',
    lucideIcon: CrownIcon,
    mainTech: {
      title: 'tRPC',
      url: 'https://trpc.io/',
      svelteIcon: Trpc
    }
  }
];
