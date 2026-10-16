import type { SkillGroup } from "./types"

export const skills: SkillGroup[] = [
	{
		label: "Langages",
		items: ["TypeScript", "JavaScript", "Java", "Bash", "HTML", "CSS", "SQL"],
	},
	{ label: "Web", items: ["React", "Next.js", "Tailwind CSS"] },
	{ label: "Mobile", items: ["React Native", "Expo"] },
	{ label: "Serveur", items: ["Node.js", "NestJS", "API REST"] },
	{ label: "Données", items: ["PostgreSQL", "MongoDB", "Firebase"] },
	{
		label: "Outils",
		items: ["Git", "Docker", "Linux", "Google Cloud Platform"],
	},
	{
		label: "Méthodes",
		items: ["Conception logicielle", "Gestion de projet", "Agilité (Scrum, SAFe)"],
	},
]
