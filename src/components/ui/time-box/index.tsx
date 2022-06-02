import React from 'react';

interface ITimeBoxProps {
    info: string
    time: string
}

const TimeBox = ({ info, time }: ITimeBoxProps) => (
	<div className="flex flex-col mr-20">
		<p className="font-bold text-3xl text-[#0F2137]">{info}</p>
		<p className="text-sm text-[#0F2137]">{time}</p>
	</div>
);

export default TimeBox;
