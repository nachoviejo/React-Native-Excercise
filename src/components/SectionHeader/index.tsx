import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  sectionName: string
  colors: {
    color: string,
    background: string
  } 
}

const SectionHeader = ({ sectionName, colors}: Props) => {
  const { color } = colors
  return (
    <View style={styles(color).container}>
      <Text style={styles(color).headerText}>
        {sectionName}
      </Text>
    </View>
  )
}

export default SectionHeader
