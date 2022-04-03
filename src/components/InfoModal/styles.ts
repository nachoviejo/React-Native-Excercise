import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { COLORS } from "~/utils/constants/colors";


export const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.white,
    borderRadius: 10,
  }
})
