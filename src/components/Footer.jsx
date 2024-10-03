import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4 w-screen'>
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/gauravpatil8" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/GauravPatil8" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Gaurav Patil</p>
      </div>
    </footer>
  )
}

export default Footer;
