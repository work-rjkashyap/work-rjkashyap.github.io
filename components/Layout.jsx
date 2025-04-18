import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div className='text-primary dark:text-secondary mx-5'>
			<Header />
			<div className='container mx-auto px-4 min-h-full '>{children}</div>
			<Footer />
		</div>
	);
}
