import React, { useState } from 'react';
import Button from '../ui/button';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex flex-row justify-between content-center">
			<div className="text-3xl font-bold">{'{DevConf'}</div>

			<nav>
				<ul className="flex flex-row justify-between content-baseline items-center">
					<Link href="#about-us" scroll={true}>
						<a className="pr-12">About</a>
					</Link>
					<Link href="#speakers">
						<a className="pr-12">Speakers</a>
					</Link>
					<Link href="#schedule">
						<a className="pr-12">Schedule</a>
					</Link>
					<Link href="#tickets">
						<a className="pr-12">Tickets</a>
					</Link>
					<Link href="#venue">
						<a className="pr-12">Venue</a>
					</Link>
					<Link href="#sponsors">
						<a className="pr-12">Sponsors</a>
					</Link>
					{/*<li className="pr-12">About</li>*/}
					{/*<li className="pr-12">Speakers</li>*/}
					{/*<li className="pr-12">Schedule</li>*/}
					{/*<li className="pr-12">Tickets</li>*/}
					{/*<li className="pr-12">Venue</li>*/}
					{/*<li className="pr-12">Sponsors</li>*/}
				</ul>
			</nav>

			<Button title="Get tickets" styles="bg-[#00BA40] px-4"/>

		</div>
	);
};

export default Header;
