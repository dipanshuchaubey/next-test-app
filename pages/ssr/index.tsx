import React from 'react'

export const getServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
const ServerRendering = (props: any) => {
  return (
    <div>
      {props?.data?.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default ServerRendering
