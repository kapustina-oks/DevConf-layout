import React from 'react';
import data from './data';
import Img from '../ui/image';

const Footer = () => (
	<div className="flex flex-col items-center mt-28 mb-52 pt-10 border-t">
		<div className="text-3xl font-bold">{'{DevConf'}</div>
		<div className="grid grid-cols-4 gap-x-6 mb-11 mt-9">
			{
				data.map((item, i) => <Img key={i} src={item.img} width={32} height={32} />)
			}
		</div>
		<div className="text-[#343D48]">Code of Conduct | Terms | Privacy</div>
	</div>
);

export default Footer;
