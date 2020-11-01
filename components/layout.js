import Navbar from './navbar';
import Head from 'next/head';
import { Component } from 'react';
import Router from 'next/router';

class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
         Condition: false
    }
    this.Navbar = React.createRef();
  }

onClick(){

  this.Navbar.current.onClickNav();
  this.setState({
      Condition: !this.state.Condition
  });

}

onPageTransitionCB(value){
  this.setState({
      Condition: !this.state.Condition
  });
}

render(){

  const onPageTransitionCB = (value) => {this.onPageTransitionCB(value)}

  return(

    <React.Fragment>
    <Head>
      <title>LPS Website</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>
    </Head>
    <header className={this.state.Condition ? "header-nav-down" : ""}>
      <Navbar
        ref={this.Navbar}
        onPageTransitionCB = {onPageTransitionCB}
      />
      <span className="nav-link" >
        <a onClick={event => this.onClick()}><i className={this.state.Condition ? "fas fa-caret-up" : "fas fa-caret-down"}></i></a>
      </span>
    </header>
    <div className={this.state.Condition ? "opacity-nav-down" : ""}>
        {this.props.children}
    </div>
    <footer>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </footer>
    <style jsx>{`
      header span
      {
        text-align: center;
      }
      .fa-caret-down, .fa-caret-up
      {
         font-size: 45px !important;
         color: #e5e5e5;
         -webkit-transform: rotateY(0deg);
         transform: rotateY(0deg);
         transition: transform 1s;
      }
      .fa-caret-down:hover, .fa-caret-up:hover {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
        transition: transform 1s;
      }
      header
      {
        background: #343a40 !important;
        z-index: 9;
      }
      .header-nav-down {
        position: absolute;
        width: 100%;
      }
      @media screen
      and (max-device-width: 1024px)
      and (min-device-width: 300px)
      {
        .fa-caret-down, .fa-caret-up
        {
            font-size: 65px !important;
        }
      }
    `}</style>
    <style jsx global>{`
      body {
        background: #343a40 !important;
        font-family: Lato,Helvetica,Arial,sans-serif;
      }
      body .container
      {
        width: 900px;
        padding-top: 50px;
        padding-bottom: 50px;
        text-align:justify;
      }
      h1,h2,h3,h4
      {
        color: #e5e5e5 !important;
      }
      p {
        font-size: 20px !important;
      }
      a:hover {
        text-decoration: none !important;
        cursor: pointer;
      }
      .opacity-nav-down
      {
        opacity: 0;
        display: none;
      }
      ::-webkit-scrollbar {
        width: 2px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      @media screen
      and (max-device-width: 1024px)
      and (min-device-width: 300px)
      {
        body .container
        {
            max-width: 900px !important;
        }
      }
    `}</style>
    </React.Fragment>

  );
}


}

export default Layout;
