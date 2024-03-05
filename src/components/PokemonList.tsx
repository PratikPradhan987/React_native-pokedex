
import { Text, View, StyleSheet, FlatList, Image, Pressable } from "react-native";
// import { Image } from "expo-image";
import axios from "axios";
import { useEffect, useState } from "react";
const url =
    "https://wallpapers.com/images/featured-full/pokemon-pictures-fw1l53kqy2o4e5p1.jpg";



export default function PokemonList({ list }: any) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [imageSource, setImageSource] = useState(null);
    // setImageSource({ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    list.url,
                );
                // console.log("poke", JSON.stringify(response));
                console.log("poke", response.data);
                setPokemonList(response.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);

        };

        fetchData();
    }, [list.url]);
    console.log("list", pokemonList);

    const onPressFunction = (url: string) => {
        // Handle press event, e.g., navigate to a details page
        console.log("Pressed item with URL:", url);
    };
    return (
        <View style={styles.container}>

            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={pokemonList}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Pressable onPress={() => onPressFunction(list.url)}>

                                <Image
                                    style={styles.image}
                                    source={{ uri: item.sprites.front_default }}
                                    resizeMode="cover"
                                />

                                <Text>{item.name}</Text>
                            </Pressable>
                        </View>
                    )}
                    numColumns={5}
                    contentContainerStyle={{ padding: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                />
            )}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {},
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemText: {
        fontSize: 17,
    },
});

