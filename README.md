# david-vct.github.io

Site personnel de David Vicente, publié sur GitHub Pages : <https://david-vct.github.io>.

Site statique généré avec [Astro](https://astro.build).

## Pages

| URL             | Source                       | Style                                   |
| --------------- | ---------------------------- | --------------------------------------- |
| `/`             | `src/pages/index.astro`      | Aucun pour l'instant                    |
| `/cv/academic/` | `src/pages/cv/academic.astro` | CV au style académique (`src/cv-academic/`) |

## Organisation du code

```
src/
├── data/          Contenu partagé (profil, expériences, formation, travaux, compétences)
├── assets/        Images du contenu (portrait, figures des travaux)
├── lib/dates.ts   Formatage des dates en français, partagé
├── layouts/
│   └── Base.astro Squelette HTML et métadonnées, sans aucun style
├── cv-academic/   Tout ce qui est propre au CV académique
│   ├── Layout.astro    Layout du CV ; seul point d'import de styles.css
│   ├── styles.css      Feuille de style du CV
│   ├── bibliography.ts Numérotation des figures et renvois entre entrées
│   ├── components/     Composants de mise en page (entrée, section, figure…)
│   └── sections/       Une section du CV par fichier
└── pages/         Une page par fichier, l'URL suit le chemin
```

Le contenu (`src/data/`, `src/assets/`, `src/lib/dates.ts`) est indépendant de toute mise en forme et peut servir à n'importe quelle page. Ce qui touche à l'apparence est rangé avec la page qui l'utilise : le dossier `src/cv-academic/` ne sert qu'au CV académique, et sa feuille de style n'est chargée que sur cette page. Une nouvelle page avec un autre style aura son propre dossier, sur le même modèle, sans réutiliser les composants de `src/cv-academic/`.

## Modifier le contenu

Tout le contenu se trouve dans `src/data/`, séparé du rendu :

| Fichier         | Contenu                                         |
| --------------- | ----------------------------------------------- |
| `profile.ts`    | Nom, titre, coordonnées, paragraphe de profil   |
| `experience.ts` | Expérience professionnelle                      |
| `education.ts`  | Formation                                       |
| `projects.ts`   | Travaux, groupés, avec leurs figures            |
| `skills.ts`     | Compétences                                     |

- Les dates s'écrivent `"2023-09"` (mois) ou `"2021"` (année) ; une période sans `end` est en cours. Le formatage en français est fait dans `src/lib/dates.ts`.
- Les images vont dans `src/assets/projects/` et sont importées dans `projects.ts` ; Astro les convertit en WebP aux bonnes tailles. Les GIF animés sont servis tels quels.

## CV académique

- L'ordre des sections est défini dans `src/pages/cv/academic.astro`.
- Les figures sont numérotées automatiquement dans l'ordre de `projects.ts` (`src/cv-academic/bibliography.ts`). Une expérience peut renvoyer à des travaux par leur `id` via `related` ; un identifiant inconnu fait échouer le build.
- Les figures d'un travail sont en colonnes fixes (plus étroites avec `portrait: true`). Quand un travail mêle captures en portrait et en paysage, elles sont mises à hauteur égale.
- Cliquer sur une figure l'agrandit par-dessus la page (seul JavaScript du site, dans `Lightbox.astro`) ; sans JavaScript, le lien ouvre l'image.
- Mise en forme : police Libertinus Serif, titres de section en `#96322D`, liens en `#335C7A`, dates et libellés dans une colonne de marge à gauche. À l'écran, tout est agrandi de 20 % (`font-size: 120%` sur `html`) ; les points de rupture des media queries intègrent ce facteur (`52.8rem` = 44 × 1,2). Les espacements verticaux sont en `em` du texte, ce qui garde les proportions à l'impression.

## Développement

```sh
npm install
npm run dev      # serveur local
npm run build    # vérification des types (astro check) puis build dans dist/
npm run preview  # sert le build
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit et publie le site. Dans les réglages du dépôt, _Settings → Pages → Source_ doit être sur **GitHub Actions**.
