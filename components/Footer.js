// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  const githubUrl = 'https://github.com/yourusername';
  const linkedinUrl = 'https://linkedin.com/in/yourusername';
  const email = 'mailto:your.email@example.com';

  return (
    <footer className="bg-gray-800 text-white py-6 flex justify-center">
      <div className="flex gap-4">
        <Link href={githubUrl}>
            GitHub
         
        </Link>
        <Link href={linkedinUrl}>
            LinkedIn
    
        </Link>
        <Link href={email}>
            Email
         
        </Link>
      </div>
    </footer>
  );
};

export default Footer;