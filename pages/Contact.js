import React from 'react'
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Contact() {
  const socialMediaLinks = {
    github: 'https://github.com/hasanashrafi',
    linkedin: 'https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4',
    email: 'mailto:hasanashrafi.dev@gmail.com',
    phone: "+98 998 144 4535"
  };

  return (
    <section className="w-full bg-white dark:bg-neutral-950 py-12 sm:py-16 px-2 sm:px-4 flex justify-center" id="contact">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center border-2 border-black dark:border-white px-6 sm:px-8 py-2 rounded-lg bg-gray-50 dark:bg-black shadow text-gray-900 dark:text-gray-100">Contact</h2>
        </div>
        <div className="flex gap-6 justify-center mb-4 flex-wrap">
          {Object.keys(socialMediaLinks).map((key, index) => (
            <Link key={index} href={socialMediaLinks[key]} className='hover:text-sky-500 transition text-gray-900 dark:text-gray-100'>
              {key === 'github' && <Github className='size-8' />}
              {key === 'linkedin' && <Linkedin className='size-8' />}
              {key === 'email' && <Mail className='size-8' />}
              {key === 'phone' && (
                <div className='group flex relative'>
                  <Phone className='size-8 ' />
                  <span className="group-hover:opacity-100 transition-opacity bg-sky-400 w-max p-1 text-sm text-white rounded-md absolute -left-full translate-x-1/6 translate-y-full opacity-0 m-4 mx-auto">
                    {socialMediaLinks[key]}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact