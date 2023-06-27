import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsApi, getPokemonsApi } from '../api/pokemon'
import { ScrollView } from 'react-native-web';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonType from '../components/Pokemon/PokemonType';
import PokemonStats from '../components/Pokemon/PokemonStats';

export default function PokemonScreen({ navigation, route: { params } }) {

  //Aca se guardan los detalles del pokemon seleccionado al consultar la API
  const [pokemon, setPokemon] = useState(null);

  const {id} = params;

  //Esto se ejecuta cada vez que lleva un parametro diferente (params cambia su valor)
  useEffect(() => {
    (async() => {
      try {
        const respuesta = await getPokemonDetailsApi(id);
        //console.log(respuesta);
        setPokemon(respuesta);
      } catch (error) {
        navigation.goBack();
      }
    })()


  }, [params])

  //Renderizar nulo cuando no se tiene una respuesta
  if( !pokemon ) return null;
  

  return (
    <View>
      <ScrollView>
        <PokemonHeader nombre={ pokemon.name } numero={ pokemon.order }
                       image={ pokemon.sprites.other['official-artwork'].front_default }
                       tipo={ pokemon.types[0].type.name }
        />
        <PokemonType tipos={ pokemon.types } />
        <PokemonStats estadisticas={pokemon.stats} />
      </ScrollView>
    </View>
  )
}