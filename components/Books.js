import React from 'react'
import {StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput,} from 'react-native'

const Books = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.h2}>Harry Potter</Text>
                <View style={{alignItems:"center",padding:30}}>
                    <Image resizeMode="stretch" style={{width:150,height:200}} source={require("../src/book1.jpeg")}/>
                    <Text style={styles.h1}>Author</Text>
                    <Text style={styles.h3}>Markus Zusak</Text>
                    <Text style={styles.h1}>Description</Text>
                    <Text style={styles.h3}>It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.</Text>
                    <Text style={styles.h1}>Rating</Text>
                    <Text style={styles.rating}>★★★★★</Text>
                    <Text style={styles.h1}>Price</Text>
                    <Text style={styles.h2}>$ 10</Text>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:"5%",
        backgroundColor: '#000510',
        justifyContent:'center',
        alignItems: 'center',
    },
    h2: {
        color:"white",
        fontSize: 30,
        fontWeight: "bold",
        padding:1,
        textAlign: 'center',
    },
    h1: {
        color:"#960bad",
        fontSize: 25,
        fontWeight: "bold",
        paddingTop:20,
        textAlign: 'center',
    },
    h3: {
        color:"white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    },
    rating: {
        color:"yellow",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    }
});


export default Books