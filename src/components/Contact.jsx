import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd6fae2c-576c-487b-897d-0ab669c84fbd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='text-center p-6 py-20 lg:px-32
     w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact
        <span className=' decoration-1 font-light'> with Us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to make a move? Let's build Your future together</p>

    <form onSubmit={onSubmit} className='max-w-2x1 mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>Your name:
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
             type="text" name='Name' placeholder='Your Name' required/>
        </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email:
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
             type="text" name='Email' placeholder='Your Email' required/>
        </div>
        </div>
        <div className='text-left my-6'>
            Message:
            <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
             name="Message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600
         text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send message" }</button>
    </form>

    </div>

  )
}

export default Contact
