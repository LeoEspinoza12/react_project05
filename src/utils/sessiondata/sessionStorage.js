import {sessionStore, getUserData, getIP, generateUrl, getTime, checkIfExp} from './commonfunctions'
import {checkRoute} from '../common/common'
import axios from 'axios'

// function to check page session. return boolean
export async function checkforsession () {
  
  const session = sessionStore()

  let route = checkRoute(window.location.pathname)
  let hasSession;
  
  if(session) {
    let isExp = checkIfExp(session.timeStamp)
    if(isExp){
      hasSession = false
      updateSession(session._id, route, true)
    } else {
      hasSession = true
      updateSession(session._id, route, false)
    }
  } else {
    hasSession = false
    let _id = await saveDataToFirebase(route)
    setSession(_id)
  }

  return hasSession
}

// functionto update the session
async function updateSession(id, route, exp) {
  let url = generateUrl('visitor')
  let routeUrl = `${url}/${id}/routesVisited/routesSeen.json`

  let routes = await getRoutesVisited(routeUrl)
  routes.push(route)

  axios.put(`${url}/${id}/routesVisited/routesSeen.json`, routes)
    .then(res => {
      if (res.data) {
        if (exp) setSession(id)
      }
    })
    .catch(err => {
      if (err) {
        new Promise.reject(err)
        if (exp) setSession(id)
      }
    })
}

// function to collect the visited routes from firebase
async function getRoutesVisited(routeUrl) {
  let routes = []
  await axios.get(routeUrl)
    .then(res => {
      if (res.data) {
        routes = res.data
      }
    })
    .catch(err => {
      if (err) {
        routes = ['there was an error']
      }
    })
  return await routes
}


async function saveDataToFirebase(route) {
  let _id = false
  let userIp = await getIP()
  let user = getUserData()
  let time = getTime('timeOfVisit')
  let routesVisited = {
    initial: route,
    routesSeen: [route]
  }

  // generate visited url
  let url = generateUrl('visitor')

  await axios.post(`${url}.json`, {
      userIp,
      user,
      time,
      routesVisited
    })
    .then(res => {
      if (res.data)
        _id = res.data.name
    })
    .catch(err => {
      if (err) new Promise.reject(err)
    })
  return await _id
}

export function setSession(id) {
  let data = {
    _isVisited: true,
    _id: id,
    timeStamp: getTime('now'),
  }
  sessionStorage.setItem('websession', JSON.stringify(data))
}
