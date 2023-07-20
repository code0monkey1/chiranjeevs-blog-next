/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar=()=>{
  return (
    <nav className="flex justify-between" >
        <Link href="/" className='className="flex items-center cursor-pointer mt-5' >  
        <div className='flex ' >
          <Image alt="profile icon" src="/github_image.png" width={90} height={90}
          className='md:ml-0 h-20 w-20 mt-6 md:h-32 md:w-32 md:mt-0'
          />
            <span className=" font-bold ml-2 text-primary text-5xl mt-7 ml-2 font-extrabold pb-4 ">
              {"> Existential Nihilism "}
            </span>

        </div>
         
        </Link>
      
       <div className=" flex items-center cursor-pointer mt-2 ">
         <Link href='https://sendfox.com/vonnaden'  style={{textDecoration:"none"}}>
          <button className=" bg-primary h-auto p-2 rounded-md text-white">
            Subscribe</button>
         </Link>
        </div>
     

      </nav>
  )
}

export default NavBar


       
