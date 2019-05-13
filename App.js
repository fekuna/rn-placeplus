import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/components/screens/Auth/Auth'
import FindPlaceScreen from './src/components/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/components/screens/SharePlace/SharePlace'
import PlaceDetail from './src/components/screens/PlaceDetail/PlaceDetail'

import configureStore from './src/store/configureStore'

const store = configureStore()

// Register Screens
Navigation.registerComponent(
  'PlacePlus.AuthScreen',
  () => AuthScreen,
  store,
  Provider
)
Navigation.registerComponent(
  'PlacePlus.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
)
Navigation.registerComponent(
  'PlacePlus.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
)
Navigation.registerComponent(
  'PlacePlus.PlaceDetail',
  () => PlaceDetail,
  store,
  Provider
)

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'PlacePlus.AuthScreen',
    title: 'Login'
  }
})
