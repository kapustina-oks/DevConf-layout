import React from 'react';
import ButtonTitle from '../ui/button-title';
import Title from '../ui/title';
import Button from '../ui/button';
import Speaker from '../ui/speaker';
import speakers from './data';

const Schedule = () => (
	<div className="mt-28 flex flex-col items-center" id="schedule">
		<ButtonTitle title="Meet-up" />
		<Title title="Schedule" />

		<div className="bg-[#F5F5F5] rounded-xl mb-10 p-4 self-start ml-11">
			{
				['Day 1', 'Day 2', 'Day 3'].map((day, i) => <Button title={day} key={i}
					styles="mr-4 px-14 bg-[#F5F5F5] text-[#000] hover:bg-[#00BA40]
                                                                       hover:text-white
                                                                       focus:text-white focus:bg-[#00BA40]"
				/>)
			}
		</div>

		<h6 className="self-start text-[#0F2137] text-2xl font-medium mb-10 ml-11">Wednesday - 24 oct</h6>

		<div className="mx-11 min-w-full">
			{
				speakers.map((speaker) => <Speaker key={speaker.id}
					speaker={speaker.speaker}
					description={speaker.description}
					title={speaker.title}
					time={speaker.time}
					photo={speaker.photo}
					place={speaker.place} id={speaker.id}/>)
			}
		</div>
		<div className="flex mt-10">
			<Button title="Get tickets" styles="px-4 mr-4 bg-[#00BA40]"/>
			<Button title="Download Schedule" styles="bg-sky-900 px-4"/>
		</div>
	</div>
);

export default Schedule;
