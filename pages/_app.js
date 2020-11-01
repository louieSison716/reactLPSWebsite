import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import { PageTransition } from 'next-page-transitions';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <PageTransition timeout={2000} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </Layout>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            background-color: transparent;
            transition: opacity 5s ease;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          .page-transition-enter .fade-left{
            -ms-transform: translate(200px,0px);
            -webkit-transform: translate(200px,0px);
            transform: translate(200px,0px);
            transition: transform 1.5s ease;
          }
          .page-transition-enter-active .fade-left{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 1.5s ease;
          }
          .page-transition-enter .fade-right {
            -ms-transform: translate(-200px,0px);
            -webkit-transform: translate(-200px,0px);
            transform: translate(-200px,0px);
            transition: transform 1.5s ease;
          }
          .page-transition-enter-active .fade-right{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 1.5s ease;
          }

          .page-transition-exit .fade-left{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 0.5s ease;
          }
          .page-transition-exit-active .fade-left{
            -ms-transform: translate(200px,0px);
            -webkit-transform: translate(200px,0px);
            transform: translate(200px,0px);
            transition: transform 0.5s ease;
          }
          .page-transition-exit .fade-right{
            -ms-transform: translate(0px,0px);
            -webkit-transform: translate(0px,0px);
            transform: translate(0px,0px);
            transition: transform 0.5s ease;
          }
          .page-transition-exit-active .fade-right{
            -ms-transform: translate(-200px,0px);
            -webkit-transform: translate(-200px,0px);
            transform: translate(-200px,0px);
            transition: transform 0.5s ease;
          }

          @media screen
          and (max-device-width: 1024px)
          and (min-device-width: 300px)
          {
            .page-transition-enter .fade-left{
              -ms-transform: translate(40px,0px);
              -webkit-transform: translate(40px,0px);
              transform: translate(40px,0px);
              transition: transform 1.5s ease;
            }
            .page-transition-enter-active .fade-left{
              -ms-transform: translate(0px,0px);
              -webkit-transform: translate(0px,0px);
              transform: translate(0px,0px);
              transition: transform 1.5s ease;
            }
            .page-transition-exit .fade-left{
              -ms-transform: translate(0px,0px);
              -webkit-transform: translate(0px,0px);
              transform: translate(0px,0px);
              transition: transform 1.5s ease;
            }
            .page-transition-exit-active .fade-left{
              -ms-transform: translate(40px,0px);
              -webkit-transform: translate(40px,0px);
              transform: translate(40px,0px);
              transition: transform 0.5s ease;
            }

            .page-transition-exit .fade-right{
              -ms-transform: translate(0px,0px);
              -webkit-transform: translate(0px,0px);
              transform: translate(0px,0px);
              transition: transform 0.5s ease;
            }
            .page-transition-exit-active .fade-right{
              -ms-transform: translate(-40px,0px);
              -webkit-transform: translate(-40px,0px);
              transform: translate(-40px,0px);
              transition: transform 0.5s ease;
            }
            .page-transition-enter .fade-right {
              -ms-transform: translate(-40px,0px);
              -webkit-transform: translate(-40px,0px);
              transform: translate(-40px,0px);
              transition: transform 1.5s ease;
            }
            .page-transition-enter-active .fade-right{
              -ms-transform: translate(0px,0px);
              -webkit-transform: translate(0px,0px);
              transform: translate(0px,0px);
              transition: transform 1.5s ease;
            }

          }

        `}</style>
      </Container>
    )
  }
}
