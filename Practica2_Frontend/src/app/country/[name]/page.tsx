'use client'

import { useParams, useRouter } from 'next/navigation'
import { Country } from '@/types'
import { useEffect, useState } from 'react'
import { getCountryByName } from '@/api-lib/country'
import { AxiosError } from 'axios'

import './page.css'

const CountryInfo = () => {
    const { name } = useParams()

    const router = useRouter()

    const [pais, setPais] = useState<Country | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!name) return

        setLoading(true)
        setError(null)

        getCountryByName(name as string)
            .then((c) => {
                setPais(c)
            })
            .catch((e: AxiosError) => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [name])

    return (
        <>
            <div className="mainContainer">
                {!loading && !error && pais && (
                    <div className="country-info">
                        <p><strong>Nombre oficial:</strong> {pais.name.official}</p>
    
                        <p><strong>Capital:</strong> {pais.capital?.join(', ') || 'No disponible'}</p>
    
                        <p><strong>Subregión:</strong> {pais.subregion || 'No disponible'}</p>
    
                        <p><strong>Lenguajes:</strong> {Object.values(pais.languages || {}).join(', ') || 'No disponible'}</p>
    
                        <p>
                            <strong>Moneda:</strong>{' '}
                            {Object.values(pais.currencies || {})
                                .map((currency) =>
                                    currency.symbol
                                        ? `${currency.name} (${currency.symbol})`
                                        : currency.name
                                )
                                .join(', ') || 'No disponible'}
                        </p>
    
                        <button onClick={() => router.back()}>Volver</button>
                    </div>
                )}
    
                {!pais && loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </>
    )
}

export default CountryInfo