import { createContext } from "react"

export const MyInfo = createContext()

export function UserProvider({children}) {

  const user = {
     name:'Sasha', 
     email: 'aflatcher47@gmail.com',
    location: 'Erfurt, Germany',
    github: 'https://gist.github.com/flh-grow',
  }

  return(
    <MyInfo.Provider value={user}>
      {children}
    </MyInfo.Provider>

  )
}
