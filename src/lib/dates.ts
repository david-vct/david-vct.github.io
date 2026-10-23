import type { DateValue, Period } from "../data/types"

const ONGOING = "aujourd’hui"

const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
	month: "short",
	timeZone: "UTC",
})

const parse = (value: DateValue) => {
	const [year, month] = value.split("-")
	return { year, month: month ? Number(month) : undefined }
}

const monthName = (month: number) =>
	monthFormatter.format(new Date(Date.UTC(2000, month - 1, 1)))

const formatDate = (value: DateValue) => {
	const { year, month } = parse(value)
	return month ? `${monthName(month)}\u00a0${year}` : year
}

/**
 * "sept. 2022 – août 2023", "avr. – mai 2026", "juil. 2024", "2021 – 2023",
 * "nov. 2024 – aujourd’hui".
 */
export const formatPeriod = ({ start, end }: Period): string => {
	if (!end) return `${formatDate(start)} – ${ONGOING}`
	if (start === end) return formatDate(start)

	const from = parse(start)
	const to = parse(end)
	if (from.month && to.month && from.year === to.year) {
		return `${monthName(from.month)} – ${monthName(to.month)}\u00a0${to.year}`
	}
	return `${formatDate(start)} – ${formatDate(end)}`
}

const longMonthFormatter = new Intl.DateTimeFormat("fr-FR", {
	month: "long",
	year: "numeric",
})

/** Whole years elapsed since a date, at build time. */
export const yearsSince = (value: DateValue, now: Date = new Date()): number => {
	const { year, month = 1 } = parse(value)
	const months =
		(now.getUTCFullYear() - Number(year)) * 12 + now.getUTCMonth() + 1 - month
	return Math.floor(months / 12)
}

/** "octobre 2026" */
export const formatMonthYear = (date: Date) => longMonthFormatter.format(date)
