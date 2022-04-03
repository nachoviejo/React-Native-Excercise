import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '~/utils/constants/colors'
import { fontSizes } from '~/utils/constants/fontSizes'

export const styles = (color: string) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: scale(5),
      marginHorizontal: scale(85),
      marginTop: verticalScale(5),
      marginBottom: verticalScale(10),
      borderWidth: 2,
      borderColor: color,
      borderRadius: 10,
      backgroundColor: COLORS.white
    },
    headerText: {
      textAlign: 'center',
      fontSize: fontSizes.LARGE,
      fontWeight: '200',
      color: color
    },
    emptyText: {
      alignItems: 'center',
      marginTop: verticalScale(5),
      marginBottom: verticalScale(10)
    }
  })
