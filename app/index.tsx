import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);

  
  const getPokemons = async () => {
try{
  const URL ="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  const response = await fetch(URL, {

   method:"GET",

  });
   
  if (response.ok){

   console.log("request ok");
  } else {

  console.log("bard request");
  }
 

  } catch (error){
    console.log('ocurrio un error')
  }

};

  return (
    <View>
     <Text>lol</Text>
    </View>
  );
}
