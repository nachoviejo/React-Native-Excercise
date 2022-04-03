/** @format */

import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { COLORS } from '~/utils/constants/colors'
import { fontSizes } from '~/utils/constants/fontSizes'

export const styles = (color: string, background: string) => 
  StyleSheet.create({
    container: {
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(10),
      borderColor: color,
      borderWidth: 1,
      borderRadius: 10,
      shadowColor: COLORS.darkGrey,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: verticalScale(10),
      backgroundColor: background
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textTitle: {
      color: color,
      fontSize: fontSizes.MEDIUM,
      fontWeight: '400'
    },
    textDescription: {
      color: color,
      fontSize: fontSizes.EXTRASMALL,
      fontWeight: '300'
    },
    textEstimated: {
      color: color,
      fontSize: fontSizes.EXTRASMALL,
      fontWeight: '300'
    },
    estimatedContainer: {
      marginTop: verticalScale(5)
    },
    controlsContainer: {
      marginTop: verticalScale(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    statesContainers: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    goBackIconContainer: {
      alignItems: 'center',
      marginRight: scale(5)
    },
    finishIconContainer:{
      alignItems: 'center',
      marginLeft: scale(5)
    },
    iconText: {
      color: color
    }
  })

