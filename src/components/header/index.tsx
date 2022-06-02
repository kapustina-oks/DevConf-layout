import React from 'react';
import Button from '../ui/button';

const Header = () => (
	<div className="flex flex-row justify-between content-center">
		<div className="text-3xl font-bold">{'{DevConf'}</div>

		<ul className="flex flex-row justify-between content-baseline items-center">
			<li className="pr-12">About</li>
			<li className="pr-12">Speakers</li>
			<li className="pr-12">Schedule</li>
			<li className="pr-12">Tickets</li>
			<li className="pr-12">Venue</li>
			<li className="pr-12">Sponsors</li>
		</ul>

		<Button title="Get tickets" styles="bg-[#00BA40] px-4"/>

	</div>
);

export default Header;
