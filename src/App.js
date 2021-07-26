import PokemonProvider from './context/pokemons/Provider';
import Routes from './routes'

function App() {
  return(
    <PokemonProvider>
      <Routes/>
    </PokemonProvider>
  )
}

export default App;
