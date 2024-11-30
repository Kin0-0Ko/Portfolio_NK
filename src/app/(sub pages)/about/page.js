import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from '@/components/RenderModel';
import Hat from '@/components/models/Hat';
import AboutDetails from '@/components/about';

export default function About() {
  return (
    <>
     <Image src={bg} alt="backround-image"  className='-z-50 fixed w-full h-full object-cover top-0 left-0  object-center opacity-25'/>
		
	<div className='w-full h-screen absolute top-1/2 -translate-y-1/2 left-0'>
		<RenderModel preset={'dawn'}>
			<Hat/>
		</RenderModel>
	</div>

	<div className='relative w-full h-screen flex flex-col items-center justify-center'>
		<div className='absolute flex flex-col -translate-y-1/3 items-center text-center top-[60%] left-1/2 -translate-x-1/2 '>
			<h1 className='font-bold text-9xl text-accent'>
				Nikita Kovalenko 
			</h1>
			<p className='font-light text-foreground text-lg'>Something</p>

		</div>
	</div>
	<AboutDetails/>

    </>
  );
}
