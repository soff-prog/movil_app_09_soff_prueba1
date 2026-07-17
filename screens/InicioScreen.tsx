import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function InicioScreen({navigation}:any) {
  return (
    <ImageBackground 
      source={require("../assets/imagen.jpg")}
      style={styles.fondo}
      resizeMode='cover'
    >
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sofia Paz y Miño</Text>
      <Button 
        title='Ingresar'
        onPress={()=>navigation.navigate("BottomTabs")}
      />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
  fontSize: 40,
  color: '#688eb9',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 70,
  marginBottom: 30,
},
contenedor: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 60,
}
})