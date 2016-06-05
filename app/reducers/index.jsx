import { combineReducers } from 'redux'
import { ADD_TODO ,COMPLETE_TODO,REPLACE_TODO} from '../actions/index.jsx'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
   case REPLACE_TODO:
      return {
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  routing: routerReducer
})

export default todoApp
