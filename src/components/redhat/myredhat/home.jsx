import React, { Component } from 'react';
import Navbar from "./navbar"
import Main from './main';
import Footer from './footer';

class  Home extends React.Component {

    render() { 
       
        return (
             <div className="container-fluid mt-1">

                <Main/>
                <Footer/>

            </div>
            );
    }
}
 
export default Home;