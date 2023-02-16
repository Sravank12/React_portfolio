import React from 'react';
import { FaGithub,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { MdOutlinePersonPin} from 'react-icons/md';


const SaocialLinks = () => {

     const links = [
        {
            id:1,
            child:(
                
                    <>
                    LinkedIn <FaLinkedin size={30} />
                </>
                
            ),
            href:"https://www.linkedin.com/in/sravankumar-kancharla-2a7329227/",
            style: "rounded-tr-ml"
        },
        {
            id:2,
            child:(
                
                    <>
                    GitHub <FaGithub size={30} />
                </>
                
            ),
            href:"https://github.com/Sravank12"
            
        },
        {
            id:3,
            child:(
                
                    <>
                    Mail <FaTwitterSquare size={30} />
                </>
                
            ),
            href:"https://twitter.com/sravan1212"
            
        },
        {
            id:4,
            child:(
                
                    <>
                    Resume <MdOutlinePersonPin size={30} />
                </>
                
            ),
            href:"/Sravankumar's Resume Finale.pdf",
            style: "rounded-br-md",
            download:true
           
        }
     ];


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

        {links.map(({id,child,style,href,download})=>(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
               target="_blank"
               rel="noreferrer">
               
               
               {child}
               
            </a>

            </li>

        )
        )};


           
        </ul>
    </div>
  )
        
}


export default SaocialLinks