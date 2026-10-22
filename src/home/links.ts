import type { Link } from "../data/types"

/** Link labels of the data are written for the CV ("site", "code"): capitalise them. */
export const linkLabel = ({ label }: Link) => label.charAt(0).toUpperCase() + label.slice(1)
