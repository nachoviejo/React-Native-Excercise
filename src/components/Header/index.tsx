import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { addTask } from '~/service'
import NewTaskModal from '../NewTaskModal'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { TEXTS } from '~/utils/constants/texts'

const Header = () => {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false)

  const onCreateTask = (name: string, description: string, estimate: number) => {
    addTask(name, description, estimate)
  }
  return (
    <View>
      <NewTaskModal 
        enabled={openNewTaskModal} 
        onBackdropPress={() => setOpenNewTaskModal(false)}
        onCreateTask={() => onCreateTask}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
        <Icon name='close-outline' size={45} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>HEADER</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setOpenNewTaskModal(true)}>
          <Icon name='add-outline' size={30} />
          <Text style={styles.iconText}>{TEXTS.HEADER_ADD_TASK}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
