import { ANALYSIS_FILE_NAME } from './actionTypes'


const defaultState = {
  file: '',
  header: 'header',
  segments: 'segments',
  sections: 'sections',
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ANALYSIS_FILE_NAME:
      return {
        ...state,
        ...payload
      }
    default:
      console.log('default')
  }
  return state
}