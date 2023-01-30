import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ModalLoginContext {
  open: boolean
  toggleOpen: () => void
}

interface ModalRegisterContext {
  open: boolean
  toggleOpen: () => void
}

export const ModalLoginContext = createContext<ModalLoginContext>({
  open: false,
  toggleOpen: () => {},
})

export const ModalRegisterContext = createContext<ModalRegisterContext>({
  open: false,
  toggleOpen: () => {},
})

export const DialogProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <ModalLoginContext.Provider value={{ open, toggleOpen }}>
      {children}
    </ModalLoginContext.Provider>
  )
}
