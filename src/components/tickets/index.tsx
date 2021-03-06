import React from 'react';
import ButtonTitle from '../ui/button-title';
import Title from '../ui/title';
import Paragraph from '../ui/paragraph';
import CardPrice from '../ui/card-price';
import data from './data';

const Tickets = () => (
	<div className="mt-28 flex flex-col items-center" id="tickets">
		<ButtonTitle title="Buy tickets"/>
		<Title title="Tickets and more"/>
		<Paragraph
			text="You can use 3rd party platforms such as eventbrite and tickettailor to sell your tickets."
			textAlign="center" textSize="base"
			margin="mx-80 mb-16 mt-4"/>

		<div className="grid grid-cols-3 gap-4">
			{
				data.map((item, i) => <CardPrice key={i} title={item.title} subTitle={item.subTitle}
					line_1={item.line_1} line_2={item.line_2} line_3={item.line_3}
					price={item.price} icon={item.icon}/>)
			}
		</div>
	</div>
);

export default Tickets;
