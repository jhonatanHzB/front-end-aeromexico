export type Character = {
  name: string
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alive: boolean
  image: string
}

export type Wand = {
  wood: string
  core: string
  length: number
}
