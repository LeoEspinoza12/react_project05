import home from './pagedata/home.json'
import about from './pagedata/about.json'
import projects from './pagedata/projects.json'
import contacts from './pagedata/contact.json'
import credentials from './pagedata/credentials.json'
import privacy from './pagedata/privacy.json'
import notfound from './pagedata/notFound.json'
import listofprojects from './pagedata/listOfProjects.json'
import socials from './pagedata/socials.json'

const s = (lists) => {
  return ( 
    lists.listofprojects.filter((list, i)=>{
      return i < 4
    })
  )
}

// this function will return the json file whenever 
// the route string matches its value.
// this function is called every age initial get props.
export const findData = (data) => {
  switch(data) {
    case ('home'): return {...home, listofprojects: s(listofprojects), ...socials};
    case ('about'): return {...about, ...socials}
    case ('projects'): return {...projects, ...listofprojects, ...socials}
    case ('contacts'): return {...contacts, ...socials}
    case ('privacy'): return {...privacy, ...socials}
    case ('notfound'): return {...notfound, ...socials}
    case ('credentials'): return {...credentials, ...socials}
    case ('projectlists'): return {...listofprojects, ...socials}
    case ('socials'): return socials
    default: return null
  }
}
