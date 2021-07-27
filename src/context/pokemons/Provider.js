import PokemonContext from "./index"
import apiCall from "../../api/index"
import { useState } from "react"
export default function PokemonProvider( { children } ){

    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("false")

    const getPokemons = async () => {
        try {
            setIsLoading(true)
            setErrorMessage("")
            setHasError(false)
            const pokemonResult = await apiCall( { url: "https://pokeapi.co/api/v2/pokemon?limit=100" } )
            console.log(pokemonResult.results)
            setPokemons(pokemonResult.results)
        } catch (error) { 
            setPokemons([])
            setErrorMessage("Algo ha pasado, verifica tu conexión")
            setHasError(true)
        } finally{
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id) =>{
        if (!id) Promise.reject('Id es requerido')
        try{
            setIsLoading(true)
            setErrorMessage("")
            setHasError(false)
            // Provocar un error, salta directo al catch: throw new Error("Hey!")
            const pokemonDetail = await apiCall( { url: `https://pokeapi.co/api/v2/pokemon/${id}` } )
            setPokemonDetail(pokemonDetail)
        } catch(err){
            setPokemonDetail({})
            setErrorMessage("Algo ha pasado, verifica tu conexión")
            setHasError(true) 
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <PokemonContext.Provider value={ 
            // Acá van todas las cosas a las que pueden acceder los componentes de el contexto
            {
                getPokemons,
                pokemons,
                getPokemonDetail,
                pokemonDetail,
                isLoading,
                errorMessage,
                hasError,
            }}>  
            {children}
        </PokemonContext.Provider>
    )
}