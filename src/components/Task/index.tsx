import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { deleteTask, nextStateTask, prevStateTask } from '~/service'
import { STATES } from '~/utils/constants/states'
import { TEXTS } from '~/utils/constants/texts'
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
      <InfoModal task={task} enabled={infoModal} onBackdropPress={() => setInfoModal(false)} />
      <View style={styles(color, background).container}>
        <View style={styles(color, background).titleContainer}>
          <Text style={styles(color, background).textTitle}>{task.name}</Text>
          <TouchableOpacity onPress={() => setInfoModal(true)}>
            <Text>Info</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles(color, background).textDescription}>{task.description}</Text>
        <View style={styles(color, background).estimatedContainer}>
          <Text style={styles(color, background).textEstimated}>{TEXTS.TASK_ESTIMATED}: {task.estimate}hs</Text>
        </View>
        <View style={styles(color, background).controlsContainer}>
          <TouchableOpacity onPress={handleDelete}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <View style={styles(color, background).statesContainers}>
            {task.state > STATES.PLANNED && (
              <TouchableOpacity onPress={handlePrevState}>
                <Text>Prev State</Text>
              </TouchableOpacity>
            )}
            {task.state < STATES.COMPLETED && (
              <TouchableOpacity onPress={handleNextState}>
                <Text>Next State</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Task
