import React from 'react';
import ButtonTitle from '../ui/button-title';
import Title from '../ui/title';
import Paragraph from '../ui/paragraph';
import Button from '../ui/button';
import data from './data';
import Img from '../ui/image';

const Sponsors = () => (
	<div className="flex flex-col items-center mt-28 relative" id="sponsors">
		<ButtonTitle title="Support meet"/>
		<Title title="Sponsors & Partners"/>
		<Paragraph text="Want to become a sponsor? Get in touch lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Proin consequat magna eu accumsan mattis." textAlign="center" margin="mt-4"/>

		<div className="grid grid-cols-6 gap-x-6 gap-y-10 mt-16 mb-12">
			{
				data.map((item, i) => <Img key={i} src={item.img} width={200} height={80} />)
			}
		</div>

		<Button title="Become a sponsor" styles="bg-[#00BA40] px-4"/>
	</div>
);

export default Sponsors;
