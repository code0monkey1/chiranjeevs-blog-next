/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IArticle } from '../types'
import { formatDate } from '../utils'
import Author from './Author'
interface IPropType{
  article:IArticle
}
const BlogCard = ({article}:IPropType) => {

   console.log("attributes",JSON.stringify(article.attributes,null,2))
   
  
 
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`} > 
         
          <h1 className="px-4 my-4 text-xl text-gray-600  font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
            {article.attributes.Title}
          </h1>
        
      </Link>
      <Author article={article} />
       <div className="text-gray-500  flex items-center mx-4 my-4 ">
          {article.attributes.shortDescription.slice(0,250)}{article.attributes.shortDescription.length>250?"...":''}
       
       </div>
    </div>
  )
}

export default BlogCard