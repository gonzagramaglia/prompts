'use client';

import { useState, useEffect } from "react";
import PromptCard from './PromptCard';


const PromptCardList = ({ tag, data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout" >
      { !tag 
          ? data.map( (post) => (
            <PromptCard 
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          )) 
          : data.filter( (post) => (
            post.tag === tag
          )).map( (post) => (
            <PromptCard 
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          )) 
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])
  const [tag, setTag] = useState('')

  const handleSearchChange = (e) => {

  }

  const handleTagClick = (tag) => {
    setTag(tag)
  }

  useEffect( () => {
    const fetchPosts = async() => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data)
    }

    fetchPosts();
  }, [tag])

  console.log(posts)

  return (
    <section className="mt-36 feed" >
      <form className="relative w-full flex-center">
        <input 
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        tag={tag}
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed