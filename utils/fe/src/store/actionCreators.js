import {
  ANALYSIS_FILE_NAME,
  GET_SEGMENTS,
  GET_SECTIONS,
  GET_SYMBOLS,
  GET_RELOCATIONS,
  GET_DATA,
  GET_TEXT,
  GET_RODATA,
  GET_DYNAMIC,
  GET_DYNSTR,
  GET_DYNSYM,
  GET_GOT,
  GET_PLT,
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

export const getData = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/data'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_DATA,
        payload: {
          e_data: res.data.e_data
        }
      })
      return Promise.resolve()
    })
}
export const getText = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/text'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_TEXT,
        payload: {
          text: res.data.text
        }
      })
      return Promise.resolve()
    })
}

export const getRodata = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/rodata'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_RODATA,
        payload: {
          rodata: res.data.rodata
        }
      })
      return Promise.resolve()
    })
}

export const getDynamic = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/dynamic'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_DYNAMIC,
        payload: {
          dynamic: res.data.dynamic
        }
      })
      return Promise.resolve()
    })
}

export const getDynstr = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/dynstr'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_DYNSTR,
        payload: {
          dynstr: res.data.dynstr
        }
      })
      return Promise.resolve()
    })
}
export const getDynsym = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/dynsym'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_DYNSYM,
        payload: {
          dymsym: res.data.dynsym
        }
      })
      return Promise.resolve()
    })
}

export const getGot = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/got'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_GOT,
        payload: {
          got: res.data.got
        }
      })
      return Promise.resolve()
    })
}

export const getPlt = () => dispatch => {
  return axios({
    url: 'http://127.0.0.1:5000/plt'
  })
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_PLT,
        payload: {
          plt: res.data.plt
        }
      })
      return Promise.resolve()
    })
}
