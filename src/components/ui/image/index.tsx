import Image from "next/image";

interface IImageProps {
    src: string
    width?: number
    height?: number
}

const Img = ({src, width, height }: IImageProps) => {
    return (
        <Image src={src} width={width} height={height}/>
    )
}

export default Img;
