import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faUser,faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";
// import Axios from './axios';

class Signup extends React.Component {

    render() { 
        return (
            <div className="container">
                <div className="row justify-content-center" style={{height:'100vh'}}>
                    <form action="" className="border align-self-center p-4" style={{width:'350px'}} onSubmit={this.props.onHandleSubmit}>
                        <h3 className="text-center">Sign Up</h3>
                        <hr/>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faUser}/></span></div>
                            <input type="text" name="username"className="form-control" id="username" placeholder="Username" onChange={this.props.onHandleChange}/>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope}/></span></div>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock}/></span></div>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={this.props.onHandleChange}/>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock}/></span></div>
                            <input type="password" name="confirm" id="conform" className="form-control" placeholder="Confirm Password" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-2">
                            <input type="submit" className="btn btn-primary btn-block" value="Sign up"/>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
 
export default Signup;