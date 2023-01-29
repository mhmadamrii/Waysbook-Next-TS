import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface DialogContext {
  open: boolean
  toggleOpen: () => void
}

export const DialogContext = createContext<DialogContext>({
  open: false,
  toggleOpen: () => {},
})

export const DialogProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <DialogContext.Provider value={{ open, toggleOpen }}>
      {children}
    </DialogContext.Provider>
  )
}
