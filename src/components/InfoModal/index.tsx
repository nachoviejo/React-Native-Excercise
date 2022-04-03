import moment from 'moment'
import React, { memo } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'
import { TEXTS } from '~/utils/constants/texts'
import { timeDifference } from '~/utils/functions'
import { ITask } from '~/utils/interfaces/task'
import { styles } from './styles'

interface Props {
  task: ITask
  enabled: boolean
  colors: {
    color: string,
    background: string
  }
  onBackdropPress: () => void
}

const InfoModal = ({ task, enabled, colors, onBackdropPress }: Props) => {
  const { color, background } = colors
  const { name, creationTimeStamp, inProgressTimeStamp, completedTimeStamp } = task
    return (
      <Modal isVisible={enabled} onBackdropPress={onBackdropPress}>
        <View style={styles(color, background).container}>
          <View style={styles(color, background).titleContainer} >
            <Text style={styles(color, background).textTitle}>{name}</Text>
          </View>
          <View>
            <Text style={styles(color, background).stateTitleText} >{TEXTS.INFO_MODAL_STATES_TIMES}:</Text>
            <Text style={styles(color, background).stateText} >- {TEXTS.SCREEN_PLANNED}: {
              !!inProgressTimeStamp ? 
                timeDifference(creationTimeStamp, inProgressTimeStamp)
              : 
                timeDifference(creationTimeStamp, moment())}
            </Text>
            {!!inProgressTimeStamp && (
            <Text style={styles(color, background).stateText} >- {TEXTS.SCREEN_IN_PROGRESS}: {
              !!completedTimeStamp ? 
                timeDifference(inProgressTimeStamp, completedTimeStamp)
              : 
                timeDifference(inProgressTimeStamp, moment())}
            </Text>
            )}
            {!!completedTimeStamp && (
              <Text style={styles(color, background).stateText} >- {TEXTS.SCREEN_COMPLETED}: {timeDifference(completedTimeStamp, moment())}
            </Text>
            )}
          </View>
        </View>
      </Modal>
    )
}

export default InfoModal
