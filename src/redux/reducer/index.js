import { combineReducers } from 'redux'

import items from './items'
import carts from './carts'
import reviews from './reviews'
import categories from './categories'
import login from './login'
import cartshistory from './cartshistory'
import img from './img'

const appReducer = combineReducers({
  items,
  carts,
  reviews,
  categories,
  login,
  cartshistory,
  img
})

export default appReducer
