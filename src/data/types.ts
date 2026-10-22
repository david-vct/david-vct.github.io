import type { ImageMetadata } from "astro"

/** A year ("2021") or a month ("2021-09"). */
export type DateValue = string

export type Period = {
	start: DateValue
	/** Omitted while the activity is ongoing. */
	end?: DateValue
}

export type Link = {
	label: string
	href: string
}

export type Experience = {
	role: string
	organization: string
	contract: string
	location?: string
	period: Period
	items: string[]
	technologies?: string[]
	/** Ids of the related entries in the works sections, rendered as citations. */
	related?: string[]
}

export type Education = {
	degree: string
	field: string
	institution: string
	location: string
	period: Period
	note?: string
}

export type Figure = {
	image: ImageMetadata
	caption: string
}

export type Project = {
	/** Stable id, used as the anchor of the entry and for citations. */
	id: string
	title: string
	/** Nature of the work, as it would appear in a reference. */
	kind: string
	period: Period
	description: string
	technologies: string[]
	links?: Link[]
	figures?: Figure[]
	/** Portrait screenshots (mobile), laid out in narrower columns. */
	portrait?: boolean
}

export type ProjectGroup = {
	/** Products made for clients, or personal and open source work. */
	id: "products" | "personal"
	projects: Project[]
}

export type SkillGroup = {
	label: string
	items: string[]
}

export type Service = {
	title: string
	description: string
	items: string[]
	technologies?: string[]
}

export type Client = {
	name: string
	/** Single-colour logo on a transparent background: only its shape is kept. */
	logo: ImageMetadata
}
