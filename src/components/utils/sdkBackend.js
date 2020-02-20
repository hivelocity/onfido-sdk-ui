import { performHttpReq } from './http'
import {trackException} from '../../Tracker'

const handleError = ({status, response}, callback) => {
  trackException(`${status} - ${response}`)
  callback({status, response})
}

export const postToBackend = (payload, url, token, onSuccess, errorCallback) => {
  const endpoint = `${url}/verification/10371`
  const options = {
    payload, endpoint, token,
    contentType: 'application/json'
  }
  performHttpReq(options, onSuccess, (response) => handleError(response, errorCallback))
}
