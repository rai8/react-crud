import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
  const initialUser = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialUser)

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (user.name && user.username) {
      handleChange(e, addUser(user))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className='u-full-width' type='text' name='name' onChange={handleChange} value={user.name} />
        <label>Username</label>
        <input className='u-full-width' type='text' name='username' onChange={handleChange} value={user.username} />
        <button className='button-primary' type='submit'>
          Add user
        </button>
      </form>
    </div>
  )
}

export default AddUserForm
