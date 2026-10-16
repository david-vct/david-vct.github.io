import type { Link } from "./types"

export const profile = {
	name: "David Vicente",
	title: "Ingénieur logiciel, développement web et mobile",
	location: "Toulouse, France",
	email: "david.vct@proton.me",
	links: [
		{ label: "github.com/david-vct", href: "https://github.com/david-vct" },
		{
			label: "linkedin.com/in/david-vct",
			href: "https://www.linkedin.com/in/david-vct/",
		},
	] satisfies Link[],
	description:
		"Curriculum vitae de David Vicente, ingénieur logiciel spécialisé dans le développement web et mobile (TypeScript, React, React Native, Node.js).",
	summary: [
		"Ingénieur logiciel formé à l’Université de Bordeaux puis à l’Université de Toulouse, je conçois et développe des applications web et mobiles depuis 2021, principalement dans l’écosystème TypeScript : React, Next.js et React Native côté client, Node.js côté serveur.",
		"Après deux années d’alternance, au Groupe Adonis puis chez Capgemini, j’exerce en indépendant depuis 2023 auprès de PME et de startups, aussi bien pour concevoir un produit de bout en bout que pour renforcer une équipe existante. J’ai notamment travaillé pour Capgemini, EDF, le Groupe Adonis, SEDRAP et PadelGo.",
	],
}
