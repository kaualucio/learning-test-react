import React, { useState } from 'react'

const List = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<any[]>([])

  const handleGetPost = async () => {
    setIsLoading(true)
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const response = await data.json()
      setPosts(response)
      setIsLoading(false) 
    } catch (error) {
      setIsLoading(false) 
      
    }
  }

  if(isLoading) return <p test-id="loading">Buscando posts...</p>

  return (
    <div>
      <button onClick={handleGetPost}>Get Posts</button>
      <ul>
        {
          posts?.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List