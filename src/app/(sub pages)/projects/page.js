import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from '@/components/projects';
import { projectsData } from '../../data';
import RenderModel from '@/components/RenderModel';
import Staff from '@/components/models/Staff';

export default function Projects() {
  return (
    <>
     <Image src={bg} alt="backround-image"  className='-z-50 fixed w-full h-full object-cover top-0 left-0  object-center opacity-25'/>
		<ProjectList projects={projectsData} />
		<div className='flex items-center justify-center fixed top-20 -left-24 h-screen'>
		<RenderModel preset={'sunset'}>
			<Staff/>
		</RenderModel>
		</div>
    </>
  );
}
