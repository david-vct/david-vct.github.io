# david-vct.github.io

Curriculum vitae de David Vicente, publié sur GitHub Pages : <https://david-vct.github.io>.

Site statique généré avec [Astro](https://astro.build), sans JavaScript côté client.

## Modifier le contenu

Tout le contenu se trouve dans `src/data/`, séparé du rendu :

| Fichier         | Contenu                                    |
| --------------- | ------------------------------------------ |
| `profile.ts`    | En-tête, coordonnées, paragraphe de profil |
| `experience.ts` | Expérience professionnelle                 |
| `education.ts`  | Formation                                  |
| `projects.ts`   | Travaux, groupés, avec leurs figures       |
| `skills.ts`     | Compétences                                |

- Les dates s'écrivent `"2023-09"` (mois) ou `"2021"` (année) ; une période sans `end` est en cours. Le formatage en français est fait dans `src/lib/dates.ts`.
- Les figures sont numérotées automatiquement dans l'ordre de `projects.ts` (`src/lib/bibliography.ts`). Une expérience peut renvoyer à des travaux par leur `id` via `related` ; un identifiant inconnu fait échouer le build.
- Les images vont dans `src/assets/projects/` et sont importées dans `projects.ts` ; Astro les convertit en WebP aux bonnes tailles. Les GIF animés sont servis tels quels.
- L'ordre et la numérotation des sections sont définis dans `src/pages/index.astro`.

## Développement

```sh
npm install
npm run dev      # serveur local
npm run build    # vérification des types (astro check) puis build dans dist/
npm run preview  # sert le build
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit et publie le site. Dans les réglages du dépôt, _Settings → Pages → Source_ doit être sur **GitHub Actions**.
