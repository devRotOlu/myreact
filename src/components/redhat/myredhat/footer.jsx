import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import{faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";


//import {faFacebook} from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {

    style={

        fontSize:"1.2rem",

        fontWeight:600,

        marginTop:"10px",

        color: "white",

        border:{

            borderBottom:"solid grey thin",

        },

        list:{
            listStyle: "none",
            color:"black",
        },

        input:{
            boxSizing:"borderBox",
            width:"40px",
            //length:"60px",
            outline:"none",
            padding:"2px",
            marginLeft:"20px",
        }

    };

    render() { 
        return (

            <div className="row container-fluid mx-auto pt-2 justify-content-around bg-info mb-3 py-4">

                <div className="col-4"  style={{borderRight:this.style.border.borderBottom,}}>
                    <h1 color="black">Bootie</h1>
                    <p className="text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum minus, doloremque aliquid quos repudiandae sapiente? Nisi aperiam odio, sint esse sit ipsam dicta unde tempore numquam. Officiis animi soluta reprehenderit?</p>
                    <p>CATCH ON SOCIALS</p>
                    <span></span>
                </div>

                <div className="col-7">

                    <div className="mb-4 pb-2" style={{borderBottom:this.style.border.borderBottom,}}>

                        <h2>NEWSLETTER</h2>
                        <p className="text-light">By subscribing to our mailing list you will always get latest news and updates from us.</p>
                        <div><input type="text" placeholder="Enter your Email" style={this.style.input}/><span></span></div>

                    </div>

                    <div className="row justify-content-around">

                        <ul style={this.style.list} className="col-5">
                            <li style={{fontSize:this.style.fontSize, fontWeight:this.style.fontWeight,}}>INFORMATION</li>
                            <li style={{marginTop:this.style.marginTop,}}>HOME</li>
                            <li style={{marginTop:this.style.marginTop,}}>ABOUT US</li>
                            <li style={{marginTop:this.style.marginTop,}}>GALLERY</li>
                            <li style={{marginTop:this.style.marginTop,}}>SERVICES</li>
                            <li style={{marginTop:this.style.marginTop,}}>CONTACT US</li>
                        </ul>

                        <ul style={this.style.list} className="col-5">

                        <li style={{fontSize:this.style.fontSize, fontWeight:this.style.fontWeight,}}>CONTACT INFO</li>

                            <li style={{marginTop:this.style.marginTop,}}><p>PHONE</p><FontAwesomeIcon Icon={faEnvelopeOpen}/><span className="ml-2 mt-0" style={{color:this.style.color,}}>08140836550</span></li>

                            <li style={{marginTop:this.style.marginTop,}}>
                                <p>EMAIL</p>
                                <span className="ml-2"style={{color:this.style.color,}}>
                                rotimiolumide68@gmail.com
                                </span>
                            </li>

                            <li style={{marginTop:this.style.marginTop,}}>
                            
                                <p>LOCATION</p>
                                <span className="ml-2"style={{color:this.style.color,}}>Ikeja lagos</span>
                                
                            </li>
                        </ul>

                    </div>
                 
                </div>

            </div>
        );
    }
}
 
export default Footer;