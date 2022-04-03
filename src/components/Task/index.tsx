import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { deleteTask, nextStateTask, prevStateTask } from '~/service'
import { COLORS } from '~/utils/constants/colors'
import { STATES } from '~/utils/constants/states'
import { TEXTS } from '~/utils/constants/texts'
import { nextState } from '~/utils/functions'
import { ITask } from '~/utils/interfaces/task'
import InfoModal from '../InfoModal'
import { styles } from './styles'

interface Props {
  task: ITask
  colors: {
    color: string,
    background: string
  }
  stateChange: () => void
}
const Task = ({ task, colors, stateChange }: Props) => {
  const { color, background } = colors
  const [infoModal, setInfoModal] = useState(false)

  const handleDelete = () => {
    deleteTask(task.id)
    stateChange()
  }
  const handleNextState = () => {
    nextStateTask(task.id, task.state)
    stateChange()
  }

  const handlePrevState = () => {
    prevStateTask(task.id, task.state)
    stateChange()
  }

  return (
    <View>
      <InfoModal
        task={task}
        enabled={infoModal}
        onBackdropPress={() => setInfoModal(false)}
        colors={colors}
      />
      <View style={styles(color, background).container}>
        <View style={styles(color, background).titleContainer}>
          <Text style={styles(color, background).textTitle}>{task.name}</Text>
          <TouchableOpacity onPress={() => setInfoModal(true)}>
            <Icon name='information-circle-outline' size={25} color={color} />
          </TouchableOpacity>
        </View>
        <Text style={styles(color, background).textDescription}>{task.description}</Text>
        <View style={styles(color, background).estimatedContainer}>
          <Text style={styles(color, background).textEstimated}>{TEXTS.TASK_ESTIMATED}: {task.estimate}hs</Text>
        </View>
        <View style={styles(color, background).controlsContainer}>
          <TouchableOpacity onPress={handleDelete}>
            <Icon name='trash-outline' size={25} color={color} />
          </TouchableOpacity>
          <View style={styles(color, background).statesContainers}>
            {task.state > STATES.PLANNED && (
              <TouchableOpacity style={styles(color, background).goBackIconContainer} onPress={handlePrevState}>
                <Icon name='arrow-undo-outline' size={25} color={color} />
                <Text style={styles(color, background).iconText}>{TEXTS.PREV_TASK_GO_BACK}</Text>
              </TouchableOpacity>
            )}
            {task.state < STATES.COMPLETED && (
              <TouchableOpacity style={styles(color, background).finishIconContainer} onPress={handleNextState}>
                <Icon name={nextState(task.state).icon} size={25} color={color} />
                <Text style={styles(color, background).iconText}>{nextState(task.state).text}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Task
