import React, { memo } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Screen from '~/Screen'

const App = memo(() => {

  return (
    <SafeAreaProvider>
      <Screen />
    </SafeAreaProvider>
  )
})

export default App