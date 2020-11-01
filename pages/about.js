import Link from 'next/link';
import { Wave, Random  } from 'react-animated-text';
import React, { Component } from 'react';

class About extends Component {

constructor(props){
  super(props);

  this.state = {
      sentenceValue: 'describe',
      paused: false,
      firstCondition: false,
      secondCondition: false,
      thirdCondition: false,
      defaultButton: 'list-group-item disable',
      spanDirection: '',
      handleHoverCondition: false,
      tiltDirection: ''
   }

   this.onhandleHover = this.onHandleHover.bind(this);
}

_onClick(event){
  if(event === 'describe'){
     this.setState({
         sentenceValue: event,
         firstCondition: !this.state.firstCondition,
         secondCondition: false,
         thirdCondition: false,
         paused: false
       });
   }
   else if(event === 'education'){
     this.setState({
         sentenceValue: event,
         firstCondition: false,
         secondCondition: !this.state.secondCondition,
         thirdCondition: false,
         defaultButton: 'first-list-child list-group-item',
         paused: false
       });
   }
   else if(event === 'recent'){
     this.setState({
         sentenceValue: event,
         firstCondition: false,
         secondCondition: false,
         thirdCondition: !this.state.thirdCondition,
         defaultButton: 'first-list-child list-group-item',
         paused: false
       });
   }
}
onHandleHover(event){

    this.setState({
      handleHoverCondition: !this.state.handleHoverCondition,
      paused: true
    });

    switch(event) {
        case 'tilt-right-first':
          this.setState({
             tiltDirection: 'list-group fade-right tilt-right-first'
          });
          break;
        case 'tilt-left-first':
          this.setState({
            tiltDirection: 'list-group fade-right tilt-left-first'
          });
          break;
        case 'tilt-right-sec':
          this.setState({
             tiltDirection: 'list-group fade-right tilt-right-sec'
          });
          break;
        case 'tilt-left-sec':
          this.setState({
            tiltDirection: 'list-group fade-right tilt-left-sec'
          });
          break;
        case 'tilt-right-third':
          this.setState({
             tiltDirection: 'list-group fade-right tilt-right-third'
          });
          break;
        case 'tilt-left-third':
          this.setState({
            tiltDirection: 'list-group fade-right tilt-left-third'
          });
          break;
        default:

      }

}

render() {

  return(
    <div className="about-holder">
       <div className="container">
         <h2 className="title-page fade-left">Information About Me / Myself</h2>
         <ul className={this.state.handleHoverCondition ? this.state.tiltDirection : "list-group fade-right"}>
           <li className={this.state.firstCondition ? "list-group-item disable" : this.state.defaultButton} onClick={event => this._onClick(event = "describe")}>
              <div className="tilt-left" onMouseEnter={event => this.onHandleHover( event = "tilt-left-first" )} onMouseLeave={event => this.onHandleHover()}></div>
              <span>About Me</span>
              <div className="tilt-right" onMouseEnter={event => this.onHandleHover( event = "tilt-right-first" )} onMouseLeave={event => this.onHandleHover()}></div>
           </li>
           <li className={this.state.secondCondition ? "list-group-item disable" : "second-list-child list-group-item"} onClick={event => this._onClick(event = "education")}>
              <div className="tilt-left" onMouseEnter={event => this.onHandleHover( event = "tilt-left-sec" )} onMouseLeave={event => this.onHandleHover()}></div>
              <span>My Education</span>
              <div className="tilt-right" onMouseEnter={event => this.onHandleHover( event = "tilt-right-sec" )} onMouseLeave={event => this.onHandleHover()}></div>
           </li>
           <li className={this.state.thirdCondition ? "list-group-item disable" : "third-list-child list-group-item"} onClick={event => this._onClick(event = "recent")}>
              <div className="tilt-left" onMouseEnter={event => this.onHandleHover( event = "tilt-left-third" )} onMouseLeave={event => this.onHandleHover()}></div>
              <span>My Recent Work Experiences</span>
              <div className="tilt-right" onMouseEnter={event => this.onHandleHover( event = "tilt-right-third" )} onMouseLeave={event => this.onHandleHover()}></div>
           </li>
         </ul>
         <ContentAbout
            sentenceValue = {this.state.sentenceValue}
            paused = {this.state.paused}
         />
    </div>
    <style jsx>{`

        h1 {
          padding-bottom: 25px;
        }
        .list-group {
          display: block !important;
          height: 50px;
          padding-top: 5px;
         }
         .list-group-item {
           float: left;
           position: inherit;
           top: 0;
           margin-right: 15px;
           font-weight: 600;
           padding: 0.2rem 1rem;
           color: #e5e5e5 !important;
           background-color: rgba(79,79,79,1);
           -webkit-border-radius: 8px;
           -moz-border-radius: 8px;
           border-radius: 8px;
           text-align: center;
           -webkit-box-shadow: 0px 9px 0px rgba(79,84,79,1), 0px 9px 25px rgba(0,0,0,.7);
           -moz-box-shadow: 0px 9px 0px rgba(79,84,79,1), 0px 9px 25px rgba(0,0,0,.7);
           box-shadow: 0px 9px 0px rgba(79,84,79,1), 0px 9px 25px rgba(0,0,0,.7);
           -ms-transform: rotate(0deg);
           -webkit-transform: rotate(0deg);
           transform: rotate(0deg);
           -webkit-transition: all .1s ease;
           -moz-transition: all .1s ease;
           -ms-transition: all .1s ease;
           -o-transition: all .1s ease;
           transition: all .1s ease;
        }
         .list-group-item:active {
            -webkit-box-shadow: 0px 3px 0px rgba(79,84,79,1), 0px 3px 6px rgba(0,0,0,.9);
            -moz-box-shadow: 0px 3px 0px rgba(79,84,79,1), 0px 3px 6px rgba(0,0,0,.9);
            box-shadow: 0px 3px 0px rgba(79,84,79,1), 0px 3px 6px rgba(0,0,0,.9);
            position: relative;
            top: 6px;
        }
         .list-group-item:hover
         {
           cursor: pointer;
           position: relative;
           top:2px;
         }
         .tilt-left
         {
           position: absolute;
           top:0;
           left:0;
           height:40px;
           width: 35%;
         }
         .tilt-right
         {
           position: absolute;
           top:0;
           right:0;
           height:40px;
           width: 35%;
         }
         .tilt-right-first .first-list-child,
         .tilt-right-sec .second-list-child,
         .tilt-right-third .third-list-child {
           -ms-transform: rotate(4deg);
           -webkit-transform: rotate(4deg);
           transform: rotate(4deg);
         }
         .tilt-left-first .first-list-child,
         .tilt-left-sec .second-list-child,
         .tilt-left-third .third-list-child {
           -ms-transform: rotate(-4deg);
           -webkit-transform: rotate(-4deg);
           transform: rotate(-4deg);
         }
         .disable
         {
           font-weight: 600;
           pointer-events:none;
           position: relative;
           top:2px;
         }

         @media only screen
          and (min-device-width: 320px)
          and (max-device-width: 1366px)
          and (-webkit-min-device-pixel-ratio: 2) {
            .tilt-left, .tilt-right {
              visibility: hidden;
            }
        }
      `}</style>
    </div>

  );
}

}

