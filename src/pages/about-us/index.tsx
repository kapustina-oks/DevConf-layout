import React from 'react';
import Title from '../../components/ui/title';
import ButtonTitle from '../../components/ui/button-title';
import Button from '../../components/ui/button';
import Paragraph from '../../components/ui/paragraph';
import Tag from '../../components/ui/tag';
import { dataTag, dataTime } from './data';
import TimeBox from '../../components/ui/time-box';

const AboutUs = () => (
	<div className="mt-28 flex items-center flex-col">
		<ButtonTitle title="Why join us" />
		<Title title="About DevConf" marginBottom="16"/>
		<div className="flex justify-between">
			<div>
				{dataTag.map((item, i) => <Tag text={item.text} key={i} />)}
			</div>
			<div>
				<Paragraph text="Briefly introduce your conference or event here. You should convince people why they should attend with a list of benefits. Are you a conference organizer? Want to source developer t-shirts as part of your conference package?"
					margin="mb-6"/>
				<Paragraph text="Check out our programming tees at made4dev.com - developers love them! Want to get a bulk discount or just want to use one of the t-shirt designs?"
					margin="mb-6"/>
				<p className="text-base text-[#343D48] font-bold">Please email <a href="#" className="text-[#00BA40]">hello@centarea.com</a> <br/> and we can discuss.</p>
			</div>
		</div>
		<div className="py-12 px-96 flex flex-col justify-center content-center bg-[#F3F3F3] rounded-xl mt-28">
			<h5 className="font-bold text-3xl text-[#0F2137] self-center">Event starts in</h5>
			<div className="flex justify-between my-6">
				{
					dataTime.map((item, i) => <TimeBox time={item.time} info={item.info} key={i}/>)
				}
			</div>
			<Button title="Get tickets" styles="self-center bg-[#00BA40] px-4"/>
		</div>
	</div>
);

export default AboutUs;
