import React from 'react';
import Title from '../../components/ui/title';
import ButtonTitle from '../../components/ui/button-title';
import Button from '../../components/ui/button';
import Paragraph from '../../components/ui/paragraph';
import Tag from '../../components/ui/tag';

const AboutUs = () => (
	<div className="mt-28 flex items-center flex-col">
		<ButtonTitle title="Why join us" />
		<Title title="About DevConf" marginBottom="16"/>

		<div className="flex justify-between">
			<div>
				<Tag text="Unique chance to lorem ipsum dolor"/>
				<Tag text="Learn from the best in the industry"/>
				<Tag text="Discover the best tools and practices"/>
				<Tag text="Meet developers from all over the world"/>
				<Tag text="/Grow your network"/>
				<Tag text="/Practical workshops to lorem ipsum dolor"/>
				<Tag text="/After-party lorem ipsum dolor"/>
				<Tag text="/Free developer t-shirts and swag"/>
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
				<div className="flex flex-col mr-20">
					<p className="font-bold text-3xl text-[#0F2137]">120</p>
					<p className="text-sm text-[#0F2137]">days</p>
				</div>

				<div className="flex flex-col mr-20">
					<p className="font-bold text-3xl text-[#0F2137]">6</p>
					<p className="text-sm text-[#0F2137]">hrs</p>
				</div>
				<div className="flex flex-col mr-20">
					<p className="font-bold text-3xl text-[#0F2137]">31</p>
					<p className="text-sm text-[#0F2137]">min</p>
				</div>
				<div className="flex flex-col">
					<p className="font-bold text-3xl text-[#0F2137]">6</p>
					<p className="text-sm text-[#0F2137]">sec</p>
				</div>
			</div>
			<Button title="Get tickets" styles="self-center bg-[#00BA40] px-4"/>

		</div>
	</div>
);

export default AboutUs;
