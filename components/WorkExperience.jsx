import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function WorkExperience() {
	const [activeStatus, setActiveStatus] = useState(2);
	return (
		<div className='p-4 mt-9'>
			<h3 className='title text-center md:text-7xl text-4xl'>
				WORK EXPERIENCE
			</h3>
			<div className='flex flex-row  rounded shadow mt-4'>
				<div className=' flex-col flex-wrap  sm:block rounded shadow w-[30%]'>
					<div className=' xl:mx-0 pl-5 pr-5  '>
						<ul className='flex flex-col gap-y-5'>
							<li
								onClick={() => setActiveStatus(2)}
								className={
									activeStatus === 2
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 2
										? 'SAR Software Solutions Pvt.Ltd'
										: 'SAR Software Solutions Pvt.Ltd'}
								</span>
								{activeStatus === 2 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li>
							<li
								onClick={() => setActiveStatus(3)}
								className={
									activeStatus === 3
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 3
										? 'SS Services Hub Durg'
										: 'SS Services Hub Durg'}
								</span>
								{activeStatus === 3 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li>
							<li
								onClick={() => setActiveStatus(4)}
								className={
									activeStatus === 4
										? 'text-sm text-hoverLight dark:text-hoverDark flex flex-col justify-between border-hoverLight dark:border-hoverDark pt-3 rounded-t mr-10 font-normal'
										: 'text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark'
								}
							>
								<span className='mb-3 cursor-pointer'>
									{activeStatus === 4 ? 'ICE Infotech' : 'ICE Infotech'}
								</span>
								{activeStatus === 4 && (
									<div className='w-full h-1 bg-hoverLight dark:bg-hoverDark rounded-t-md' />
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='flex m-4  w-[70%]'>
					{activeStatus === 4 ? (
						<div>
							<p>
								Web Developer{' '}
								<a
									href='https://www.iceinfotech.in/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<b className='dark:text-hoverDark text-hoverLight'>
										@ ICE Infotech
									</b>
								</a>
							</p>
							<ul className='my-3 flex flex-col gap-x-6'>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Learn Basic Website development with Html, CSS, JavaScript &
										PHP.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									{/* <p>Projects</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Learn Basic HTML, CSS, JavaScript, MySQL And PHP,
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>Improve Problem Solving Technics.</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>Learn CodeIgniter PHP Framework</p>
								</li>
							</ul>
						</div>
					) : activeStatus === 3 ? (
						<div>
							<p>
								Software Developer{' '}
								<a
									href='http://sarmicrosystems.in/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<b className='dark:text-hoverDark text-hoverLight'>
										@ SS Service HUB
									</b>
								</a>
							</p>
							<ul className='my-3 flex flex-col gap-x-6'>
								<li className='flex gap-4 my-2'>
									{/* <p>Skills</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Work On Development and managing Mobile Recharge, Money
										Transfer, AEPS, Bill Payment, Pan Card Application Services.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									{/* <p>Projects</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Working on large User Database management.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Work on Front-End & Back-End Development.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Integrate Multiple APIs for Several Service.
									</p>
								</li>
							</ul>
						</div>
					) : activeStatus === 2 ? (
						<div>
							<p>
								Full-Stack Developer{' '}
								<a
									href='http://sarmicrosystems.in/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<b className='dark:text-hoverDark text-hoverLight'>
										@ SAR Software Solutions
									</b>
								</a>
							</p>
							<ul className='my-3 flex flex-col gap-x-6'>
								<li className='flex gap-4 my-2'>
									{/* <p>Skills</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Next.js · API Development · Amazon EC2 · Amazon S3 · Amazon
										CloudFront · Nginx · Apache · React Native · Node.js ·
										React.js
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									{/* <p>Projects</p> */}
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Working in PHP, MySql,Javascript, React (NextJs), and AWS
										EC2 Server for Production.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Build OTT Android/IOS App for Sundrani Video world with AWS-
										S3, NodeJs, React-Native.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Built NextJs Application for E-commerce & Blog Application
										for Stemnovate Limited LLP.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Built Laravel Application for LMS Application for Etude
										Guru.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Built React Native Application for Quiz Application for
										Quiz2Shine.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Build Android App for Location Tracking and Work management.
									</p>
								</li>
								<li className='flex gap-4 my-2'>
									<span><FaArrowRight className='dark:text-hoverDark text-hoverLight mt-2' /></span>
									<p className='text-base'>
										Build Fully functional E-surveillance App For security
										agencies With React Native.
									</p>
								</li>
							</ul>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
