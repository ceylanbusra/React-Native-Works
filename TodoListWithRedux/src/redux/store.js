import { createStore } from 'redux'
import rootReducer from './reducer'
const store = createStore(rootReducer)
export default store
//Burası da diğer sayfaların importlandığı provider yapısını tüm projeye entegre etmeyi sağlayan yapı.