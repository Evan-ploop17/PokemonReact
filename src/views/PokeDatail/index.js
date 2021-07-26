import { useParams } from "react-router" 
import { useEffect, useContext } from 'react'
import PokemonContext from "../../context/pokemons"
import PokeStats from "./components/PokeStats"
import Loading from "../../components/Loading"

export default function PokeDetail(){
     
    const  { id } = useParams()
    const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext)
    
    useEffect(() => {
        getPokemonDetail(id).catch(null)
    }, [])

    console.log(pokemonDetail)
    
    if(isLoading) return(<Loading title="Cargando Pokemon..." />)
    
    return( 
        <div>
            <h3 style={{marginTop:15, marginBottom:15}} > Info General </h3>
            <p>{`Nombre: ${pokemonDetail?.name}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight} kg`}</p>
            <p>{`Altura: ${pokemonDetail?.height} cm`}</p>
            <div>
                <h3 style={{marginTop:15, marginBottom:15}} > Habilidades </h3>
                <PokeStats stats={pokemonDetail?.stats ?? []} />
            </div>
        </div>
    )
}