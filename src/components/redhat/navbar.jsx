import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {

    styles={

        list:{
            display: "inline-block",
            margin: "30px"
        }
    }

    render() { 
        return (
            
             <div className="my-5">

                <img src="logo192.png" width="50px"/>
                <ul style={{listStyle:"none", float:"right"}}>
                    <li style={this.styles.list}><FontAwesomeIcon Icon={faUser}/>Sign-Up</li>
                    {/* <li style={this.styles.list}><FontAwesomeIcon Icon={faSignIn}/>Sign In</li> */}
                </ul>

              </div>);
    }

}
 
export default Navbar;