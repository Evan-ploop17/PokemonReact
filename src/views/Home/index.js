import { useContext, useEffect } from "react"
import Loading from "../../components/Loading"
import PokemonContext from "../../context/pokemons"
import PokemonList from "./components/PokemonsList"

export default function Home(){

    const {getPokemons, pokemons, isLoading} = useContext( PokemonContext )

    useEffect( () => {
        getPokemons().catch(null)
    }, [])

    if(isLoading) return <Loading title="Cargando resultados..." />

    return <PokemonList pokemons={ pokemons } />
}