import { ANALYSIS_FILE_NAME } from './actionTypes'
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
          segments: res.data.segments,
          sections: res.data.sections,
        }
      })
      return Promise.resolve()
    })
}


