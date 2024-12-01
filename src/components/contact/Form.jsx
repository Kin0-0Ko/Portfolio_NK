"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {

	const toastId = toast.loading("Sending your message, please wait...")
    emailjs
      .send(
		process.env.NEXT_PUBLIC_SERVICE_ID,
		process.env.NEXT_PUBLIC_TEMPLATE_ID,
		params,
		{

        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
		limitRate: {
			throttle: 10000, //u cannot send more 1 email per 10 seconds
		}

      })
      .then(
        () => {
          toast.success("I have recieved your message, I`ll get back to you soon.",{
			id: toastId
		  })
        },
        (error) => {
			toast.error("There was an error sending your message, please try again later!",{
				id: toastId
			})
        },
      );
  };
   
  const onSubmit = (data) => {
	const templateParams = {
		to_name: "Nikita Kovalenko",
		from_name: data.Name,
		reply_to: data.Email,
		message: data.Message
	}
	sendEmail(templateParams)

};
  
  return (
	<>
	<Toaster richColors={true}/>
    <form onSubmit={handleSubmit(onSubmit)}
	className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
	>
      <input type="text" placeholder="Name" {...register("Name", {
		required: 'This field is required!',
		minLength: {
			value: 3,
			message: "Name should be at least 3 characters long!"
		}
	})}
	 	className='w-full p-2 rounded-md shadow-lg text-foregraound focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' 
	  />
	  {
		errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
	  }
      <input type="text" placeholder="Email" {...register("Email", {required: 'This field is required!', pattern: /^\S+@\S+$/i})}
	 className='w-full p-2 rounded-md shadow-lg text-foregraound focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' 
	  />
	  	{
		errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>
	  }
      <textarea {...register("Message", {required: 'This field is required!', 
	  maxLength: {
		value: 500,
		message: "Massege should be less then 500 charecters"
	  }
	  
	  , minLength: {
		value: 50,
		message: "Massege should be less then 50 charecters"
	  }})}
	  placeholder='Message'
	 className='w-full p-2 rounded-md shadow-lg text-foregraound focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' 
	  />
		{
		errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>
	  }
      <input
	  value='Send your message'
	 	className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm
		 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50  corsore-pointer capitalize' 
	  type="submit" />
    </form>
	</>
  );
}