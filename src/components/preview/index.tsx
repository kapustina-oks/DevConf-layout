import React from 'react';
import Button from '../ui/button';
import IconBox from '../ui/icon-box';
import data from '../preview/data';

const Preview = () => (
	<div className="mt-40 ml-28 flex justify-between">
		<div>
			<div className="flex flex-row items-center">
				<div className="text-6xl text-[#00BA40] font-bold">{'{'}</div>
				<h1 className="text-5xl ml-2 font-bold">DevConf 2022</h1>
			</div>
			<div className="mt-7 text-lg font-medium">The #1 Bootstrap 4 Template for <br/>
				Tech Conferences and Events.
			</div>
			<div className="mt-8">
				<Button title="Get tickets" styles="bg-[#00BA40] mr-4 text-white shadow-[#00bc3c] shadow-lg px-4" />
				<Button title="About DevConf" styles="shadow-lg bg-white text-[#000] px-4" />
			</div>
		</div>
		<div className="self-end min-h-32">
			<h2 className="mb-8 text-lg font-medium">We are in numbers</h2>
			<div className="flex justify-between">
				{
					data.map((item, i) => <IconBox key={i} img={item.img} width={item.width}
						height={item.height} title={item.title} subtitle={item.subtitle}/>)
				}
			</div>
		</div>
	</div>
);

export default Preview;
