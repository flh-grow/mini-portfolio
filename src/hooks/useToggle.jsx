import {useState} from 'react'

export function useToggle() {
  const [isOn, setIsOn] = useState(false)


  function toggle(){
    setIsOn(!isOn)
  }


  return {isOn, toggle }
}