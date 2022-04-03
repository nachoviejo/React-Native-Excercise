
import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionList: {
    paddingTop: verticalScale(5),
    paddingHorizontal: scale(20)
  },
})
