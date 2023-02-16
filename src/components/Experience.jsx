import React from 'react'; 
import html from "../assets/html.png";
import css from "../assets/css.png";
import react1 from "../assets/react.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import dsa from "../assets/dsa.jpg";
import sass from "../assets/sass.png";
import sql from "../assets/sql.png";
import jquery from "../assets/jquery.png";
import mongodb from "../assets/mongodb.png";




const Experience = () => {

const techs=[
    {
        id:1,
        src:html,
        title:"HTML",
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:"CSS",
        style: 'shadow-blue-500'
    },
    {
        id:3,
        src:javascript,
        title:"JS",
        style: 'shadow-yellow-500'
    },
    {
        id:4,
        src:sass,
        title:"SCSS",
        style: 'shadow-pink-500'
    },
    {
        id:5,
        src:react1,
        title:"REACTJS",
        style: 'shadow-blue-500'
    },
  
    {
        id:6,
        src:tailwind,
        title:"TAILWIND",
        style: 'shadow-indigo-500'
    },
    {
        id:7,
        src:node,
        title:"NODEJS",
        style: 'shadow-green-500'
    },
    {
        id:8,
        src:github,
        title:"GITHUB",
        style: 'shadow-red-500'
    },
    {
        id:9,
        src:c,
        title:"C",
        style: 'shadow-blue-500'
    },
    {
        id:10,
        src:cpp,
        title:"C++",
        style: 'shadow-violet-500'
    },
    {
        id:11,
        src:java,
        title:"JAVA",
        style: 'shadow-orange-500'
    },
    {
        id:12,
        src:dsa,
        title:"DSA",
        style: 'shadow-green-500'
    },
    {
        id:13,
        src:sql,
        title:"MYSQL",
        style: 'shadow-orange-500'
    },
    {
        id:14,
        src:jquery,
        title:"JQUERY",
        style: 'shadow-blue-500'
    },
    {
        id:15,
        src:mongodb,
        title:"MONGODB",
        style: 'shadow-green-500'
    }
]

  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-centre w-full text-white'>
            <div>
                 <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                 <p className='py-6'>Technologies I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>


                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Experience