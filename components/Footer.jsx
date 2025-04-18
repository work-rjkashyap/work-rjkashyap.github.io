import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
export default function Footer() {
	const { theme, setTheme } = useTheme();
	return (
		<div className='mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-3'>
			<div className='flex flex-col items-center justify-center'>
				<div>
					{theme === 'dark' ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={
								'https://ik.imagekit.io/rjkashyap05/portfolio/logo-dark.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662305259583'
							}
							className='w-[100px]  inline'
							alt='Logo'
						/>
					) : (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={
								'https://ik.imagekit.io/rjkashyap05/portfolio/logo-light.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662305285290'
							}
							className='w-[100px]  inline'
							alt='Logo'
						/>
					)}
				</div>

				<div className='flex mt-6 justify-center align-middle'>
					<p>Made With</p>
					{''}
					<BsFillHeartFill className='mx-1 mt-1' color='#FF008A' />
					<p> {''}Rajeshwar Kashyap</p>
				</div>
			</div>
		</div>
	);
}
