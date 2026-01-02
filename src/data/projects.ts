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
	},
	'vaquita': {
		name: 'Vaquita',
		desc: 'The power of saving in community',
		details: 'The safest and most gamified way to save as a community with the power of blockchain. Vaquita offers a decentralized savings platform where users can contribute monthly and earn interest based on how long they wait. Features include fair interest distribution, flexible withdrawals, and complete security through audited smart contracts. The longer you wait, the more you earn. Technologies: Blockchain, Smart Contracts, Web3.',
		url: 'https://vaquita.fi/'
	}
};

export type ProjectKey = keyof typeof projects;

