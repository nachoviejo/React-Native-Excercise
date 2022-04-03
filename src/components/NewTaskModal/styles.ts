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
  inputRow: {
    alignItems: 'center', 
    flexDirection: 'row',
  },
  input: {
    marginVertical: verticalScale(5),
    marginHorizontal: scale(20),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    minWidth: verticalScale(150),
    minHeight: verticalScale(20),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.darkGrey
  },
  numericInput: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  buttonsContainer: {
    marginTop: verticalScale(10),
    marginHorizontal: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  createButton: {
    borderWidth: 1,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    borderColor: COLORS.ok.color,
    backgroundColor: COLORS.ok.background
  },
  createText: {
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
