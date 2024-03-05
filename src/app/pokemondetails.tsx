import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Pokemondetails() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cp}>CP</Text>
                <Text style={styles.cpValue}>375</Text>
                <Image style={styles.pokemonImage} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png' }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>Slowpoke</Text>
                <View style={styles.hpBar}></View>
                <Text>hp 86/86</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text>water/psychic</Text>
                    <Text style={styles.label}>type</Text>
                </View>
                <View style={styles.statItem}>
                    <Text>28.2 kg</Text>
                    <Text style={styles.label}>weight</Text>
                </View>
                <View style={styles.statItem}>
                    <Text>1.2 m</Text>
                    <Text style={styles.label}>height</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text>989</Text>
                    <Text style={styles.label}>stardust</Text>
                </View>
                <View style={styles.statItem}>
                    <Text>23</Text>
                    <Text style={styles.label}>slowpoke candy</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Text>power up</Text>
                <Text>1300</Text>
                <Text>2</Text>
            </View>
            <View style={styles.actionContainer}>
                <Text>evolve</Text>
                <Text>50</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#D1D5DB',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    cp: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cpValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    pokemonImage: {
        width: 120,
        height: 120,
        marginTop: 10,
    },
    details: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    hpBar: {
        height: 5,
        width: 70,
        backgroundColor: 'green',
        marginVertical: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    statItem: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        color: '#6B7280',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 10,
        marginVertical: 5,
    },
});
