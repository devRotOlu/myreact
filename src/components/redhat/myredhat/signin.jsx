import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";


class Signin extends React.Component {

    render() { 
        return (
            <div className="container">
                <div className="row justify-content-center" style={{height:'100vh'}}>
                    <form action="" className="border align-self-center p-4" style={{width:'350px'}} onS>
                        <h3 className="text-center">Sign In</h3>
                        <hr/>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope}/></span></div>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock}/></span></div>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="input-group mb-2">
                            <input type="submit" className="btn btn-primary btn-block" value="Sign In"/>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
 
export default Signin;