import FormExample from '../Formcode';
import imgxlg from '../assets/images/1000x1000.jpg';
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us';
});  
    return (
      <>
        <section className="bg-light">
        <div className="container py-5">
        <div className="row">
        <div className="col-md-5 text-center">
          <img
          className="d-block w-100"
          src={imgxlg}
          alt="First slide"
          />
        </div>          
        <div className="col-md-7 text-center">
            <FormExample />
        </div>              
        </div>
        </div>            
        </section>        
      </>
    )
  };
  
  export default Contact;