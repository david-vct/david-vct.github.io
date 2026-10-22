import type { Service } from "./types"

export const services: Service[] = [
	{
		title: "Développement web et mobile",
		description:
			"Je conçois et développe votre produit de bout en bout, de la première maquette à la publication sur les stores.",
		items: [
			"Sites et plateformes web avec React et Next.js",
			"Applications iOS et Android avec React Native et Expo",
			"API et services côté serveur avec Node.js",
		],
	},
	{
		title: "Renfort d’équipe technique",
		description:
			"Je rejoins votre équipe de développement pour accélérer un projet existant ou absorber un pic d’activité.",
		items: [
			"Immersion rapide dans vos équipes et vos projets existants",
			"Accélération de vos livraisons",
			"Organisation agile, Scrum ou SAFe",
		],
	},
]

/** Technologies common to every service. */
export const serviceTechnologies = [
	"TypeScript",
	"React",
	"Next.js",
	"React Native",
	"Expo",
	"Node.js",
	"MongoDB",
	"Docker",
	"Grafana",
]
