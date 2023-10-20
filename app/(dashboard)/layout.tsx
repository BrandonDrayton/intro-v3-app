import React, { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
