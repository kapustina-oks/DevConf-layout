import React from 'react';
import Image from 'next/image';

interface IImageProps {
    src: string
    width?: number
    height?: number
}

const Img = ({ src, width, height }: IImageProps) => (
	<Image src={src} width={width} height={height}/>
);

export default Img;
