import React from 'react';
import Head from 'next/head';

interface ILayoutProps {
	[key: string]: JSX.Element | JSX.Element[] | string;
}

const Layout = (props: ILayoutProps): JSX.Element => (
	<div className="mt-8 mx-6">
		<Head>
			<title>{props.pageTitle}</title>
			<meta name="description" content="Generated by create next app" />
			<link href="/dist/output.css" rel="stylesheet" />
			<link rel="icon" href="/favicon.ico"/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link
				href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Montserrat:wght@300;600&display=swap"
				rel="stylesheet" />
		</Head>
		<div>
			{props.children}
		</div>
	</div>
);
export default Layout;
