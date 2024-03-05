import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native";
import PokemonList from "@/src/components/PokemonList";
import { View } from "@/src/components/Themed";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';


export default function TabOneScreen() {
  const navigation = useNavigation();

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=8",
        );
        // console.log(response.data.results);
        const pokemonData = response.data.results;
        const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          return detailsResponse.data;
        }));
        setPokemonList(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error(error);
        const axiosError = error as AxiosError;
        setError(axiosError.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("index", JSON.stringify(pokemonList));

  if (loading) {
    return <Text style={styles.title}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.title}>Error: {error}</Text>;
  }
  const onPressFunction = (url: string) => {
    // Handle press event, e.g., navigate to a details page
    // console.log("Pressed item with URL:", url);
    // navigation.navigate('PokemonDetails', { pokemonId: url });
    navigation.navigate('Pokemondetails');


    alert(url);
  };
  return (
    <View>
      <Text style={styles.title}>Let's Catch em all</Text>
      {/* <PokemonList list={pokemonList} /> */}
      <Link href={'/pokemondetails'}> next page</Link >

      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Pressable onPress={() => onPressFunction(item)}>

              <Image
                style={styles.image}
                source={{ uri: item.sprites.front_default }}
                resizeMode="cover"
              />

              {/* <Text>{item.name}</Text> */}
              {/* <Text>{item.sprites.front_default}</Text> */}
            </Pressable>
          </View>
        )}
        numColumns={3}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />

      {/* <Text>{JSON.stringify(pokemonList)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 1
  },
  image: {

    width: 200,
    height: 200,
  },
})