import ddgct1 from "../assets/projects/ddgct-1.png"
import ddgct2 from "../assets/projects/ddgct-2.png"
import experimental1 from "../assets/projects/experimental-coding-1.gif"
import experimental2 from "../assets/projects/experimental-coding-2.gif"
import experimental3 from "../assets/projects/experimental-coding-3.png"
import padelgo1 from "../assets/projects/padelgo-1.png"
import padelgo2 from "../assets/projects/padelgo-2.png"
import padelgo3 from "../assets/projects/padelgo-3.png"
import padelgoManager1 from "../assets/projects/padelgo-manager-1.png"
import padelgoManager2 from "../assets/projects/padelgo-manager-2.png"
import rculture1 from "../assets/projects/rculture-1.png"
import rculture2 from "../assets/projects/rculture-2.png"
import rculture3 from "../assets/projects/rculture-3.png"
import trik3r1 from "../assets/projects/trik3r-1.png"
import trik3r2 from "../assets/projects/trik3r-2.png"
import verse1 from "../assets/projects/verse-1.webp"
import verse2 from "../assets/projects/verse-2.webp"
import vocabulary1 from "../assets/projects/vocabularytools-1.jpg"
import type { ProjectGroup } from "./types"

const GITHUB = "https://github.com/david-vct"

// Each group is a section of the page (see index.astro). Figures are numbered
// in the order they appear here, so keep the groups in page order. Within a
// group, keep reverse chronological order.
export const projectGroups: ProjectGroup[] = [
  {
    id: "products",
    projects: [
      {
        id: "verse",
        title: "Verse",
        kind: "Application mobile de découverte et de suivi de médias",
        period: { start: "2026-09" },
        description:
          "Application mobile de découverte et de suivi qui unifie films, séries, livres et jeux vidéo au sein d’une bibliothèque connectée d’univers fictifs, avec suivi, évaluations, collections personnalisées et fonctionnalités sociales.",
        technologies: ["React Native", "Node.js"],
        portrait: true,
        figures: [
          { image: verse1, caption: "Fiche d’une œuvre et suivi de sa lecture." },
          {
            image: verse2,
            caption: "Bibliothèque : œuvres épinglées, listes et collections.",
          },
        ],
      },
      {
        id: "padelgo",
        title: "PadelGo",
        kind: "Application mobile de réservation et de matchmaking, iOS et Android",
        period: { start: "2024-11", end: "2026-09" },
        description:
          "Application qui connecte les joueurs de padel pour faciliter la création de parties, la recherche de partenaires et la réservation de terrains.",
        technologies: ["React Native", "Expo", "TypeScript"],
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/ma/app/padelgo/id6743053827?l=fr-FR",
          },
          {
            label: "Play Store",
            href: "https://play.google.com/store/apps/details?id=com.rmarsile.padelgo&pcampaignid=web_share",
          },
        ],
        portrait: true,
        figures: [
          { image: padelgo1, caption: "Écran d’accueil." },
          { image: padelgo2, caption: "Réservation d’un terrain." },
          {
            image: padelgo3,
            caption: "Profil, niveau et statistiques du joueur.",
          },
        ],
      },
      {
        id: "padelgo-manager",
        title: "PadelGo Manager",
        kind: "Plateforme web de gestion de clubs",
        period: { start: "2024-11", end: "2026-09" },
        description:
          "Plateforme destinée aux clubs de padel, qui centralise la gestion quotidienne de leurs activités : terrains, réservations, disponibilités et événements.",
        technologies: ["Next.js", "TypeScript"],
        figures: [
          {
            image: padelgoManager1,
            caption: "Application de gestion du club : actions rapides et terrains.",
          },
          {
            image: padelgoManager2,
            caption: "Présentation de la réservation et du matchmaking.",
          },
        ],
      },
      {
        id: "trik3r",
        title: "Trik3r Collecte",
        kind: "Plateforme web de gestion des collectes de déchets",
        period: { start: "2024-06", end: "2024-11" },
        description:
          "Plateforme web de gestion des collectes de déchets, qui simplifie les commandes, la planification des interventions et le suivi des prestations, pour les particuliers comme pour les professionnels.",
        technologies: ["Node.js", "TypeScript"],
        figures: [
          { image: trik3r1, caption: "Présentation de l’entreprise." },
          { image: trik3r2, caption: "Types de déchets pris en charge." },
        ],
      },
    ],
  },
  {
    id: "personal",
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
          {
            label: "site",
            href: "https://david-vct.github.io/experimental-coding/",
          },
          { label: "code", href: `${GITHUB}/experimental-coding` },
        ],
        figures: [
          { image: experimental1, caption: "Page d’accueil de la galerie." },
          {
            image: experimental2,
            caption: "Jeu de la vie de Conway, simulation interactive.",
          },
          {
            image: experimental3,
            caption: "Exploration de l’ensemble de Mandelbrot.",
          },
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
          {
            image: ddgct1,
            caption: "Redirection de l’onglet Maps vers Google Maps.",
          },
          {
            image: ddgct2,
            caption: "Ajout d’un onglet personnalisé vers Wikipédia.",
          },
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
        technologies: [
          "JavaScript",
          "Google Apps Script",
          "Google Cloud Platform",
        ],
        links: [{ label: "code", href: `${GITHUB}/gdocs-vocabulary-tools` }],
        figures: [
          {
            image: vocabulary1,
            caption: "Panneau des synonymes dans l’éditeur.",
          },
        ],
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
          {
            image: rculture1,
            caption:
              "Accueil : création d’une partie ou ajout à une partie existante.",
          },
          { image: rculture2, caption: "Question en cours de partie." },
          { image: rculture3, caption: "Paramétrage d’une nouvelle partie." },
        ],
      },
    ],
  },
]
