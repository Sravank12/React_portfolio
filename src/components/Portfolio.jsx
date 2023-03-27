import React from 'react'
import netflix from "../assets/portfolio/netflix.jpeg"
import drum from "../assets/portfolio/drumkit.png"
import dice from "../assets/portfolio/dice.png"


const Portfolio = () => {
  
  

const projects=[
  {
    id:1,
    src:netflix,
    href: "https://polite-peony-c818d3.netlify.app/",
    code:"https://github.com/Sravank12/Netflix-Clone"
   
    
  },
  {
    id:2,
    src:drum,
     href:"https://sweet-speculoos-04cb84.netlify.app/",
    code:"https://github.com/Sravank12/Drum-Kit"

  },
  {
    id:3,
    src:dice,
    href:"https://kaleidoscopic-hummingbird-6667e2.netlify.app/",
    code:"https://github.com/Sravank12/Dice-game"
   
  }


]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
       <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        <p className='py-6'>Check out my works.</p>
       </div>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

       {projects.map(({id,src,href,code})=>(
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
          <div className='flex items-center justify-center'>
          <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</a>
          <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
          </div>
         
        </div>
       ))}
       
       </div>
    </div>
    </div>
  )
       
}

export default Portfolio
