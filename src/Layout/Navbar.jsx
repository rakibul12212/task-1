import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Switch, useColorMode } from '@chakra-ui/react';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            toggleColorMode(storedTheme);
        }
    }, []);

    const handleThemeToggle = () => {
        const newTheme = colorMode === 'light' ? 'dark' : 'light';
        toggleColorMode(newTheme);
        localStorage.setItem('theme', newTheme);
    };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex-shrink-0">
        <a href="/"><span className="text-white">Logo</span></a>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <div >
                <Switch onChange={handleThemeToggle} />
                <span className="ml-2"></span>
            </div>
        </div>
        <Link to="/signin"><Button colorScheme="blue">Sign In</Button></Link>
        <Link to='/signup'><Button colorScheme="gray" ml={2}>Sign Up</Button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
