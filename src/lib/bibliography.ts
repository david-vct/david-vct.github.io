import { projectGroups } from "../data/projects"
import type { Figure, Project, ProjectGroup } from "../data/types"

export type NumberedFigure = Figure & { number: number }

export type NumberedProject = Omit<Project, "figures"> & {
	figures: NumberedFigure[]
}

// Figures are numbered continuously across groups, like the figures of a
// paper.
let figureCount = 0

export const numberedGroups = projectGroups.map((group) => ({
	id: group.id,
	projects: group.projects.map(
		(project): NumberedProject => ({
			...project,
			figures: (project.figures ?? []).map((figure) => ({
				...figure,
				number: ++figureCount,
			})),
		}),
	),
}))

export const projectsOf = (id: ProjectGroup["id"]) =>
	numberedGroups.find((group) => group.id === id)?.projects ?? []

const byId = new Map(
	numberedGroups.flatMap((group) => group.projects).map((p) => [p.id, p]),
)

export const projectAnchor = (id: string) => `ref-${id}`

/** Resolves a reference to a project; fails the build on an unknown id. */
export const cite = (id: string) => {
	const project = byId.get(id)
	if (!project) throw new Error(`Unknown project id in citation: "${id}"`)
	return { title: project.title, href: `#${projectAnchor(id)}` }
}
