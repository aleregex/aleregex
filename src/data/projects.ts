export interface ProjectLink {
	type: 'github' | 'figma' | 'website' | 'demo' | 'docs' | 'youtube' | 'other';
	url: string;
	label?: string;
}

export interface Project {
	name: string;
	desc: string;
	details: string;
	logo?: string; // Ruta relativa desde /public/projects/ (ej: 'vaquita.png' o 'vaquita.svg')
	links?: ProjectLink[];
}

export const projects: Record<string, Project> = {
	'aleregex-portfolio': {
		name: 'aleregex-portfolio',
		desc: 'Personal portfolio with interactive terminal',
		logo: 'aleregex-logo.png',
		details: `## What the product does

This is my personal portfolio website built with Astro. It features an interactive terminal interface that mimics a retro command-line experience, allowing visitors to explore my projects and information through custom terminal commands.

The portfolio serves as both a showcase of my work and a demonstration of my technical skills, combining modern web development practices with a nostalgic terminal aesthetic.

## My Role

**Creator & Developer**

- Designed and implemented the entire portfolio architecture
- Created the interactive terminal system with custom command parsing
- Built the project navigation and routing system
- Implemented the retro-technical UI/UX design
- Developed the markdown-based project detail system

## Technical Goals

- Create an engaging, interactive user experience
- Maintain fast page loads and smooth animations
- Keep the codebase clean and maintainable
- Support markdown content for easy project updates
- Ensure responsive design across all devices

## Architecture

- **Framework:** Astro (Static Site Generation)
- **Structure:** File-based routing with dynamic project pages
- **Rendering:** Server-side rendering for optimal performance
- **Styling:** Vanilla CSS with CSS variables for theming
- **Content:** TypeScript for type safety, Markdown for project details

## Key Features

- Interactive terminal with custom commands (help, clear, whoami, ls, cat)
- Dynamic project listing and navigation
- Markdown support for rich project descriptions
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Command history and autocomplete functionality

## Tech Stack

**Astro** · **TypeScript** · **Vanilla CSS** · **Marked (Markdown parser)**`,
		links: [
			{ type: 'github', url: 'https://github.com/aleregex/aleregex' }
		]
	},
	'vaquita': {
		name: 'Vaquita',
		desc: 'Gamified savings application',
		logo: 'vaquita-logo.png',
		details: `## What the product does

Vaquita is a gamified savings application where users commit to a savings goal and receive continuous visual feedback as progress is made. Instead of traditional financial dashboards, the product uses evolving visual states to represent user commitment and consistency.

This product requirement directly shaped the technical design.

## My Role

**Founder & Lead Frontend Engineer**

- Defined the frontend architecture and technical direction
- Designed the visual state system and gamification model
- Implemented the core UI, animations, and 3D integration
- Made architectural decisions regarding state management and performance
- Iterated on the product through continuous technical refinement

## Technical Goals

- Map financial progress to deterministic visual states
- Maintain a scalable, maintainable frontend architecture
- Ensure mobile-first performance and responsiveness
- Keep Web3 as an optional, decoupled layer

## Architecture

- **Framework:** Next.js 14 (App Router)
- **Structure:** Feature-based folders with clear separation between UI, domain logic, and visual controllers
- **Rendering:** Client-side rendering for interactive layers
- **Styling:** Tailwind CSS

## Tech Stack

**Next.js 14** · **TypeScript** · **Tailwind CSS** · **React Three Fiber** · **Web3 tooling**`,
		links: [
			{ type: 'website', url: 'https://www.vaquita.fi' },
			{ type: 'youtube', url: 'https://www.youtube.com/watch?v=0Vgv-1fFzDA' },
		]
	}
};

export type ProjectKey = keyof typeof projects;

