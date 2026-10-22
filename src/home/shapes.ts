// Hand-drawn shapes of the home page. Coordinates are in each shape's own
// viewBox; the ink filter (InkFilters.astro) roughens the edges and adds grain
// at render time, in the same units, so the viewBoxes are kept near pixel size.

export type Shape = {
	viewBox: string
	d: string
}

/** Lumpy outline the portrait is cut into. */
export const portraitBlob: Shape = {
	viewBox: "0 0 500 560",
	d: "M262 12C344 2 428 41 466 122C494 186 482 258 494 334C507 424 462 502 386 537C316 568 238 541 166 550C88 559 24 499 10 410C-3 330 22 262 14 186C6 98 66 34 141 22C184 15 222 17 262 12Z",
}

/** Accent blob behind the portrait, offset like a misregistered print. */
export const accentBlob: Shape = {
	viewBox: "0 0 500 560",
	d: "M232 26C330 6 424 54 456 142C480 206 461 266 477 332C496 414 449 501 357 531C288 553 229 524 158 536C82 548 16 490 14 400C12 331 46 284 30 210C14 118 92 44 176 34C199 31 214 29 232 26Z",
}

/** Marker strokes under the section titles, one per section. */
export const underlines: Shape[] = [
	{
		viewBox: "0 0 400 32",
		d: "M6 18C72 10 146 14 214 11C282 8 338 12 394 8M42 26C126 20 216 23 318 18",
	},
	{
		viewBox: "0 0 400 32",
		d: "M4 14C58 20 120 10 196 13C268 16 330 9 396 15M70 25C150 21 238 26 300 22",
	},
	{
		viewBox: "0 0 400 32",
		d: "M8 20C80 12 150 17 222 12C290 8 344 16 392 10M24 27C120 22 190 27 286 23",
	},
	{
		viewBox: "0 0 400 32",
		d: "M5 12C70 17 138 9 210 14C276 18 340 10 395 16M56 25C140 19 230 24 334 20",
	},
]

/** Line running down the career timeline, stretched to its height. */
export const careerLine: Shape = {
	viewBox: "0 0 24 1000",
	d: "M12 0C6 70 18 130 12 200C6 270 19 330 11 400C4 470 20 530 12 600C5 670 18 730 12 800C7 860 17 930 12 1000",
}

/** Blot marking each entry of the timeline. */
export const dot: Shape = {
	viewBox: "0 0 40 40",
	d: "M21 3C31 4 38 11 37 21C36 31 29 38 19 37C9 36 3 29 4 19C5 9 11 2 21 3Z",
}

/** Flat puddle the isometric computer of the presentation stands on. */
export const computerBlob: Shape = {
	viewBox: "0 0 500 240",
	d: "M246 16C318 8 404 30 452 74C490 110 488 154 452 186C410 222 336 222 268 228C196 234 116 224 62 192C18 166 8 122 38 86C78 38 168 24 246 16Z",
}
