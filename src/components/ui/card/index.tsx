import Image from "next/image";

interface ICardProps {
    name: string
    job: string
    photo: string
    id: string
}

const Card = ({name, job, photo, id}: ICardProps) => {
    return (
        <div className=''>
            <div>{name}</div>
            <div>{job}</div>
            <div className='flex justify-between'>
                <Image src='/facebook.svg' width={24} height={24} />
                <Image src='/twitter.svg' width={24} height={24} />
                <Image src='/insta.svg' width={24} height={24} />
            </div>
            <Image src={photo} width={140} height={140} />
        </div>
    )
}

export default Card;
