import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "~/utils/constants/colors";
import { fontSizes } from "~/utils/constants/fontSizes";


export const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(10),
    paddingTop: verticalScale(5),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  titleText: {
    textAlign: 'center',
    marginVertical: verticalScale(10),
    fontSize: fontSizes.MEDIUM
  },
  subtitleText: {
    textAlign: 'center',
    marginTop: verticalScale(2),
    marginBottom: verticalScale(20),
    fontSize: fontSizes.EXTRASMALL,
    color: COLORS.greyBorder
  },
  buttonsContainer: {
    marginTop: verticalScale(10),
    marginHorizontal: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteButton: {
    borderWidth: 1,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    borderColor: COLORS.ok.color,
    backgroundColor: COLORS.ok.background
  },
  deleteText: {
    fontSize: fontSizes.MEDIUM,
    color: COLORS.ok.color
  },
  cancelButton: {
    borderWidth: 1,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    borderColor: COLORS.cancel.color,
    backgroundColor: COLORS.cancel.background
  },
  cancelText: {
    fontSize: fontSizes.MEDIUM,
    color: COLORS.cancel.color
  }
})
