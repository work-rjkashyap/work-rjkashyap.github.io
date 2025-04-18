import React from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<WorkExperience />
		</Layout>
	);
}
