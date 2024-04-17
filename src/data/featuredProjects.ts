import type { ComponentType } from 'svelte';

// Icons:
import Nextjs from '@/icons/nextjs.svelte';
import Remix from '@/icons/remix.svelte';
import Svelteicon from '@/icons/svelteicon.svelte';
import T3 from '@/icons/t3.svelte';
import Tauri from '@/icons/tauri.svelte';
import Trpc from '@/icons/trpc.svelte';
import {
  BoxIcon,
  BoxSelectIcon,
  ComponentIcon,
  CrownIcon,
  LinkIcon,
  PenLineIcon
} from 'lucide-svelte';

export interface iProjects {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
  icon?: string;
  lucideIcon: ComponentType;
  mainTech: iMainTech;
}

interface iMainTech {
  title: string;
  url: string;
  svelteIcon: ComponentType;
}

export const featuredProjects: iProjects[] = [
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
  },
  {
    title: 'frame',
    description: '🎨 Generate images with beautiful gradients.',
    tags: ['Next.js', 'Tailwind', 'Dropzone'],
    url: 'https://myframe.vercel.app/',
    githubUrl: 'https://github.com/pheralb/frame',
    icon: 'https://raw.githubusercontent.com/pheralb/frame/main/public/images/logo_svg.svg',
    lucideIcon: BoxSelectIcon,
    mainTech: {
      title: 'Next.js',
      url: 'https://nextjs.org/',
      svelteIcon: Nextjs
    }
  }
];
