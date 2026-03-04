import { View, Text, Image } from 'react-native'
import React from 'react'


interface PokemonCardProps{
    name: String;
    url: string;
}
export default function PokemonCard(props: PokemonCardProps) {
    const id = props.url.split("/").filter(Boolean).at(-1);
    console.log(id);
    const PokemonImageURL =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
return (
    <View>
        <Image

        source={{uri: PokemonImageURL}}
        style={{width: 10, height:10}}
            
      ></Image>
    <Text>{props.name}</Text>
    

    </View>
)
}