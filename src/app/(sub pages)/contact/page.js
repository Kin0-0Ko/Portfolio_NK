import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"

export default function Contact() {
  return (
    <>
     <Image src={bg} alt="backround-image"  className='-z-50 fixed w-full h-full object-cover top-0 left-0  object-center opacity-25'/>
		<article className='relative w-full flex flex-col items-center justify-center space-y-8'>
			<div className='flex flex-col items-center justify-center space-y-6 w-3/4'>
				<h1 className='text-accent font-semibold text-center text-4xl capitalize'>
					summon the wizzard
				</h1>
			</div>
		</article>
	
    </>
  );
}
