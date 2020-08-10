import axios from 'axios'
import {getIP, getUserData, generateUrl, getTime} from './commonfunctions'

// this function is called after all the form input values
// are validated. This function is called to store the message
// to the firebase
export async function saveMessageToFirebase (values) {
  let result = false;
  let message = {
    title: values[2] === '' ? `Just sayin' hi!` : values[2],
    name: values[0],
    email: values[1],
    message: values[3],
    time: getTime('timeOfVisit')
  }
  
  let data = {
    message: message,
    userIP: await getIP(),
    userData: await getUserData()
  }
  
  let url = generateUrl('messages')

  await axios.post(`${url}.json`, data)
    .then(res =>{
      if(res) {
        if(res.status === 200) {
          result= true
        }
      }
    })
    .catch(err => {
      if (err) {
        console.log(err)
      }
      result = false
    })
  return result
}