import Link from 'next/link';
import { Component } from 'react';
import Map from '../components/map';

class Contact extends Component{

 constructor(props){
   super(props);
 }

 render(){
   return(
        <div className="contact-holder">
          <div className="container">
            <h2 className="title-page fade-left">Information Details On How To Reach Me</h2>
            <div className="row fade-right">
              <div className="col-lg-12 col-md-12">
                <p><a href="mailto:louiepearl_nz@yahoo.com"><i className="fas fa-envelope"></i>louiepearl_nz@yahoo.com</a></p>
                <p><a href="tel:+64 27 263 0290"><i className="fas fa-phone"></i>+64 27 263 0290</a></p>
                <p><a href="https://www.linkedin.com/in/louie-pearl-sison-99058716a/" target="_blank"><i className="fab fa-linkedin-in"></i>Linkedin Page</a></p>
                <p><a href="http://maps.google.com/?q=Massey, Auckland, New Zealand" target="_blank"><i className="fas fa-address-card"></i>Massey, Auckland, New Zealand</a></p>
              </div>
              <div className="col-lg-12 col-md-12">
                <Map/>
              </div>
            </div>
          </div>
        <style jsx>
        {`
          .fas, .fab {
            margin-right: 10px;
          }
          .row {
            padding-top: 15px;
          }
          .row div:nth-child(2) p:nth-child(2),
          .row div:nth-child(2) p:nth-child(3)
          {
            padding-top: 15px;
          }
        `}</style>
        </div>
     );
 }

}



export default Contact;
