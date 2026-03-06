export type Country = {
    cca2: string
    flag: string
    name: Name
    capital: string[]
    region: string
    subregion: string
    population: number
    currencies: Record<string, Currencies>
    languages: Record<string, string>
}

export type Name = {
    common: string
    official: string
    
}

export type Currencies = {
    name: string,
    symbol?: string
}

