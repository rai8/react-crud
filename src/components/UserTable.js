import React from 'react'

const UserTable = ({ users, deleteUser }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => {
              const { id, name, username } = user
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>
                    <button onClick={() => deleteUser(id)}>Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colspan={4}>No users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
