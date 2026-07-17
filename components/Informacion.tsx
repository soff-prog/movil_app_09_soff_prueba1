import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Informacion(props: any) {

    let pais = props.datos

    return (
        <TouchableOpacity
            onPress={() =>
                Alert.alert(
                    pais.pais,
                    "Capital: " + pais.capital +
                    "\nContinente: " + pais.continente
                )
            }
        >

            <Text style={styles.txt}>
                {pais.pais}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        padding: 10,
    }
})