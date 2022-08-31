import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_5fh7dfx', 'template_rcomeue', form.current, 'shJB6FpRWF6dVSnxf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className=' w-100 px-4'>
         <form ref={form} onSubmit={sendEmail} className=''>
      <label>Your name</label>
      <input type="text" name="from_name" className="form-control" />
      <label>Subject</label>
      <input type="text" name="subject" className="form-control" />
      <label>Your email</label>
      <input type="email" name="user_email" className="form-control" />
      <label>Message</label>
      <textarea name="message" className="form-control" />
      <input type="submit" value="Send" className="btn btn-success my-4"/>
    </form>
    
  </div>
  )
}

export default ContactForm
