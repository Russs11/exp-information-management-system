import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
  ref: any
  isShow: boolean
  setisShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialsVisible: boolean): TypeOut => {
  const [isShow, setisShow] = useState(initialsVisible)
  const ref = useRef<HTMLElement>(null)

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  })
  return { ref, isShow, setisShow }
}
