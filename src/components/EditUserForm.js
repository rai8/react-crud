import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  //const initialUser = { id: null, name: '', username: '' }
  const [user, setUser] = useState(props.currentUser)

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (user.name && user.username) props.updateUser(user)
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input className='u-full-width' type='text' name='name' onChange={handleChange} value={user.name} />
        <label>Username</label>
        <input className='u-full-width' type='text' name='username' onChange={handleChange} value={user.username} />
        <button className='button-primary' type='submit' onClick={handleSubmit}>
          Edit user
        </button>
        <button type='submit' onClick={() => props.setEditing(false)}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditUserForm
