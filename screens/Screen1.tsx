import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../firebase/Config'
import { estiloGlobal } from '../styles/EstiloGlobal'

export default function Screen1() {

  const [codigo, setcodigo] = useState(0)
  const [pais, setpais] = useState("")
  const [capital, setcapital] = useState("")
  const [continente, setcontinente] = useState("")

  function gurdarPais(){
    set(ref(db, 'paises/' + codigo), {
            pais: pais,
            capital: capital,
            continente: continente
        });
        Alert.alert("Registro exitoso", "El país se agregó correctamente.");

  }
  

  return (
    <View style={estiloGlobal.container}>

      <Text style={estiloGlobal.tituloP}>
        Registro de Países
      </Text>

      <TextInput
        placeholder="Código del país"
        style={estiloGlobal.input}
        value={codigo.toString()}
        onChangeText={(texto)=> setcodigo(+texto)}
      />

      <TextInput
        placeholder="Nombre del país"
        style={estiloGlobal.input}
        value={pais}
        onChangeText={setpais}
      />

      <TextInput
        placeholder="Capital"
        style={estiloGlobal.input}
        value={capital}
        onChangeText={setcapital}
      />

      <TextInput
        placeholder="Continente"
        style={estiloGlobal.input}
        value={continente}
        onChangeText={setcontinente}
      />

      <Button
        title="Guardar País"
        onPress={()=>gurdarPais() }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  
  
})