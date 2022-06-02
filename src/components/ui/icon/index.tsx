import React from 'react';
import Image from 'next/image';

interface IIconProps {
    img: string
    width: number
    height: number
    paddingY?: string
    paddingX?: string
}

const Icon = ({
	img, width, height, paddingY, paddingX,
}: IIconProps) => (
	<div className={`bg-[#00BA40] px-${paddingY} py-${paddingX} mr-3
             rounded-xl relative flex justify-center content-center self-baseline`}>
		<Image src={img} width={width} height={height}/>
	</div>
);

export default Icon;
