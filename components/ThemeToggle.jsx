import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Toggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className='transition duration-500 ease-in-out flex items-center mb-2'>
			{theme === 'dark' ? (
				<FaMoon
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className='text-dark dark:text-white dark:hover:text-hoverDark hover:text-hoverLight cursor-pointer ease-in duration-300'
					size={25}
				/>
			) : (
				<FaSun
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className='text-dark dark:text-white dark:hover:text-hoverDark hover:text-hoverLight cursor-pointer ease-in duration-300'
					size={25}
				/>
			)}
		</div>
	);
};

export default Toggle;
