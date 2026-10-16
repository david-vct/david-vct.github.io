import type { Education } from "./types"

// Reverse chronological order.
export const education: Education[] = [
  {
    degree: "Master (bac + 5)",
    field: "Informatique",
    institution: "Université de Toulouse",
    location: "Toulouse",
    period: { start: "2021", end: "2023" },
  },
  {
    degree: "Licence (bac + 3)",
    field: "Informatique",
    institution: "Université de Bordeaux",
    location: "Bordeaux",
    period: { start: "2018", end: "2021" },
  },
  {
    degree: "Baccalauréat scientifique",
    field: "Spécialité informatique",
    institution: "Lycée Grand Air",
    location: "Arcachon",
    period: { start: "2015", end: "2018" },
  },
]
