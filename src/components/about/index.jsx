import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
	return <div
	 className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)} >
			{children}
	</div>
}


const AboutDetails = () => {
  return (
	<section className='py-20 w-full'>
		<div className=' grid grid-cols-12 gap-8 w-full'>
			<ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
			<h2 className='text-2xl text-left w-full capitalize'>
				Front-end developer
			</h2>
			<p className='font-light'>
				Some text
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-4 text-accent'}>
			<p className='font-semibold w-full text-left text-5xl'>
				25+ <sub className='font-semibold text-base'>clients</sub>
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-4 text-accent'}>
			<p className='font-semibold w-full text-left text-5xl'>
				4+ <sub className='font-semibold text-base'>years of experiens</sub>
			</p>
			</ItemLayout>

			<ItemLayout className={'col-span-4 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api/top-langs/?username=Kin0-0Ko&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			<ItemLayout className={'col-span-8 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api?username=Kin0-0Ko&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			<ItemLayout className={'col-span-full !p-0 '}>
				<img
				src='https://skillicons.dev/icons?i=js,html,css,wasm'
				alt='Kin0-0Ko'
				loading='lazy'
				className='w-full h-auto'
				/>
			</ItemLayout>

			
			<ItemLayout className={'col-span-6 !p-0 '}>
			
			<img
			className='w-full h-auto'
			src="https://github-readme-streak-stats.herokuapp.com?user=Kin0-0ko&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
			 alt="KINKO" 
			 loading='lazy'
			 />
			 
			</ItemLayout>

			<ItemLayout className={'col-span-6 !p-0 '}>
				<img
				src='https://github-readme-stats.vercel.app/api/pin/?username=Kin0-0ko&repo=Portfolio_NK&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false'
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