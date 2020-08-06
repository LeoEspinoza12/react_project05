import {UAParser} from 'ua-parser-js'
import axios from 'axios'

// get sessionStorage
// export const sessionStore = JSON.parse(sessionStore.getItem('websession'))
export function sessionStore () {
  let session = window.sessionStorage.websession
  if(session === undefined){
    return false
  } else {
    return JSON.parse(session)
  }
}

// firebase url
const firebaseUrl = 'https://aimanadlawansite.firebaseio.com'



// function to generate firebase url
export function generateUrl(urlDirection) {
  const d = getTime('url')
  let url = `${firebaseUrl}/${urlDirection}/${d.y}/${d.m}/${d.dy}_${d.de}`
  return url
}



// function to get user data
export const getUserData = () => {
  let parser = new UAParser()
  return parser.getResult()
}



// get user device data
export const getIP = async () => {
  let userIp

  await axios.get('https://ipapi.co/json/')
    .then(res => {
      if (res.status === 200) {
        if (res.data) {
          let data = res.data
          userIp = {
            cap: data.country_capital,
            city: data.city,
            country: data.country_name,
            ip: data.ip,
            lat: data.latitude,
            long: data.longitude,
            timeZ: data.timezone,
            region: data.region,
            postC: data.postal,
            internet: data.org,
          }
        }
      }
    })
    .catch(err => {
      if (err) {
        userIp = {
          blocked: 'User blocked this data.'
        }
      }
    })
  return await userIp
}



// check if the session has expired
export function checkIfExp(time) {
  let now = getTime('now')
  let runTime = Math.floor(((now - time) / 1000) / 60)
  if (runTime >= 60) {
    return true
  } else {
    return false
  }
}



// function to get time
export const getTime = (url) => {
  const date = new Date()
  let d = date.getDate()
  let month = date.getMonth()

  // get time for url structure query
  if (url === 'url') {
    return {
      y: date.getFullYear(),
      m: `${n(month+1)}_${mn[date.getMonth()]}`,
      dy: n(d),
      de: dt[date.getDay()],
    }
  } else if (url === 'timeOfVisit') {
    // get time for the time of visit
    return {
      time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
    }
  } else if (url === 'now') {
    // get time for the time of visit
    return date.getTime()
  }
}



// filter number if data is single digit
const n = (d) => {
  return d < 10 ? `0${d}` : d
}



// set the month to the exact number index of the array
const mn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// set the day to the exact number index of the array
const dt = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']



let routes = [
   'home', 'about', 'projects', 'contacts', 'privacy', 'credentials', 'projects/projects/music-app', 'projects/reservation-app', 'projects/electric-bill', 'projects/music-player3', 'projects/music-player4', 'projects/music-player5']

// this function will generate a return the current route
// for the state
export const checkRoute = (route) => {
   let r = route.slice(1, 50)
   let url = r === '' ? 'home' : r
   let b;
   let a = routes.filter(route => {
           return route === url
         })
   
   if(a[0] === undefined) {
      b = 'notFound'
   } else {
      b = a[0]
   }
   
   return b
}
