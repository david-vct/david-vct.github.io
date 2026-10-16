import type { Experience } from "./types"

// Reverse chronological order.
export const experience: Experience[] = [
	{
		role: "Développeur web et mobile",
		organization: "Indépendant",
		contract: "Freelance",
		location: "Toulouse",
		period: { start: "2023-09" },
		items: [
			"Conception et développement de solutions web et mobiles pour des PME et des startups",
			"Renfort technique au sein d’équipes de développement existantes",
		],
		technologies: ["TypeScript", "React", "Next.js", "React Native", "Node.js"],
		related: ["padelgo", "padelgo-manager"],
	},
	{
		role: "Développeur full stack",
		organization: "Capgemini",
		contract: "Alternance",
		location: "Toulouse",
		period: { start: "2022-09", end: "2023-08" },
		items: [
			"Conception et implémentation de solutions complètes pour un grand client",
			"Optimisation et maintenance de l’application",
			"Coordination et organisation agile selon le cadre SAFe",
		],
		technologies: ["Java", "JavaScript"],
	},
	{
		role: "Développeur full stack",
		organization: "Groupe Adonis",
		contract: "Alternance",
		period: { start: "2021-09", end: "2022-09" },
		items: [
			"Conception, design et implémentation d’un tableau de bord",
			"Développement d’une API REST",
		],
		technologies: ["HTML", "API REST"],
	},
	{
		role: "Développeur web",
		organization: "Holymori",
		contract: "Mission freelance",
		period: { start: "2020-05", end: "2020-07" },
		items: ["Refonte complète du site vitrine"],
		technologies: ["React", "TypeScript"],
	},
]
