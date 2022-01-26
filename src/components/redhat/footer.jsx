import React, { Component } from 'react';
import {fontAwesome}


class Footer extends React.Component {

    render() {

       let today=new Date();
       let year= today.getFullYear();

        return (

        <div>
            <span>All right reserved. Copyright &copy;{year}</span>
        </div>

        );
    }
}
 
export default Footer;