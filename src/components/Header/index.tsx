import React, { useState } from 'react'
import { View, Text, TouchableOpacity, BackHandler, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import RNExitApp from 'react-native-exit-app';
import { addTask } from '~/service'
import { styles } from './styles'
import NewTaskModal from '../NewTaskModal'
import { TEXTS } from '~/utils/constants/texts'

interface Props {
  refresh: () => void
}
const Header = ({ refresh }: Props) => {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false)
  
  const handleExitApp = () => {
    Platform.OS === 'ios' ? RNExitApp.exitApp() : BackHandler.exitApp()
  }
  const onCreateTask = (name: string, description: string, estimate: number) => {
    addTask(name, description, estimate)
    setOpenNewTaskModal(false)
    refresh()
  }
  return (
    <View>
      <NewTaskModal
        enabled={openNewTaskModal} 
        onBackdropPress={() => setOpenNewTaskModal(false)}
        onCreateTask={onCreateTask}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleExitApp}>
        <Icon name='close-outline' size={45} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>{TEXTS.HEADER_TITLE}</Text>
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
function useFocusEffect(arg0: any) {
  throw new Error('Function not implemented.')
}

