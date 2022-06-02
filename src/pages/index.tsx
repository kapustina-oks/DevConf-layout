import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Preview from '../components/preview';
import AboutUs from '../components/about-us';
import Previously from '../components/previously';
import Speakers from '../components/speakers';
import Schedule from '../components/schedule';
import Tickets from '../components/tickets';
import Buns from '../components/buns';
import Venue from '../components/venue';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';
import Layout from '../components/layout';

const Home: NextPage = () => (
	<Layout pageTitle="Landing Page Nextjs">
		<Header />
		<Preview />
		<AboutUs />
		<Previously />
		<Speakers />
		<Schedule />
		<Tickets />
		<Buns />
		<Venue />
		<Sponsors />
		<Footer />
	</Layout>
);

export default Home;
