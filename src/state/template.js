import { createSignal } from "@react-rxjs/utils"
import { bind } from "@react-rxjs/core"

const INIT = [
  'make coffee',
  'read chapter of book',
  'meditate',
]

export const [templateChange$, setTemplate] = createSignal();

export const [useTemplate, template$] = bind(templateChange$, INIT)
