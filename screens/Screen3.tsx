import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Screen3() {

  const [codigo, setcodigo] = useState(0)
  const [pais, setpais] = useState("")
  const [capital, setcapital] = useState("")
  const [continente, setcontinente] = useState("")

  return (
    <View>
      <Text>Screen3</Text>
    </View>
  )
}

const styles = StyleSheet.create({})