import ButtonTitle from "../../components/ui/button-title";
import Title from "../../components/ui/title";
import Paragraph from "../../components/ui/paragraph";
import Image from "next/image";
import Button from  "../../components/ui/button";
import data from "./data";
import IconBox from "../../components/ui/icon-box";
import styles from "./style.module.css";

const Venue = () => {
    return (
        <div className='flex flex-col items-center mt-28 relative'>
            <ButtonTitle title='How to get'/>
            <Title title='Venue'/>

            <div className='flex justify-between relative'>
                <div className='flex flex-col justify-between self-baseline w-1/2'>
                    <h6 className='font-medium text-2xl text-[#0F2137]'>How To Get Here</h6>
                    <Paragraph text='Your venue info goes here. Sed feugiat nibh lorem, a laoreet sem aliquet ut.
                    Praesent tincidunt efficitur nisi, ut eleifend diam tempor sit amet.' margin='mt-8 mb-4'/>
                    <Paragraph text='Aliquam volutpat ex feugiat, semper urna a, pharetra lacus. Sed eget eros cursus,
                    consequat lectus ultricies, efficitur metus.'/>

                    <div className='self-baseline grid grid-cols-2 grid-rows-2 gap-6 mt-8'>
                        {
                            data.map((item, i) => {
                                return (
                                    <div className='flex flex-col border border-[#EDEDED] rounded-xl p-4' key={i}>
                                        <IconBox
                                            mainMargin='mb-4'
                                            img={item.icon}
                                            title={item.title}
                                            titleStyles='font-medium text-base text-[#0F2137] mt-3'/>
                                        <Button title={item.btn} paddingX='14'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                    <div className={styles.img1}><Image src='/img/img1.png' width={200} height={200}/></div>
                    <div className={styles.img2}><Image src='/img/img2.png' width={200} height={200}/></div>
                    <div className={styles.img3}><Image src='/img/img3.png' width={200} height={200}/></div>

            </div>


        </div>
    )
}

export default Venue;
