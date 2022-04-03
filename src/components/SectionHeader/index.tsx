import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  sectionName: string
  dataLength: number
  colors: {
    color: string,
    background: string
  } 
}

const SectionHeader = ({ sectionName, dataLength, colors}: Props) => {
  const { color } = colors
  return (
    <View>
      <View style={styles(color).container}>
        <Text style={styles(color).headerText}>
          {sectionName}
        </Text>
      </View>
        {dataLength === 0 &&
          <View style={styles(color).emptyText}>
            <Text>No task in this state</Text>
          </View>
        }
    </View>
  )
}

export default SectionHeader
