import emailjs from "@emailjs/browser";
import {  useState } from "react";

export function Footer() {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_d5oh6m4', 'template_2qzn4dh', e.target, 'pdhrxA6N0R7PFkN52')
        .then((result) => {
          console.log(result.text);
          clearForm();
        }, (error) => {
          console.log(error.text);
        });
    }
  };
  return (
    <div id="vision">
      <div className="text-center mb-16 px-12">
        <h1 className=" md:text-6xl text-5xl  font-ruso tracking-widest    text-[#60e796]  font-extrabold   uppercase">Vision</h1>
        <p className="mt-10 text-xl   font-bold text-gray-200 leading-10 ">
          At BAHO-APP, our mission is to pioneer the advancement of voice
          technologies using artificial intelligence for Native African
          languages. BAHO-APP started with kinyarwanda language to pave the way,
          empower communities and preserve our undereppresented native African
          languages in the digital landscape
        </p>
      </div>

      <main
        style={{ backgroundImage: "url('/giraffe.jpg')" }}
        className="text-center bg-cover bg-no-repeat bg-center font-poppins "
      >


        <div className='    md:items-end md:absolute justify-center items-center     ml-4 text-sm  md:px-2 md:pt-24 pt-32  flex'>
          <div  className=" w-72">
          <p className=" my-4 font-bold  text-xl text-[#27603e]   ">Send Us Feedback</p>
          <div>
          {/* <form onSubmit={sendEmail}>
      <input type="text" name="name" className="mb-2 focus:outline-none  h-12  rounded-sm px-2 py-2 w-full" placeholder="Your Name" />
      <br/>
      <input type="email" name="email" className="mb-2 h-12 focus:outline-none rounded-sm px-2 py-2 w-full"  placeholder="Your Email" />
      <br></br>
      <textarea name="message" className="mb-2 focus:outline-none rounded-sm w-full px-2 py-2 h-24" placeholder="Your Feedback"></textarea>
      <br></br>
      <button type="submit " className="w-full focus:outline-none bg-[#27603e] py-2 rounded-sm text-white font-bold" >Send</button>
    </form> */}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="mb-2 focus:outline-none  h-12  rounded-sm px-2 py-2 w-full"
      />
      {errors.name && <p className="error text-red-500">{errors.name}</p>}
      <input
      className="mb-2 h-12 focus:outline-none  rounded-sm px-2 py-2 w-full"
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error text-red-500">{errors.email}</p>}
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="mb-2 focus:outline-none rounded-sm w-full px-2 py-2 h-24"
      ></textarea>
      {errors.message && <p className="error text-red-500 ">{errors.message}</p>}
      <button type="submit" className="w-full focus:outline-none bg-[#27603e] py-2 rounded-sm text-white font-bold">Send</button>
    </form>
          </div>
          </div>
        </div>
        <div className="flex h-64 md:h-[384px] lg:h-[420px] xl:h-[500px] items-end justify-end  mr-4 md:space-x-[30%] ">
          <div className="flex">
            <p className="font-bold mt-[1%] text-sm mr-1 text-[#ffffff]">
              Powered By
            </p>
            <p className="text-[#27603e]  text-1xl font-bold "> BAHO-APP </p>
            <p className="text-[#27603e] mt-[3%]  text-xs font-bold  ml-[0.2em]">
              CBC
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
