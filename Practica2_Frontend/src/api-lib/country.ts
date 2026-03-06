import { api } from '@/api-lib/api'

// Inicio
export const getAllCountries = async () => {
    const response = await api.get('all?fields=name,flag')
    return response.data
}
// Buscar
export const getCountryBySearch = async (name: string) => {
    const response = await api.get(`name/${name}?fields=name,flag,cca2`)
    return response.data
}

// Datos del pais
export const getCountryByName = async (name: string) => {
    const response = await api.get(
        `name/${name}?fullText=true&fields=name,flag,capital,region,population,languages`,
    )
    return response.data[0]
}