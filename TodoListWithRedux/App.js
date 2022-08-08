import React from 'react'
import { Provider as StateProvider } from 'react-redux'
import store from './src/redux/store'
import MainStackNavigator from './src/navigation/AppNavigator'
export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}
//Burası Tüm projenin başladığı ana alandır. 
//Eğer ki burayı provider ile sarmalarsak bizim globalde tuttuğumuz tüm yapı
// yani stateler oluşturduğumuz reducerlar vs vs tüm sistemde geçerli olmuş olacaktır.