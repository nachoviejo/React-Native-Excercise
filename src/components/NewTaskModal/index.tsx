import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import NumericInput from 'react-native-numeric-input'
import { TEXTS } from '~/utils/constants/texts'
import { styles } from './styles'

interface Props {
  enabled: boolean
  onBackdropPress: () => void
  onCreateTask: (name: string, description: string, estimate: number) => void
}

const NewTaskModal = ({ enabled, onBackdropPress, onCreateTask }: Props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [estimate, setEstimate] = useState(0)

  const handleOnCreateTask = () => {
    if (!!name && !!description && !!estimate) {
      onCreateTask(name, description, estimate)
    }
  }

  return (
    <Modal isVisible={enabled} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{TEXTS.NEW_TASK_TITLE}</Text>
          <TextInput 
            placeholder={TEXTS.NEW_TASK_NAME}
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
          <TextInput 
            placeholder={TEXTS.NEW_TASK_DESCPRIPTION}
            style={styles.input}
            multiline
            onChangeText={setDescription}
            value={description}
          />
          <View style={styles.numericInput}>
            <Text>{TEXTS.NEW_TASK_ESTIMATE}</Text>
            <NumericInput type='plus-minus' onChange={value => setEstimate(value)} />
          </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onBackdropPress}>
            <Text style={styles.cancelText}>{TEXTS.NEW_TASK_CANCEL}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton} onPress={handleOnCreateTask}>
            <Text style={styles.createText}>{TEXTS.NEW_TASK_CREATE}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default NewTaskModal
