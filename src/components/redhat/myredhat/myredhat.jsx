import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {withRouter} from "react-router";
import Home from './home';
import Navbar from './navbar';
import Signin from './signin';
import Signup from './signup';
import Dashboard from './dashboard';
import axios from 'axios';
import { post } from 'jquery';
import Swal from 'sweetalert2';

class Redhat extends React.Component {

    state={

        user:{
            username:"",
            email:"",
            password:"",
        },

        submitted:false,

        authenticated:false,

    }

    handleChange= e=>{

        let input=e.target;

        const user={...this.state.user,[input.name]:input.value};

        this.setState({user:user});

    }

    // handleSubmit=e=>{

    //     e.preventDefault();

    //     const{email, username,password}=this.state.user;

    //     const post={email,username,password}

    //     axios.post("https://reqres.in/api/users",post).then(response=>{

    //         console.log("server response loading...",response)

    //         if (response.data!==0) {
    //             Swal.fire({
    //                 title:"Sucess",
    //                 text:"Signup was successful",
    //                 icon:"success"

    //             })                
    //         }
    //     })
    // }

    handleSubmit=e=>{

        e.preventDefault();

        const{email, username,password}=this.state.user;

        const post={email,username,password}

        axios.post("https://reqres.in/api/users",post).then(response=>{

            console.log("server response loading...",response)

            if (response.data !==0) {
                Swal.fire({
                    title:"Sucess",
                    text:"Signup was successful",
                    icon:"success",
                })                
            }
        })
    }


    render() { 

        return (
            
        <BrowserRouter>

            <React.Fragment>

                <Navbar />
                
                <Routes>

                    <Route path="/" element={<Home onHandleChange={this.handleChange} props={this.state}/>}/>
                    <Route path="/signin" element={<Signin onHandleSubmit={this.handleSubmit} onHandleChange={this.handleChange} props={this.state}/>}/>
                    <Route path="/signup" element={<Signup onHandleSubmit={this.handleSubmit} onHandleChange={this.handleChange} props={this.state}/>}/>
                    <Route path="/dasboard" element={<Dashboard onHandleChange={this.handleChange} props={this.state}/>}/>

                </Routes>                

            </React.Fragment>

        </BrowserRouter>
        
        );
    }
}
 
export default withRouter(Redhat);