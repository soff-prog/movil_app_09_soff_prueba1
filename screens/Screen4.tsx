import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Screen4() {

  const [datos, setdatos] = useState([])

  useEffect(() => {
    cargarDatos()
  }, [])
  
  async function cargarDatos(){
    const resp = await fetch('https://jritsqmet.github.io/web-api/ciudades2.json');
        const json = await resp.json();
        setdatos(json.ciudades);
  }

  type Ciudades={
      nombre:string
      descripcion: string
      informacion:{
        imagen: string
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>API LISTA</Text>
      <FlatList
        data={datos}
        renderItem={({item}: {item:Ciudades})=>(
        <View style={styles.card}>
          <Image
            source={{uri: item.informacion.imagen}}
            style={styles.imagen}
          />
          <Text>
            {item.nombre}
          </Text>
          <Text>
            {item.descripcion}
          </Text>
        </View>
          
        )}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 18,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 6,
  },

  imagen: {
    width: 170,
    height: 170,
    borderRadius: 15,
    marginBottom: 12,
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 8,
    textAlign: 'center',
  },

  descripcion: {
    fontSize: 15,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 22,
  },
})