export default About;
export const ContentAbout = ({sentenceValue, paused}) => {

let TitleValue = "" ;
let MainContent = () => (
   <p>{TitleValue}</p>
);

if(sentenceValue === 'describe'){
    TitleValue = "About Me";
    MainContent = () => (
      <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <span>
              <h3>
              <Wave
                  text={TitleValue}
                  effect="jump"
                  effectDirection="down"
                  speed={40}
                  iterations={1}
                  paused={paused}
              />
              </h3>
             </span>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
              <p>My name is Louie Pearl Sison, born and raised in the Philippines
                as mentioned on my home page i'm a  graduate of Bachelor of Science In Information Technology
                at Informatics College which is based in the philippines.
              </p>
              <p>
                I'm a Website / Web App Developer for more than 3 years now, my very first job was a WordPress / front-end developer at 4thshift
                Global Solutions based on Makati, Metro Manila Philippines, I worked for over 9 months there then i was hired at Nowcom global
                Solutions for Mid Software Engr for over 2 years and a month which was also for WordPress / front-end Developer. I am also doing freelance work for Nextjs and Rectjs Applications.
              </p>
              <p>
                I can say that i grew up working on Nowcom, not only as a Website Developer but also as a human being because i learned a lot from
                how to handle stress to how to handle tasks the correct way, for example, what is the right thing to do if for example you have a bug on the
                production sites etch. i worked at Nowcom for over 2 beautiful and properous years and 1 month, i left nowcom as a Mid Software Engr.
              </p>
              <p>
                Then came an opportunity to go abroad, I am now staying here in New Zealand to be with my future loving wife, which in doing so
                will try the waters here in New Zealand in terms of the IT world. I am always very passionate when it comes to work because i believe
                you will always need to prove something, i always loved to prove doubters wrong, i guess that is my thing.
              </p>
              <p>
                I always love to try new things, new Technologies, new learnings, specially in the IT industry. you should always be updated on the New
                Technologies in the market so that your skills and knowledge will also be the latest trends. I admit i'm still not the seasoned veteran
                Website Developer, but i think what i can put on the table is hardwork, passion and will not say "No" for an answer. i will always
                find the answer no matter what. ow and yeah not to mention im easy to get along with. my communication skills is crisp as a fried chicken can be.
              </p>
              <p>
                So yeah, if you think im very well suited on your company, please hit me up at <Link href="/contact"><a>Contact Me</a></Link>
              </p>
              <p>
               P.S. Im not a Website Designer so kindly excuse my UI but i can definitely work with Website Designer if a project needs a very good UI/UX.
              </p>
          </div>

      </div>

    );
}
else if(sentenceValue === 'education'){

  TitleValue = "My Education";
  MainContent = () => (
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <span>
            <h3>
            <Wave
                text={TitleValue}
                effect="jump"
                effectDirection="down"
                speed={40}
                iterations={1}
                paused={paused}
                />
            </h3>
          </span>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
           <ul>
              <li>Bachelor of Science In Information Technology - Informatics College Eastwoord</li>
              <li>Advance International Diploma in Information Technology (2 Year Course) - Informatics College Legazpi</li>
              <li>Bachelor of Science In Nursing - University of Sto Thomas Legazpi</li>
           </ul>
        </div>
     </div>
  );
}
else if(sentenceValue === 'recent'){
  TitleValue = "My Recent Work Experiences";
  MainContent = () => (
    <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <span>
            <h3>
            <Wave
                text={TitleValue}
                effect="jump"
                effectDirection="down"
                speed={40}
                iterations={1}
                paused={paused}
                />
            </h3>
          </span>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12">
        <ul>
           <li>4thShift Global Solutions - WordPress Developer</li>
           <li>Nowcom Global Solutions - Mid Software Engineer (WordPress/Front-end Developer)</li>
           <li>Freelance - React JS / Next JS</li>
        </ul>
     </div>
    </div>

  );
}
return (
    <div className="content-about-holder">
       <MainContent />
    <style jsx>{`
      .content-about-holder {
        position: relative;
        padding-top: 20px;
        text-align: justify !important;
        font-size: 20px;
        color: #999999;
      }
    `}</style>
    </div>
  );

};
