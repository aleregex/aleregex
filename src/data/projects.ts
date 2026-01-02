export const projects = {
	'aleregex-portfolio': {
		name: 'aleregex-portfolio',
		desc: 'Personal portfolio with interactive terminal',
		details: 'Minimalist landing page built with Astro. Interactive retro-technical terminal with custom commands. Technologies: Astro, TypeScript, vanilla CSS.'
	},
	'blockchain-explorer': {
		name: 'blockchain-explorer',
		desc: 'Blockchain explorer with real-time visualization',
		details: 'Web application to explore blockchain transactions. Real-time data visualization, interactive charts, and advanced search. Technologies: Next.js, TypeScript, Web3.js, Chart.js.'
	}
};

export type ProjectKey = keyof typeof projects;

