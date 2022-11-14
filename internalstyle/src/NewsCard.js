import React from 'react'

export default function NewsCard(props) {
  return (
    <div className='bg-white shadow-md mt-8 w-1/2 md:w-1/3 p-4'>
      <img src={props.article.urlToImage ? props.article.urlToImage : "https://via.placeholder.com/500"} className='h-64 w-full'/>
       
        <a href={props.article.url} target="_blank">
        <h1 className='text-2xl font-bold text-blue-500 my-4'>{props.article.title}</h1>
        </a>
        <p>{props.article.content? props.article.content : "No content available"}</p>
    </div>
  )
}