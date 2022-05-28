import ButtonTitle from "../ui/button-title";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import Image from "next/image";

const Previously = () => {
    return (
        <div className='mt-28 flex flex-col items-center'>
            <ButtonTitle title='Video' />
            <Title title='Previously' marginBottom='4'/>
            <Paragraph text='Conference videos and images from previous years is a great way to show people what to expect at the conference and entice them to join. You can host more media content on YouTube, Flickr or Instagram and link out to them in this section.'
            margin='mx-80 mb-16' textAlign='center'/>

            <div className='flex justify-between min-w-700'>
                <Image src='/mask1.png' width={335} height={220} />
                <Image src='/mask2.png' width={335} height={220}/>
            </div>
        </div>
    )
}

export default Previously;

