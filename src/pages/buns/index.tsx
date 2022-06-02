import React from 'react';
import ButtonTitle from '../../components/ui/button-title';
import Title from '../../components/ui/title';
import styles from './style.module.css';
import data from './data';
import IconBox from '../../components/ui/icon-box';
import Image from 'next/image';

const Buns = () => (
	<div className="flex flex-col items-center mt-28 ">
		<ButtonTitle title="Buns"/>
		<Title title={'What\'s included?'}/>

		<div className="flex justify-between relative pt-24">
			<div className={styles.bg}>

			</div>

			<div className={styles.aws}>
				<Image src="/tech/aws.png" width={50} height={50} />
			</div>

			<div className={styles.figma}>
				<Image src="/tech/figma.svg" width={50} height={50}/>
			</div>
			<div className={styles.js}>
				<Image src="/tech/js.svg" width={50} height={50} />
			</div>
			<div className={styles.vue}>
				<Image src="/tech/vuejs.png" width={50} height={50} />
			</div>
			<div className={styles.swift}>
				<Image src="/tech/swift.png" width={50} height={50} />
			</div>
			<div className={styles.react}>
				<Image src="/tech/reactjs.svg" width={50} height={50} />
			</div>
			<div className={styles.gitlab}>
				<Image src="/tech/gitlab.png" width={50} height={50} />
			</div>

			<div className="grid grid-cols-2 gap-y-8 row-span-3">
				{data.map((item, i) => <IconBox key={i} img={item.img} width={32} height={32} title={item.title}
					subtitle={item.subTitle} flexDir="col"
					titleStyles="text-xl font-medium text-[#0F2137] pt-4 pb-2"
					subTitleStyles="text-sm text-[#343D48]"
					mainMargin="mt-4"
				/>)}
			</div>
		</div>
	</div>
);

export default Buns;
