import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { addingChildren } from '../api/admin';

const ChildrenRegistration = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();


  const [name,setName] = useState()
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [number,setNumber] = useState('')
    const [image,setImage] = useState('')
    const [housename,setHouseName] = useState('')
    const [place,setPlace] = useState('')
    const [city,setCity] = useState('')
    const [gender,setGender] = useState('')
    const [state,setState] = useState('')
    const [standard,setStandard] = useState('')




  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const data = {
                name,
                age,
                email,
                number,
                gender,
                image,
                housename,
                place,
                city,
                state,
                standard
            }

            const response = await addingChildren(data)
            //  successToast(response?.message || 'Successfully Created')
            //  navigate('/parent-login')
            console.log(response,'response');
            console.log(data);
        } catch (error) {
            // errorToast(error.response.data.message || error.message || 'something went wrong!')
        }
    }
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div  className='w-full text-black  sm:w-[60%] m-auto'>
             {/* <!-- Name input --> */}
          <div className="relative mb-6" >
            <input
              type="text"
              className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name" />
          </div>

          {/* age */}
          <div className="relative mb-6" >
            <input
              type="number"
              className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
              id="age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              placeholder="Age" />

          </div>

          {/* email */}
          <div className="relative mb-6" >
            <input
              type="email"
              className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email" />
          </div>

            {/* phone */}
            <div className="relative mb-6" >
            <input
              type="number"
              className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
              id="number"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
              placeholder="Mobile Number" />

          </div>
         
          </div>
        );
      case 2:
        return (
          <div className='w-full text-black  sm:w-[60%] m-auto'>
          {/* <!-- Name input --> */}
       <div className="relative mb-6" >
         <label htmlFor="male" className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"  >
          Male
         </label>
         <input  id="male" name='gender' value={'male'} checked={gender === 'gender'} onChange={(e)=>setGender(e.target.value)}  type="radio" className=" peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"/>

         <label htmlFor="male" className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"  >
          Female
         </label>
         <input  id="female" name='female' value={'female'} checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)}  type="radio" className=" peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"/>

         <label htmlFor="female" className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"  >
          Others
         </label>
         <input  id="Others" name='gender' value={'others'} checked={gender === 'others'} onChange={(e)=>setGender(e.target.value)}  type="radio" className=" peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"/>
       </div>

       {/* photo */}
       <div className="relative mb-6" >
          <img src={image} alt="" className='w-16 h-16' />
          <FileBase64 onDone={ (e)=>setImage(e?.base64) } />
          <p onClick={()=>setImage('')} >Delete</p>
       </div>


       {/* house Name */}
       <div className="relative mb-6" >
         <input
           type="text"
           className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
           id="housename"
           value={housename}
           onChange={(e)=>setHouseName(e.target.value)}
           placeholder="House Name" />

       </div>

         {/* place */}
         <div className="relative mb-6" >
         <input
           type="text"
           className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
           id="place"
           value={place}
           onChange={(e)=>setPlace(e.target.value)}
           placeholder="Place" />

       </div>
      
       </div>
        );
      case 3:
        return (
          <div className='w-[60%] m-auto'>
          {/* <!-- City input --> */}
       <div className="relative mb-6" >
         <input
           type="text"
           className=" peer placeholder:text-gray-700 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:autofill:shadow-autofill dark:peer-focus:text-primary "
           id="city"
           value={city}
           onChange={(e)=>setCity(e.target.value)}
           placeholder="City" />
       </div>
       <div className="">

       </div>

       
        <div className="relative mb-6" >
          <select name="state" id="state" onChange={(e)=>setState(e.target.value)}>
            <option value="">options</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="goa">Goa</option>
          </select>
       </div>

       <div className="relative mb-6" >
          <select name="standard" id="standard" onChange={(e)=>setStandard(e.target.value)}>
            <option value="">options</option>
            <option value="nursury">Nursury</option>
            <option value="primary">primary</option>
          </select>
        </div>
       </div>

       
        );
      default:
        return null;
    }
  };

  return (
    <div className='mx-12 mt-10 mb-10  '>
      <h2 className='bg-blue-600 text-white mx-0 px-3 py-2 rounded-xl w-fit'>Step {step}</h2>
      <form onSubmit={handleSubmit}>
        {renderForm()}
        {step !== 1 && <button type='button' className='bg-gray-700 text-white px-3 py-3 rounded-lg mr-4' onClick={handlePrevious}>Previous</button>}
        {step !== 3 ? 
          <button type='button' className='bg-gray-700 text-white px-3 py-3 rounded-lg' onClick={handleNext}>Next</button> 
          : 
          <input type="submit" value="submit" />
        }
      </form>
    </div>
  );
};

export default ChildrenRegistration;
