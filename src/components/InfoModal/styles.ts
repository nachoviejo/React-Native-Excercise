import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "~/utils/constants/colors";
import { fontSizes } from "~/utils/constants/fontSizes";


export const styles = (color: string, background: string) => 
  StyleSheet.create({
    container: {
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(20),
      paddingHorizontal: scale(15),
      backgroundColor: background,
      borderRadius: 10,
      borderColor: color,
      borderWidth: 2
    },
    titleContainer: {
      alignItems: 'center',
      marginVertical: verticalScale(5)
    },
    statesTitleContainer: {
      alignItems: 'center',
      marginVertical: verticalScale(10)
    },
    textTitle: {
      color: color,
      fontSize: fontSizes.EXTRAMEDIUM
    },
    stateTitleText: {
      color: color,
      marginVertical: verticalScale(7.5),
      fontSize: fontSizes.MEDIUM
    },
    stateText: {
      color: color,
      marginLeft: scale(10),
      marginVertical: verticalScale(1),
      fontSize: fontSizes.EXTRASMALL
    }
  })
