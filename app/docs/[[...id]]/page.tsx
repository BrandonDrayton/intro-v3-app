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
      {params.params.id ? <h2>{params.params.id}</h2> : null}
    </div>
  )
}

export default DocsPage
