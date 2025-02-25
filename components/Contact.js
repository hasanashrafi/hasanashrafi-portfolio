import React from 'react'
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Contact() {
  const socialMediaLinks = {
    github: 'https://github.com/hasanashrafi',
    linkedin: 'https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4',
    email: 'mailto:hasanashrafi.dev@gmail.com',
    phone: "+989981444535"
  };

  return (
    <div id='contact' className='container mx-auto px-6 py-12 max-w-7xl'>

      <div className="flex gap-4 justify-center ">
        {Object.keys(socialMediaLinks).map((key, index) => (
          <Link key={index} href={socialMediaLinks[key]} className='hover:text-sky-500 '>
            {key === 'github' && <Github className='size-8' />}
            {key === 'linkedin' && <Linkedin className='size-8' />}
            {key === 'email' && <Mail className='size-8' />}
            {key === 'phone' && (
              <div className='flex items-center gap-x-2'>
                <Phone />
               
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Contact