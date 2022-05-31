import Image from "next/image";

interface ICardProps {
    name: string
    job: string
    photo: string
    id: string
}

const Card = ({name, job, photo, id}: ICardProps) => {
    return (
        <div className='flex flex-col justify-around content-center p-10 border border-[#EDEDED] rounded-2xl'>
            <div className='text-lg font-medium text-[#0F2137] text-center'>{name}</div>
            <div className='text-sm text-[#343D48] opacity-50 text-center mb-4 mt-3'>{job}</div>
            <div className='flex justify-around mb-8'>
                <Image src='/facebook.svg' width={24} height={24} />
                <Image src='/twitter.svg' width={24} height={24} />
                <Image src='/insta.svg' width={24} height={24} />
            </div>
            <div className='self-center'><Image src={photo} width={140} height={140} /></div>
        </div>
    )
}

export default Card;
