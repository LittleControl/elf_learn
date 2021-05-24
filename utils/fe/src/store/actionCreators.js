import {
  ANALYSIS_FILE_NAME,
  GET_SEGMENTS,
  GET_SECTIONS,
  GET_SYMBOLS,
  GET_RELOCATIONS,
} from './actionTypes'
import axios from 'axios'

export const postFileName = value => dispatch => {
  return axios({
    method: 'post',
    url: 'http://127.0.0.1:5000/analysis',
    data: {
      file_name: value
    }
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: ANALYSIS_FILE_NAME,
        payload: {
          file: value,
          header: res.data.header,
        }
      })
      return Promise.resolve()
    })
}

export const getSegments = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/segments'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_SEGMENTS,
        payload: {
          segments: res.data.segments
        }
      })
      return Promise.resolve()
    })
}

export const getSections = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/sections'
  })
    .then(res => {
      console.log(res)
      const sh_strtab = res.data.sections[res.data.sections.length - 1].sh_content
      dispatch({
        type: GET_SECTIONS,
        payload: {
          sections: res.data.sections,
          sh_strtab,
        }
      })
      return Promise.resolve()
    })
}

export const getSymbols = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/symbols'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_SYMBOLS,
        payload: {
          symbols: res.data.symbols
        }
      })
      return Promise.resolve()
    })
}

export const getRelocations = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/relocations'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_RELOCATIONS,
        payload: {
          relocations: res.data.relocations
        }
      })
      return Promise.resolve()
    })
}
