import React, { useState } from "react";

// icons
import { RxArrowRight, RxCross1 } from "react-icons/rx";

//framer
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";

// web3forms
import useWeb3Forms from "@web3forms/react";
import 'dotenv/config'
// react hook form
import { useForm } from 'react-hook-form';
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const apiKey = process.env.NEXT_PUBLIC_WEB_FORMS_API_KEY ;
  
  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const SubmitHandler = async (e) => {
  //   e.preventDefault();
  //   setMessage({
  //     success: false,
  //     message: '',
  //   })

  //   // Validate form fields
  //   const newErrors = {};
  //   if (!formData.name.trim()) {
  //     newErrors.nameError = 'Name is required';
  //   }else{
  //     newErrors.nameError = '';
  //   }
  //   if (!formData.email.trim()) {
  //     newErrors.emailError = 'Email is required';
  //   } else if (!validateEmail(formData.email)) {
  //     newErrors.emailError = 'Invalid email address';
  //   }else{
  //     newErrors.emailError = '';
  //   }
  //   if (!formData.subject.trim()) {
  //     newErrors.subjectError = 'Subject is required';
  //   }else{
  //     newErrors.subjectError = '';
  //   }
  //   if (!formData.message.trim()) {
  //     newErrors.messageError = 'Message is required';
  //   }else{
  //     newErrors.messageError = '';
  //   }

  //   if (newErrors.nameError !== '' || newErrors.emailError !== '' 
  //   || newErrors.subjectError !== '' || newErrors.messageError !== '') {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   console.log(formData);
  //   // Make a POST request to your API route
  //   const response = await fetch('/api/contactform', {
  //     method: 'POST',
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     setMessage({success: true, message: 'Email sent successfully'});
  //   } else {
  //     setMessage({success: false, message: 'Error sending email'});
  //   }
  // }

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Jesse Martin Portfolio",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className="h-full xl:h-screen bg-primary/30">
      <div className="container mx-auto py-32 px-6 text-center xl:text-left flex 
      items-center justify-center h-full">
        <div className="hidden animate-pulse bg-circuit bottom-0 -left-0 
        absolute w-[100px] xl:w-[200px] h-[100px] xl:h-[200px] xl:flex bg-cover bg-no-repeat z-0 "></div>
        <div className="bg-lines bottom-0 opacity-30 right-0 xl:-right-20 xl:-bottom-10
        absolute w-[120px] xl:w-[300px] h-[120px] xl:h-[200px] xl:flex bg-cover bg-no-repeat z-0 "></div>
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center ">Get <span className="text-accent">in touch</span></h2>
          <p className="text-center mb-12">I`&apos;`d love to hear more about your project.</p>
          {/* form */}
          <form className="relative flex-1 flex flex-col gap-6 w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}></input>
            {/* group */}
            <div className="flex flex-col xl:flex-row gap-x-6 gap-y-6 w-full">
              <div className="w-full">
                <input 
                autoComplete="false" 
                type="text" 
                placeholder="name" 
                name="name" 
                className={`input ${errors.name && 'inputError'}` }
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}/>
                {errors.name && <p className="formControlError"> * {errors.name.message}</p>}
              </div>
              <div className="w-full">
                <input 
                type="text" 
                placeholder="email" 
                name="email" 
                autoComplete="false"
                className={`input ${errors.email && 'inputError'}`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
                />
                {errors.email && <p className="formControlError"> * {errors.email.message}</p>}
              </div>
            </div>
            <div className="w-full">
              <input 
              type="text" 
              placeholder="subject" 
              name="subject" 
              className={`input ${errors.subject && 'inputError'}`}
              {...register("subject", {
                required: "Subject is required",
                maxLength: 80,
              })}/>
              {errors.subject && <p className="formControlError"> * {errors.subject.message}</p>}
            </div>
            <div className="w-full">
              <textarea 
              placeholder="message" 
              name="message" 
              className={`textarea ${errors.message && 'inputError'}`}
              {...register("message", {
                required: "Enter your Message",
              })}/>
              {errors.message && <p className="formControlError"> * {errors.message.message}</p>}
            </div>
            <div className={`${message === '' ? 'hidden' : 'block'} 
                  ${!isSuccess ? 'bg-red-700/30 text-white' : 'bg-green-300/20 text-white'}
                  py-1 px-4 mb-4 rounded-md border-none text-center flex justify-between items-center`}>
              <p >{message}</p>
              <RxCross1 className="cursor-pointer hover:text-white/50 trasition-all duration-300" onClick={() => setMessage('')}/>
            </div>
            
              <button type="submit" className="btn rounded-full border border-white max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
              hover:border-secondary group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 
                  transition-all duration-300 text-white">Contact Me</span>
                  <RxArrowRight className="text-white -translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute
                  text-[22px]"/>
              </button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact