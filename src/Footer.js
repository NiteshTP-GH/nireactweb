
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone, faLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <section className="bg-info py-5 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"><FontAwesomeIcon icon={faPhone} /></div>
                        <div className="col-md-4"><FontAwesomeIcon icon={faLocation} /></div>
                        <div className="col-md-4"><FontAwesomeIcon icon={faEnvelope} /></div>
                    </div>
                </div>                
            </section>
        </>
    );
  };
  
  export default Footer;