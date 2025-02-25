import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from '@/components/contact/Form';


export default function Contact() {
  return (
    <>
     <Image priority sizes='100vw' src={bg} alt="backround-image"  className='-z-50 fixed w-full h-full object-cover top-0 left-0  object-center opacity-25'/>
		<article className='relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8'>
			<div className='flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4'>
				<h1 className='text-accent font-semibold text-center text-4xl capitalize'>
					summon the wizzard
				</h1>
				<p className='text-center font-light text-sm xs:text-base'>
					Contact with me
				</p>
			</div>
			<Form/>
		</article>
	
    </>
  );
}
