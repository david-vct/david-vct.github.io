import adonis from "../assets/clients/adonis.png"
import capgemini from "../assets/clients/capgemini.webp"
import edf from "../assets/clients/edf.webp"
import padelgo from "../assets/clients/padelgo.png"
import sedrap from "../assets/clients/sedrap.svg"
import type { Client } from "./types"

export const clients: Client[] = [
  { name: "Capgemini", logo: capgemini },
  { name: "EDF", logo: edf },
  { name: "SEDRAP", logo: sedrap },
  { name: "Groupe Adonis", logo: adonis },
  { name: "PadelGo", logo: padelgo },
]
