import moment from 'moment'
import React, { memo } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'
import { timeDifference } from '~/utils/functions'
import { ITask } from '~/utils/interfaces/task'
import { styles } from './styles'

interface Props {
  task: ITask
  enabled: boolean
  onBackdropPress: () => void
}

const InfoModal = ({ task, enabled, onBackdropPress }: Props) => {
  const { name, creationTimeStamp, inProgressTimeStamp, completedTimeStamp } = task
    return (
      <Modal isVisible={enabled} onBackdropPress={onBackdropPress}>
        <View style={styles.container}>
          <Text>{name}</Text>
          <View>
            <Text>States times</Text>
            <Text>Planned: {
              !!inProgressTimeStamp ? 
                timeDifference(creationTimeStamp, inProgressTimeStamp)
              : 
                timeDifference(creationTimeStamp, moment())}
            </Text>
            {!!inProgressTimeStamp && (
            <Text>In Progress: {
              !!completedTimeStamp ? 
                timeDifference(inProgressTimeStamp, completedTimeStamp)
              : 
                timeDifference(inProgressTimeStamp, moment())}
            </Text>
            )}
            {!!completedTimeStamp && (
              <Text>Completed: {timeDifference(completedTimeStamp, moment())}
            </Text>
            )}
          </View>
        </View>
      </Modal>
    )
}

export default InfoModal
