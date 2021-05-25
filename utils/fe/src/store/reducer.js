// import {
//   ANALYSIS_FILE_NAME,
//   GET_SEGMENTS,
//   GET_SECTIONS,
// } from './actionTypes'


const defaultState = {
  file: '',
  header: [],
  segments: [],
  sections: [],
  sh_strtab: [],
  symbols: [],
  relocations: [],
  text: {},
  e_data: {},
  rodata: {},
  dynamic: {},
  dynstr: {},
  dynsym: {},
  got: {},
  plt: {},
}

export default (state = defaultState, action) => {
  // const { type, payload } = action
  const { payload } = action
  return {
    ...state,
    ...payload
  }
  // switch (type) {
  //   case ANALYSIS_FILE_NAME:
  //     return {
  //       ...state,
  //       ...payload
  //     }
  //   case GET_SEGMENTS:
  //     return {
  //       ...state,
  //       ...payload
  //     }
  //   default:
  //     console.log('default')
  // }
  // return state
}