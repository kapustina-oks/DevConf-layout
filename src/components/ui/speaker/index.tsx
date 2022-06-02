import React, { useState } from 'react';
import ButtonTitle from '../button-title';
import Paragraph from '../paragraph';
import Image from 'next/image';
import styles from './style.module.css';
import combineCss from '../../../helpers/combine-css';

interface ISpeakerProps {
    time: string,
    photo: string,
    place: string,
    title: string,
    speaker: string,
    description: string,
    id?: string,

}

const Speaker = ({
	time, speaker, place, title, description, photo,
}: ISpeakerProps) => {
	const [isDescription, setIsDescription] = useState(false);

	const handleDescription = () => setIsDescription(!isDescription);

	return (
		<div className={styles.grid}>
			<div>
				<Image src={photo} width={112} height={112}/>
			</div>

			<div className="flex flex-col justify-around ml-16">
				<div className="flex">
					<ButtonTitle title={time} marginRight="4" />
					<ButtonTitle title={place}/>
				</div>
				<h5 className="font-medium text-[#343D48] text-2xl mb-2">{title}</h5>
				<h6 className="text-[#343D48] text-lg">Speaker: {speaker}</h6>
				<div className={combineCss(styles.content, isDescription ? styles.paragraph : '')}>
					{isDescription && <Paragraph text={description} textSize="sm" margin="mt-6"/>}
				</div>

			</div>
			<div className={combineCss(styles.circle, isDescription ? styles.active : '')} onClick={handleDescription}/>

		</div>
	);
};

export default Speaker;
