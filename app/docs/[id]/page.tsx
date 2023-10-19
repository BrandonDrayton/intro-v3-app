import React, { FC } from 'react'

interface Props {
  params: {
    id: string
  }
}

const DocsIdPage: FC<Props> = ({ params }) => {
  return <div>docs {params.id}</div>
}

export default DocsIdPage
