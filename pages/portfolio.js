import Link from 'next/link';

import { Component } from 'react';

import airvanuatu from '../images/airvanuatu.png';
import bitcoinChecker from '../images/bitcoinChecker.png';
import darbyAutoCenter from '../images/darbyAutoCenter.png';
import discovery from '../images/discovery.png';
import graceAutoSales from '../images/graceAutoSales.png';
import gwtlogo from '../images/gwtlogo.png';
import libertyAutoplex from '../images/libertyAutoplex.png';
import lowMilesAuto from '../images/lowMilesAuto.png';
import nht from '../images/nht.png';
import yalCars from '../images/yalCars.png';

class Portfolio extends Component{
  constructor(props){
   super(props);

   this.state = {
     opacityholder: 'div-opacity-holder'
   }
 }

componentDidMount() {
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
     this.setState({
         opacityholder:'desc-holder'
     });
   }
 }

render(){
   return(
     <div className="portfolio-holder">
        <div className="container">
          <h2 className="title-page fade-left">Website / Website Application Portfolio</h2>
          <p className="fade-right">
            I started my IT industry career mainly on WordPress PHP Development and Front-end Development, currently i am now focusing on
            Front-end Development mainly using React and Nextjs.
          </p>
          <div className="row">
          <div className="col-lg-6 col-md-6 fade-right">
            <div className="img-holder">
              <img src={gwtlogo} className="img-responsive"/>
            </div>
            <div className={this.state.opacityholder}>
              <p>Go With Tourism</p>
              <h6>Drupal PHP Vuejs Html SCSS less Bootstrap Media Query</h6>
              <a href="https://www.gowithtourism.co.nz/" target="_blank"><i className="fas fa-link"></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 fade-left">
            <div className="img-holder">
              <img src={airvanuatu} className="img-responsive"/>
            </div>
            <div className={this.state.opacityholder}>
              <p>Air Vanuatu</p>
              <h6>Vuejs Html SCSS less Bootstrap Media Query</h6>
              <a href="https://www.airvanuatu.com/" target="_blank"><i className="fas fa-link"></i></a>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 fade-right">
              <div className="img-holder">
                <img src={lowMilesAuto} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Low Miles Auto</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.lowmiles.net/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 fade-left">
              <div className="img-holder">
                <img src={libertyAutoplex} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Liberty Autoplex</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.libertyautoplex.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 fade-right">
              <div className="img-holder">
                <img src={yalCars} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Yalcars</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.yalcars.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 fade-left">
              <div className="img-holder">
                <img src={nht} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>North Hollywood Toyota</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.northhollywoodtoyota.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 fade-right">
              <div className="img-holder">
                <img src={discovery} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Discovery Auto Tampa</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.discoveryautotampa.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 fade-left">
              <div className="img-holder">
                <img src={graceAutoSales} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Grace Auto Sales and Service</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.graceautosalesandservice.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 fade-right">
              <div className="img-holder">
                <img src={darbyAutoCenter} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Darby Auto Center</p>
                <h6>WordPress Php JQuery JavaScript c# Html CSS less Bootstrap Media Query Elastic Search</h6>
                <a href="https://www.darbyautocenter.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 fade-left">
              <div className="img-holder">
                <img src={bitcoinChecker} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Bitcoin Checker</p>
                <h6>ReactJS JavaScript JQuery html CSS less Bootstrap Third Party API</h6>
                <a href="https://bitcoinchecker.netlify.com/" target="_blank"><i className="fas fa-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .portfolio-holder .container {
            color: #999999 !important;
          }
          .portfolio-holder .container .row {
            padding-top: 15px;
          }
          .portfolio-holder .container img{
            height: auto;
            width: 100%;
          }
          .div-opacity-holder
          {
            background-color: transparent;
            position: absolute;
            height: 220px;
            width: 93.5%;
            top: 0;
            left: 15px;
            -webkit-transition: background-color 0.8s ease;
            -ms-transition: background-color 0.8s ease;
            transition: background-color 0.8s ease;
          }
          .div-opacity-holder:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.8);
            -webkit-transition: background-color 0.8s ease;
            -ms-transition: background-color 0.8s ease;
            transition: background-color 0.8s ease;
          }
          .div-opacity-holder a {
            position: absolute;
            bottom: 0;
            left: 16px;
            opacity: 0;
            -webkit-transition: bottom 0.8s ease-out, opacity 0.8s ease-out;
            -ms-transition: bottom 0.8s ease-out, opacity 0.8s ease-out;
            transition: bottom 0.8s ease-out, opacity 0.8s ease-out;
          }
          .div-opacity-holder:hover a {
            bottom: 9px;
            opacity: 1;
            -webkit-transition: bottom 0.8s ease, opacity 0.8s ease;
            -ms-transition: bottom 0.8s ease, opacity 0.8s ease;
            transition: bottom 0.8s ease, opacity 0.8s ease;
          }
          .div-opacity-holder p {
              position: absolute;
              left: 135px;
              opacity: 0;
              top: 10px;
              color: #e5e5e5 !important;
              -webkit-transition: left 0.8s ease-out, opacity 0.8s ease-out;
              -ms-transition: left 0.8s ease-out, opacity 0.8s ease-out;
              transition: left 0.8s ease-out, opacity 0.8s ease-out;
          }
          .div-opacity-holder:hover p {
            left: 15px;
            opacity: 1;
            -webkit-transition: left 0.8s ease, opacity 0.8s ease;
            -ms-transition: left 0.8s ease, opacity 0.8s ease;
            transition: left 0.8s ease, opacity 0.8s ease;
          }
          .div-opacity-holder h6 {
              position: absolute;
              left: 17px;
              top: 70px;
              opacity: 0;
              padding-right: 20px;
              color: #999999 !important;
              -webkit-transition: top 0.8s ease-out, opacity 0.8s ease-out;
              -ms-transition: top 0.8s ease-out, opacity 0.8s ease-out;
              transition: top 0.8s ease-out, opacity 0.8s ease-out;
          }
          .div-opacity-holder:hover h6 {
              top: 44px;
              opacity: 1;
              -webkit-transition: top 0.8s ease-out, opacity 0.8s ease-out;
              -ms-transition: top 0.8s ease-out, opacity 0.8s ease-out;
              transition: top 0.8s ease-out, opacity 0.8s ease-out;
          }
          .desc-holder
          {
            margin-bottom: 15px;
          }
          .desc-holder p
          {
            margin-bottom: 0;
            color: #e5e5e5;
          }
          .desc-holder h6
          {
            color: #999999;
          }

          @media screen
          and (max-device-width: 768px)
          and (min-device-width: 300px)
          {
            .div-opacity-holder {
              height: 222px !important;
            }

          }
       `}</style>
     </div>
   );
 }
}



export default Portfolio;
