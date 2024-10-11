import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <main>
        <div>UsersPage</div>
        <Link href="/users/new">NewUsers</Link>
    </main>
  )
}

export default UsersPage