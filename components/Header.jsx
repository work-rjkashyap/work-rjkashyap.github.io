import React, { useState } from 'react';
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiInstagram,
	FiMenu,
	FiX,
} from 'react-icons/fi';
import { MdMarkEmailRead } from 'react-icons/md';
import Toggle from './ThemeToggle';
import { useTheme } from 'next-themes';
import link from '../utils/social.json';
import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
	const [show, setshow] = useState(false);
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Rajeshwar Kashyap</title>
			</Head>
			<div className='sticky top-0 backdrop-blur-sm '>
				<nav className='2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 '>
					{/* For large and Medium-sized Screen */}
					<div className='flex justify-between '>
						<div className='hidden sm:flex flex-row items-center space-x-6'>
							<a href={link.github} target='_blank' rel='noreferrer'>
								<FiGithub
									className='text-dark dark:text-white icon-github  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.linkedin} target='_blank' rel='noreferrer'>
								<FiLinkedin
									className='text-dark dark:text-white icon-linkedin  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.twitter} target='_blank' rel='noreferrer'>
								<FiTwitter
									className='text-dark dark:text-white icon-twitter  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.instagram} target='_blank' rel='noreferrer'>
								<FiInstagram
									className='text-dark dark:text-white icon-instagram  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={`mailto:${link.email}`} target='_blank' rel='noreferrer'>
								<MdMarkEmailRead
									className='text-dark dark:text-white icon-mail  ease-in duration-300'
									size={25}
								/>
							</a>
						</div>
						{/* logo */}
						<div className=' flex space-x-3 items-center'>
							<Link href='#'>
								<a>
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
								</a>
							</Link>
						</div>
						<div className='hidden sm:flex flex-row space-x-4'>
							<div className='flex justify-center align-middle'>
								<Toggle />
							</div>

							<a
								href={
									'https://ik.imagekit.io/rjkashyap05/portfolio/resume_rajeshwar.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1662305306215'
								}
								target='_blank'
								className='btn-primary bg-transparent text-dark dark:text-white  border-dark dark:border-white hover:border-hoverLight hover:text-hoverLight dark:hover:border-hoverDark dark:hover:text-hoverDark'
								rel='noreferrer'
							>
								Resume
							</a>
						</div>
						{/* Burger Icon */}
						<div
							id='bgIcon'
							onClick={() => setshow(!show)}
							className={`focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
						>
							<FiMenu
								className={`${
									show ? 'hidden' : ''
								} text-dark dark:text-white  ease-in duration-300`}
								size={25}
							/>
							<FiX
								className={`${
									show ? 'block' : 'hidden'
								} text-dark dark:text-white  ease-in duration-300`}
								size={25}
							/>
						</div>
					</div>
					{/* Mobile and small-screen devices (toggle Menu) */}
					<div
						id='MobileNavigation'
						className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}
					>
						<div className='flex flex-row items-center justify-center space-x-6'>
							<a href={link.github} target='_blank' rel='noreferrer'>
								<FiGithub
									className='text-dark dark:text-white icon-github  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.linkedin} target='_blank' rel='noreferrer'>
								<FiLinkedin
									className='text-dark dark:text-white icon-linkedin  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.twitter} target='_blank' rel='noreferrer'>
								<FiTwitter
									className='text-dark dark:text-white icon-twitter  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={link.instagram} target='_blank' rel='noreferrer'>
								<FiInstagram
									className='text-dark dark:text-white icon-instagram  ease-in duration-300'
									size={25}
								/>
							</a>
							<a href={`mailto:${link.email}`} target='_blank' rel='noreferrer'>
								<MdMarkEmailRead
									className='text-dark dark:text-white icon-mail  ease-in duration-300'
									size={25}
								/>
							</a>
							<Toggle />
						</div>
						<div className='flex  mt-4  mx-auto justify-center '>
							<a
								href={
									'https://ik.imagekit.io/rjkashyap05/portfolio/resume_rajeshwar.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1662305306215'
								}
								target='_blank'
								className='btn-primary bg-transparent text-dark dark:text-white  border-dark dark:border-white hover:border-hoverLight hover:text-hoverLight dark:hover:border-hoverDark dark:hover:text-hoverDark'
								rel='noreferrer'
							>
								Resume
							</a>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
