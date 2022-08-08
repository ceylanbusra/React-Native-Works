
//actionlar. Yani function adı gibi düşünülebilir. Globalde tutulan state için yapılacak işlem adlarıdır.

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

//Bunlar da elimizdeki actionları kullandığımız kısım. ' tane action olduğu için 2 tane func belirledik. 
//Bu funcların içerisine de type ve payload verdik. Type dediği hangi actionı kullandığımız. Yani yapılacak işlemin tipi,adı diyebiliriz.
//payload ise döndürdüğü aldığı değerdir. O type ile işleme sokulacak değer diyebiliriz.

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
  })
  export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id
  })

  //Globalde tutulan stateler
  const initialState = {
    itemList: []
  }

//Burası reduxun en önemli kısmı. Kullanılacak actionların o faaliyeti nasıl yapacağı gibi işlemleri bu kısım halleder.
//o fonksiyonun içinin dolduğu görevini yaptığı alan diyebiliriz.
//switch case yapısıyla oluşuyor. 
// gelen actionun tipine göre hangi case içine girip işlem yapacağını seçer.

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          itemList: state.itemList.concat({
            id: Math.random(),
            name: action.payload
          })
        }

        case REMOVE_ITEM:
            return {
              ...state,
              itemList: state.itemList.filter(item => item.id !== action.payload)
            }

      default:
        return state
    }
  }
  export default rootReducer