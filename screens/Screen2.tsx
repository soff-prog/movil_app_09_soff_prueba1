import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase/Config'
import { estiloGlobal } from '../styles/EstiloGlobal'
import Informacion from '../components/Informacion'

export default function Screen2() {

  const [paises, setpaises] = useState([])
  const [codigo, setcodigo] = useState("")
  const [pais, setpais] = useState({})

  function leerPaises() {
    const starCountRef = ref(db, 'paises/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let tempArray: any = Object.keys(data).map((codigo) => ({
        codigo, ...data[codigo]
      }))
      setpaises(tempArray)
    });
  }

  function leerPais() {
    const starCountRef = ref(db, 'paises/' + codigo);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setpais(data)
    });
  }

  useEffect(() => {
    leerPais();
  }, [codigo]);


  return (
    <View>

      <Text>Leer País</Text>

      <TextInput
        placeholder='Ingrese Código'
        style={estiloGlobal.input}
        onChangeText={setcodigo}
      />

      {
        pais == null
          ? <ActivityIndicator size={50} />
          : <Text style={{ fontSize: 25 }}> País: {pais.pais}</Text>
      }

      <View/>

      <FlatList
        data={paises}
        renderItem={({ item }) =>
          <Informacion datos={item} />
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({})