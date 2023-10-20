import React, { FC } from 'react'

interface Props {
  params: {
    id: string
    title: string
  }
}

const DocsPage: FC<Props> = (params) => {
  console.log(params.params.id) // Access params.id
  return (
    <div>
      <h1>DOCS!</h1>
      <ul>
        <li>{params.params.id[0]}</li>
        <li>{params.params.id[1]}</li>
      </ul>
    </div>
  )
}

export default DocsPage
