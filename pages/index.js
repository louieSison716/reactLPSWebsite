import Link from 'next/link';

import { Component } from 'react';

import bootstrap from '../images/bootstrap.png';
import css3 from '../images/css3.png';
import drupal from '../images/drupal.png';
import gulp from '../images/gulp.png';
import html5 from '../images/html5.png';
import javascript from '../images/javascript.png';
import jquery from '../images/jquery.png';
import jsx from '../images/jsx.png';
import laravel from '../images/laravel.png';
import less from '../images/less.png';
import mysql from '../images/mysql.png';
import next from '../images/nextjs.png';
import node from '../images/nodejs.png';
import php from '../images/php.png';
import sass from '../images/sass.png';
import shopify from '../images/shopify.png';
import vuejs from '../images/vuejs.png';
import webpack from '../images/webpack.png';
import wordpress from '../images/wordpress.png';

class Index extends Component{
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
     <div className="home-holder">
       <div className="container">
        <h2 className="title-page fade-left">Welcome to my Website</h2>
        <p className="fade-right">My Name is Louie Pearl Sison, I have a degree on Bachelor of Science in Information Technology,
        I am pursuing the Website Development field with a company where I can improve my talent, wisdom,
        knowledge and skills and at the same time would help the company to be more successful, which in
        doing so will expand and grow. Please see the skills below that i possess as of the moment.</p>
      </div>
       <div className="skills-container">
         <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={vuejs} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>Vue.js</p>
                <h6>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications</h6>
              </div>
            </div>
           <div className="col-lg-3 col-md-6 fade-right">
             <div className="img-holder">
               <img src={jsx} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>JSX</p>
                <h6>JavaScript Syntax Extension</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-left">
             <div className="img-holder">
               <img src={jsx} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>React.js</p>
                <h6>React is an open-source, front end, JavaScript library for building user interfaces or UI components</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={next} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>Next.js</p>
                <h6>lightweight framework for static and server-rendered applications</h6>
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={less} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>LESS</p>
                <h6>Learner Style Sheets</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-right">
             <div className="img-holder">
               <img src={bootstrap} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>BOOTSTRAP</p>
                <h6>Open-source Front-end Framework</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-left">
             <div className="img-holder">
               <img src={css3} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>CSS3</p>
                <h6>Cascading Style Sheets 3</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={javascript} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>JAVASCRIPT</p>
                <h6>Client-Side Scripting Language</h6>
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={jquery} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>JQUERY</p>
                <h6>JavaScript library designed to simplify HTML DOM</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-right">
             <div className="img-holder">
               <img src={node} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>NODE</p>
                <h6>Cross-Platform JavaScript Run-Time Environment</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-left">
             <div className="img-holder">
               <img src={gulp} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>GULP</p>
                <h6>Open-Source JavaScript Toolkit</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={sass} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>SASS</p>
                <h6>Sassscript</h6>
             </div>
           </div>
        </div>
        <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="img-holder">
                <img src={webpack} className="img-responsive"/>
              </div>
              <div className={this.state.opacityholder}>
                <p>WEBPACK</p>
                <h6>Open-Source JavaScript Module Bundler</h6>
              </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-right">
             <div className="img-holder">
               <img src={php} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>PHP</p>
                <h6>Hypertext Preprocessor is a Server-Side Scripting Language </h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 fade-left">
             <div className="img-holder">
               <img src={mysql} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>MYSQL</p>
                <h6>Open Source Relational Database Management System</h6>
             </div>
           </div>
           <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={wordpress} className="img-responsive"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>WORDPRESS</p>
                <h6>Free and Open-Source Content Management System Based on PHP and MySQL</h6>
             </div>
           </div>
         </div>
         <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="img-holder">
              <img src={html5} className="img-responsive"/>
            </div>
            <div className={this.state.opacityholder}>
              <p>HTML5</p>
              <h6>Hypertext Markup Language</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 fade-right">
            <div className="img-holder">
              <img src={drupal} className="img-responsive drupal-img"/>
            </div>
            <div className={this.state.opacityholder}>
              <p>Drupal</p>
              <h6>Drupal is a free and open-source web content management framework written in PHP and distributed under the GNU General Public License</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 fade-left">
            <div className="img-holder">
              <img src={laravel} className="img-responsive"/>
            </div>
            <div className={this.state.opacityholder}>
              <p>Laravel</p>
              <h6>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
             <div className="img-holder">
               <img src={shopify} className="img-responsive shopify-img"/>
             </div>
             <div className={this.state.opacityholder}>
                <p>Shopify</p>
                <h6>Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario</h6>
             </div>
           </div>
         </div>
      </div>
      <style jsx>{`

           .shopify-img {
            height: 60px !important;
           }
           .drupal-img {
             height: 60px !important;
           }
           .home-holder{
             height:500px;
            }
           .home-holder .container p
           {
             color: #999999 !important;
           }
           .skills-container .row {
             margin-left: 0;
             margin-right: 0;
           }
           .skills-container .row div {
             height: 250px;
             text-align: center;
           }
           .skills-container .row div .img-holder {
             padding-top: 48px;
           }
           .skills-container .row div .img-holder img{
             height: 130px;
           }
           .skills-container .row div .div-opacity-holder
           {
             background-color: transparent;
             position: absolute;
             height: 250px;
             width: 90%;
             top: 0;
             left: 15px;
             -webkit-transition: background-color 0.8s ease;
             -ms-transition: background-color 0.8s ease;
             transition: background-color 0.8s ease;
           }
           .skills-container .row div .div-opacity-holder p:first-child
           {
             position: relative;
             top: 0;
             opacity: 0;
             text-align: left;
             padding-left: 15px;
             padding-right: 15px;
             color: #e5e5e5 !important;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
            }
            .skills-container .row div .div-opacity-holder h6
            {
              position: relative;
              color: #999999 !important;
              top: 15px;
              opacity: 0;
              text-align: left;
              padding-left: 15px;
              padding-right: 15px;
              -webkit-transition: opacity 0.8s ease, top 0.8s;
              -ms-transition: opacity 0.8s ease, top 0.8s;
              transition: opacity 0.8s ease, top 0.8s;
             }
           .skills-container .row div .div-opacity-holder:hover {
             cursor: pointer;
             background-color: rgba(0, 0, 0, 0.5);
             -webkit-transition: background-color 0.8s ease;
             -ms-transition: background-color 0.8s ease;
             transition: background-color 0.8s ease;
           }
           .skills-container .row div .div-opacity-holder:hover p:first-child
           {
             opacity: 1;
             top: 15px;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
           }
           .skills-container .row div .div-opacity-holder:hover h6
           {
             opacity: 1;
             top: 0;
             -webkit-transition: opacity 0.8s ease, top 0.8s;
             -ms-transition: opacity 0.8s ease, top 0.8s;
             transition: opacity 0.8s ease, top 0.8s;
           }
           .desc-holder
           {
             height: auto;
             top: -68px;
             position: relative;
           }
           .desc-holder h6
           {
             color: #999999;
           }
           .desc-holder p
           {
             color: #e5e5e5;
             margin-bottom: 0;
           }
      `}</style>
     </div>
   );
 }
}

export default Index;
