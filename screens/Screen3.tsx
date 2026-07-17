import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, update } from 'firebase/database'
import { db } from '../firebase/Config'
import { estiloGlobal } from '../styles/EstiloGlobal'

export default function Screen3() {

  const [codigo, setcodigo] = useState(0)
  const [pais, setpais] = useState("")
  const [capital, setcapital] = useState("")
  const [continente, setcontinente] = useState("")

  function editarPais() {

    update(ref(db, 'paises/' + codigo), {
      pais: pais,
      capital: capital,
      continente: continente
    })

    Alert.alert(
      "Registro actualizado",
      "El país se editó correctamente."
    )

  }

  function eliminarPais() {

    Alert.alert("Confirmación","¿Desea eliminar este país?",[
        {
          text: "Eliminar",
          onPress: () => remove(ref(db, 'paises/' + codigo))
        },
        {
          text: "Cancelar"
        }
      ]
    )

  }

  return (
    <View style={estiloGlobal.container}>
    
          <Text style={estiloGlobal.tituloP}>
        Editar / Eliminar País
      </Text>

      <TextInput
        placeholder='Ingrese Código'
        style={estiloGlobal.input}
        value={codigo.toString()}
        onChangeText={(texto)=> setcodigo(+texto)}
      />

      <TextInput
        placeholder='Ingrese País'
        style={estiloGlobal.input}
        value={pais}
        onChangeText={setpais}
      />

      <TextInput
        placeholder='Ingrese Capital'
        style={estiloGlobal.input}
        value={capital}
        onChangeText={setcapital}
      />

      <TextInput
        placeholder='Ingrese Continente'
        style={estiloGlobal.input}
        value={continente}
        onChangeText={setcontinente}
      />

      <Button
        title='Editar'
        onPress={editarPais}
      />

      <Button
        title='Eliminar'
        color='red'
        onPress={eliminarPais}
      />

    </View>
  )
}

const styles = StyleSheet.create({})