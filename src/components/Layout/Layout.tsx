import React from 'react'

interface ILayout {
  children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <body className='container'>
      {children}
    </body>
  )
}
