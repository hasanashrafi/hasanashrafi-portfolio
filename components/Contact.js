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
    <div className='container mx-auto px-6 py-12 max-w-7xl'>
      <p className='text-3xl font-bold mb-8'>Contact me</p>

      <div className="flex gap-4 justify-center ">
        {Object.keys(socialMediaLinks).map((key, index) => (
          <Link key={index} href={socialMediaLinks[key]} className='hover:text-sky-500'>
            {key === 'github' && <Github />}
            {key === 'linkedin' && <Linkedin />}
            {key === 'email' && <Mail />}
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