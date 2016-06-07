
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REPLACE_TODO = 'REPLACE_TODO';
export const WARN_TODO = 'WARN_TODO';
export const CLEAN_TODO = 'CLEAN_TODO';


export function addTodo(text){
  return { type:ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function replaceTodo(text) {
  return { type: REPLACE_TODO, text }
}

export function warnText(err) {
  return { type: WARN_TODO, err }
}

export function cleanWarn(err) {
  return { type: CLEAN_TODO, err }
}
