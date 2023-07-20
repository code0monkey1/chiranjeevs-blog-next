import Image from "next/image"
import { IArticle } from "../types"
import { formatDate } from "../utils"

type TPropTypes = {
  article:IArticle
}

const Author =({article}:TPropTypes)=>{
    
  return(<>
   <div className="flex items-center py-2 px-3">
         
          <div className=" rounded-lg overflow-hidden flex items-center justify-center">

              <Image
              alt="profile_image"
              // unoptimized={true}
              // loader={
              //   ()=>`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`
              // }
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                    />
          </div>

          <div className="text-sm  font-bold text-gray-600 px-4">
                {
                  article.attributes.author.data.attributes.firstname
                }
                {" "}
                {
                  article.attributes.author.data.attributes.lastname
                } 
            
            
          </div>
          
          <div className="text-sm  font-bold text-gray-400">
             
               {
                formatDate(article.attributes.createdAt)
               }
          </div>


       </div>
  </>)
}

export default Author;