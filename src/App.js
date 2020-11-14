import React, { useState } from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import UserTable from './components/UserTable'
import userList from './data'

const App = () => {
  const [users, setUsers] = useState(userList)

  //handle userAdd- function to do that (Create)
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  //editing user (Update)
  const [editing, setEditing] = useState(false)
  const initialUser = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialUser)

  const editUser = (id, user) => {
    setEditing(true)
    setCurrentUser(user)
  }
  const updateUser = newUser => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
  }

  //delete a user (Delete)
  const deleteUser = id => setUsers(users.filter(user => user.id !== id))
  return (
    <div className='container'>
      <h1>CRUD APP WITH REACT HOOKS</h1>
      <div className='rows'>
        <div className='five columns'>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} setEditing={setEditing} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className='five columns'>
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  )
}
export default App
