import React, { FC } from 'react'

interface Props {
  params: {
    id: string
    title: string
  }
}

const DocsIdPage: FC<Props> = ({ params }) => {
  return (
    <>
      <h1>{params.title} </h1>
      <div>docs {params.id}</div>
    </>
  )
}

export default DocsIdPage
