import ddgct1 from "../assets/projects/ddgct-1.png"
import ddgct2 from "../assets/projects/ddgct-2.png"
import experimental1 from "../assets/projects/experimental-coding-1.gif"
import experimental2 from "../assets/projects/experimental-coding-2.gif"
import experimental3 from "../assets/projects/experimental-coding-3.png"
import padelgo1 from "../assets/projects/padelgo-1.png"
import padelgo2 from "../assets/projects/padelgo-2.png"
import padelgo3 from "../assets/projects/padelgo-3.png"
import rculture1 from "../assets/projects/rculture-1.png"
import rculture2 from "../assets/projects/rculture-2.png"
import rculture3 from "../assets/projects/rculture-3.png"
import vocabulary1 from "../assets/projects/vocabularytools-1.jpg"
import type { ProjectGroup } from "./types"

const GITHUB = "https://github.com/david-vct"

// Entries are numbered in the order they appear here, groups included.
// Within a group, keep reverse chronological order.
export const projectGroups: ProjectGroup[] = [
	{
		title: "Produits",
		projects: [
			{
				id: "padelgo",
				title: "PadelGo",
				kind: "Application mobile de réservation et de matchmaking, iOS et Android",
				period: { start: "2024-11" },
				description:
					"Application qui connecte les joueurs de padel pour faciliter la création de parties, la recherche de partenaires et la réservation de terrains.",
				technologies: ["React Native", "Expo", "TypeScript"],
				links: [
					{
						label: "App Store",
						href: "https://apps.apple.com/ma/app/padelgo/id6743053827?l=fr-FR",
					},
				],
				portrait: true,
				figures: [
					{ image: padelgo1, caption: "Écran d’accueil." },
					{ image: padelgo2, caption: "Réservation d’un terrain." },
					{ image: padelgo3, caption: "Profil, niveau et statistiques du joueur." },
				],
			},
			{
				id: "padelgo-manager",
				title: "PadelGo Manager",
				kind: "Plateforme web de gestion de clubs",
				period: { start: "2024-11" },
				description:
					"Plateforme destinée aux clubs de padel, qui centralise la gestion quotidienne de leurs activités : terrains, réservations, disponibilités et événements.",
				technologies: ["Next.js", "TypeScript"],
			},
		],
	},
	{
		title: "Logiciels libres et projets personnels",
		projects: [
			{
				id: "experimental-coding",
				title: "Experimental Coding",
				kind: "Galerie d’expériences de code créatif",
				period: { start: "2026-07" },
				description:
					"Explorations autour de concepts de programmation : quines, fractales, shaders WebGL et automates cellulaires. Chaque expérience tient dans un seul fichier, sans compilation ni dépendance, et s’exécute directement dans la page.",
				technologies: ["JavaScript", "HTML", "WebGL"],
				links: [
					{ label: "site", href: "https://david-vct.github.io/experimental-coding/" },
					{ label: "code", href: `${GITHUB}/experimental-coding` },
				],
				figures: [
					{ image: experimental1, caption: "Page d’accueil de la galerie." },
					{ image: experimental2, caption: "Jeu de la vie de Conway, simulation interactive." },
					{ image: experimental3, caption: "Exploration de l’ensemble de Mandelbrot." },
				],
			},
			{
				id: "duckduckgo-custom-tabs",
				title: "DuckDuckGo Custom Tabs",
				kind: "Extension de navigateur",
				period: { start: "2026-04", end: "2026-05" },
				description:
					"Extension qui permet de personnaliser DuckDuckGo en redirigeant ses onglets vers les services de son choix, comme Google Maps, Wikipédia ou Reddit.",
				technologies: ["TypeScript", "WebExtensions", "Node.js"],
				links: [
					{
						label: "Firefox Add-ons",
						href: "https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-custom-tabs/",
					},
					{ label: "code", href: `${GITHUB}/duckduckgo-custom-tabs` },
				],
				figures: [
					{ image: ddgct1, caption: "Redirection de l’onglet Maps vers Google Maps." },
					{ image: ddgct2, caption: "Ajout d’un onglet personnalisé vers Wikipédia." },
				],
			},
			{
				id: "ydotool-rebind",
				title: "Ydotool Rebind",
				kind: "Outil en ligne de commande pour Linux",
				period: { start: "2026-01", end: "2026-03" },
				description:
					"Surcouche Bash de ydotool pour les claviers non QWERTY : les entrées sont traduites vers la disposition QWERTY attendue par ydotool, ce qui permet une saisie automatisée correcte quelle que soit la disposition utilisée.",
				technologies: ["Bash", "Linux"],
				links: [{ label: "code", href: `${GITHUB}/ydotool-rebind` }],
			},
			{
				id: "vocabulary-tools",
				title: "Vocabulary Tools for Google Docs",
				kind: "Module complémentaire pour Google Docs",
				period: { start: "2024-07", end: "2024-07" },
				description:
					"Module qui donne un accès immédiat aux synonymes, antonymes et conjugaisons depuis l’éditeur.",
				technologies: ["JavaScript", "Google Apps Script", "Google Cloud Platform"],
				links: [{ label: "code", href: `${GITHUB}/gdocs-vocabulary-tools` }],
				figures: [{ image: vocabulary1, caption: "Panneau des synonymes dans l’éditeur." }],
			},
			{
				id: "rculture",
				title: "Rculture",
				kind: "Jeu de quiz multijoueur et collaboratif",
				period: { start: "2024-03", end: "2024-04" },
				description:
					"Jeu multijoueur en ligne dans lequel les participants répondent à des questions créées par la communauté.",
				technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
				links: [
					{ label: "site", href: "https://rculture.web.app" },
					{ label: "code", href: `${GITHUB}/rculture` },
				],
				figures: [
					{ image: rculture1, caption: "Accueil : création d’une partie ou ajout à une partie existante." },
					{ image: rculture2, caption: "Question en cours de partie." },
					{ image: rculture3, caption: "Paramétrage d’une nouvelle partie." },
				],
			},
		],
	},
]
