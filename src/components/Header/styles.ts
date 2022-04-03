
import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { COLORS } from '~/utils/constants/colors'
import { fontSizes } from '~/utils/constants/fontSizes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#282832',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.greyBorder,
    borderBottomWidth: 1
  },
  headerTitleContainer: {
    flex: 1, 
    alignItems: 'center'
  },
  headerText: {
    fontSize: fontSizes.EXTRAMEDIUM
  },
  iconContainer: {
    alignItems: 'center'
  },
  iconText: {
    fontSize: fontSizes.SMALL
  }
})
