import moment from 'moment'
import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { TEXTS } from '~/utils/constants/texts'
import { timeDifference } from '~/utils/functions'
import { ITask } from '~/utils/interfaces/task'
import { styles } from './styles'

interface Props {
  taskId: number
  taskName: string
  enabled: boolean
  deleteTask: (taskId: number) => void
  onBackdropPress: () => void
}

const DeleteModal = ({ taskId, taskName, enabled, deleteTask, onBackdropPress }: Props) => {

  const handleDelete = () => { 
    deleteTask(taskId)
  }
    return (
      <Modal isVisible={enabled} onBackdropPress={onBackdropPress}>
        <View style={styles.container}>
          <Text style={styles.titleText}>{TEXTS.DELETE_MODAL_TEXT_PART_1}{taskName}{TEXTS.DELETE_MODAL_TEXT_PART_2}</Text>
          <Text style={styles.subtitleText}>{TEXTS.DELETE_MODAL_SUBTITLTE}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onBackdropPress}>
              <Text style={styles.cancelText}>{TEXTS.NEW_TASK_CANCEL}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteText}>{TEXTS.DELETE_MODAL_DELETE}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
}

export default DeleteModal
