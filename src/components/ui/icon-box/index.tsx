import React from 'react';
import Icon from '../icon';

interface IIconBoxProps {
    img: string
    title: string
    subtitle?: string
    width?: number
    height?: number
    paddingX?: string
    paddingY?: string
    titleStyles?: string
    subTitleStyles?: string
    mainMargin?: string
    flexDir?: string
}

const IconBox = ({
	subtitle, title, width = 32, img, paddingX = '2', paddingY = '2',
	height = 32, subTitleStyles, titleStyles, flexDir, mainMargin,
}: IIconBoxProps) => (
	<div className={`flex flex-${flexDir ? flexDir : 'row'} ${mainMargin ? mainMargin : 'mr-12'}`}>
		<Icon img={img} width={width} height={height} paddingY={paddingX} paddingX={paddingY} />

		<div className={'flex flex-col justify-between'}>
			<p className={`${titleStyles ? titleStyles : null}`}>{title}</p>
			<p className={`${subTitleStyles ? subTitleStyles : null}`}>{subtitle}</p>
		</div>
	</div>
);

export default IconBox;
