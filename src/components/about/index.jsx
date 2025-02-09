
import React from 'react'
import ItemLayout from './ItemLayout'




const AboutDetails = () => {
  return (
	<section className='py-20 w-full'>
		<div className=' grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
			<ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
			<h2 className='text-xl	md:text-2xl text-left w-full capitalize'>
				Software Engineer
			</h2>
			<p className='font-light text-xs sm:text-sm md:text-base'>
			Hi, I'm Nikita Kovalenko – a passionate Frontend Developer specializing in React and TypeScript.
I'm a Computer Science student with a strong foundation in JavaScript, TypeScript, React, Next.js, and modern web technologies. I love building scalable, user-friendly applications and constantly learning new things to improve my skills.
I enjoy solving problems, writing clean and maintainable code, and working in a collaborative environment. My projects showcase my ability to create functional and visually appealing web applications.
Looking for opportunities to grow as a developer and contribute to innovative projects. Let's build something amazing together!
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
			<p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
				5 <sub className='font-semibold text-base'>clients</sub>
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
			<p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
				2 <sub className='font-semibold text-base'>year of experiens</sub>
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api/top-langs/?username=Kin0-0Ko&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			<ItemLayout className={'col-span-full md:col-span-8 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api?username=Kin0-0Ko&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			<ItemLayout className={'col-span-full !p-0 '}>
				<img
				src='https://skillicons.dev/icons?i=js,ts,html,css,react,nextjs,docker,mongo,nodejs,expressjs,figma,git,linux'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			
			<ItemLayout className={'col-span-full md:col-span-6 !p-0 '}>
			
			<img
			className='w-full h-auto'
			src="https://github-readme-streak-stats.herokuapp.com?user=Kin0-0ko&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
			 alt="KINKO" 
			 loading='lazy'
			 />
			 
			</ItemLayout>

			<ItemLayout className={'col-span-full md:col-span-6 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api/pin/?username=Kin0-0ko&repo=Weather&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

		</div>
	</section>
  )
}

export default AboutDetails