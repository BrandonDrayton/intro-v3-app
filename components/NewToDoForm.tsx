import React, { useState } from 'react'

const NewToDoForm: React.FC = () => {
  const [state, updateState] = useState<string>('')

  return (
    <div>
      <form action="push">
        <input type="text" />
      </form>
    </div>
  )
}

export default NewToDoForm
