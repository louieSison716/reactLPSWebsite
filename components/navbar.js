import Link from 'next/link';
import { Component } from 'react';
import Router from 'next/router';

class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      Condition: false
    }
  }

  onClickNav(){

    this.setState({
        Condition: !this.state.Condition
      });

  }

  onPageTransition(value){
    const currentUrl = document.location.href;
    const nextUrl = document.location.origin + value
    this.setState({
        Condition: !this.state.Condition
      });
    this.props.onPageTransitionCB(value);
    if(currentUrl !== nextUrl){
      setTimeout(() => Router.push(value), 500)
    }
  }

  render(){
    return(
      <nav className={this.state.Condition ? "navbar-down navbar justify-content-center" : "navbar justify-content-center"}>
         <ul className="navbar-nav">
            <li className="nav-item text-center">
                <a className="nav-link" onClick={value => this.onPageTransition(value = "/")}>Home</a>
            </li>
            <li className="nav-item text-center">
                <a className="nav-link" onClick={value => this.onPageTransition(value = "/about")}>About</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" onClick={value => this.onPageTransition(value = "/portfolio")}>Portfolio</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" onClick={value => this.onPageTransition(value = "/contact")}>Contact</a>
            </li>
          </ul>
          <style jsx>{`
            .navbar-nav
            {
              width: 200px !important;
            }
            .navbar
            {
              visibility: hidden;
              opacity:0;
              height: 0;
              padding: 0px;
              -webkit-transition: height 0.8s ease, visibility 1s ease,opacity 1s ease;
              -moz-transition: height 0.8s ease, visibility 1s ease,opacity 1s ease;
              -o-transition: height 0.8s ease, visibility 1s ease,opacity 1s ease;
              transition: height 0.8s ease, visibility 1s ease,opacity 1s ease;
            }
            .navbar-down
            {
              height: 550px;
              visibility: visible;
              opacity: 1
            }
            .navbar a {
              font-size: 25px;
              color: #e5e5e5;
              -webkit-transition: font-size 2s;
              -moz-transition: font-size 2s;
              -o-transition: font-size 2s;
              transition: font-size 2s;
            }
            .navbar-down a:hover
            {
              font-size: 38px !important;
              color: #fffffff !important;
            }
            @media screen
            and (max-device-width: 1024px)
            and (min-device-width: 300px)
            {
              .navbar-down a {
                font-size: 38px !important;
              }

            }
          `}</style>
       </nav>

    );
  }



}



export default Navbar;
