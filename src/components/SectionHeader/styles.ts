import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '~/utils/constants/colors'
import { fontSizes } from '~/utils/constants/fontSizes'

export const styles = (color: string) =>
  StyleSheet.create({
    container: {
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(5),
      backgroundColor: COLORS.white
    },
    headerText: {
      textAlign: 'center',
      fontSize: fontSizes.LARGE,
      fontWeight: '200',
      color: color
    }
  })
