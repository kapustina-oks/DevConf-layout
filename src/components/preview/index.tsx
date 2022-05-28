import Image from 'next/image'
import styles from './prew.module.css'
import Button from "../ui/button";

const Preview = () => {
    return (
        <div className='mt-40 ml-28  flex justify-between'>
            <div>
                <div className='flex flex-row items-center'>
                    <div className='text-6xl text-[#00BA40] font-bold'>{'{'}</div>
                    <h1 className='text-5xl ml-2 font-bold'>DevConf 2022</h1>
                </div>
                <div className='mt-7 text-lg font-medium'>The #1 Bootstrap 4 Template for <br/>
                    Tech Conferences and Events.
                </div>
                <div className='mt-8'>
                    <Button title='Get tickets' bgColor='[#00BA40]' textColor='white' marginRight='4' shadowColor='[#00bc3c]' shadow='lg'/>
                    <Button title='About DevConf' shadow='lg' bgColor='white' textColor='black'/>
                </div>
            </div>

            <div className='self-end min-h-32'>
                <h2 className='mb-8 text-lg font-medium'>We are in numbers</h2>

                <div className='flex justify-between'>

                    <div className='flex justify-between mr-12'>
                        <div className='bg-[#00BA40] py-2 px-2 mr-3 rounded-xl relative flex justify-center content-center'>
                            <Image src="/user.svg" width={32} height={32}/>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <p>2000+</p>
                            <p>Attendees</p>
                        </div>
                    </div>

                    <div className='flex justify-between mr-12'>
                        <div className='bg-[#00BA40] py-2 px-2 mr-3 rounded-xl relative flex justify-center content-center'>
                            <Image src="/sound.svg" width={32} height={32}/>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <p>60+</p>
                            <p>Talks</p>
                        </div>
                    </div>

                    <div className='flex justify-between mr-12'>
                        <div className='bg-[#00BA40] py-2 px-2 mr-3 rounded-xl relative flex justify-center content-center'>
                            <Image src="/document.svg" width={32} height={32}/>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <p>10</p>
                            <p>Workshops</p>
                        </div>
                    </div>

                    <div className='flex justify-between mr-12'>
                        <div className='bg-[#00BA40] py-2 px-2 mr-3 rounded-xl relative flex justify-center content-center'>
                            <Image src="/flash.svg" width={32} height={32}/>
                        </div>

                        <div className='flex flex-col justify-between'>
                            <p>3</p>
                            <p>Days</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Preview;
