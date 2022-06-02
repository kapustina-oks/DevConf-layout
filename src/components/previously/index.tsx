import React from 'react';
import ButtonTitle from '../ui/button-title';
import Title from '../ui/title';
import Paragraph from '../ui/paragraph';
import Image from 'next/image';

const Previously = () => (
	<div className="mt-28 flex flex-col items-center">
		<ButtonTitle title="Video" />
		<Title title="Previously" marginBottom="4"/>
		<Paragraph text="Conference videos and images from previous years is a great way to show people what to expect at the conference and entice them to join. You can host more media content on YouTube, Flickr or Instagram and link out to them in this section."
			margin="mx-80 mb-16" textAlign="center"/>
		<div className="grid grid-cols-2 gap-4">
			<div className="relative">
				<Image src="/mask1.png" width={335} height={220} />
				<div className="bg-[#FF0000] absolute w-14 h-10 rounded-lg left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2" />
			</div>
			<div className="relative">
				<Image src="/mask2.png" width={335} height={220}/>
				<div className="bg-[#FF0000] absolute w-14 h-10 rounded-lg left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2" />
			</div>

		</div>
	</div>
);

export default Previously;

