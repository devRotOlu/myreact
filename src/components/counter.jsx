

import React from 'react';

class  Counter extends React.Component {

    state={
        count:0,
        class:""
    }

    getRandomColors=()=>{

        let colors= [

            "primary",
            "secondary",
            "danger",
            "success",
            "info",
            "warning",
            "light",
            "red",
            "yellow",
        ]

        let randnum= Math.floor(Math.random()*9);
        
        let classes= "container-fluid w-100 h-100 py-4 bg-";

        classes += colors[randnum];

        this.setState({class:classes});
    }

    // changeColors= setTimeout(() => { this.getRandomColors()
        
    // }, 1000);

    styles = {
        fontSize: "50px",
        fontWeight: "bold",
        imageUrl: "logo192.png",
        imageWidth: "100px",
        imageHeight: "100px",
        marginLeft: "10px",
    }

    style1={
        backgroundColor:"yellow",
        color:"white",
    }

    formatCount= ()=>{
        let count= this.state.count;
        return count === 0 ? "zero": count
    }

    handleIncrement= ()=>{

        let count= this.state.count;

        this.setState({count:count+1})

    }

    render() { 

        return (<div className={this.state.class} >

                    

                    { <img src={this.styles.imageUrl} width={this.styles.imageWidth} height={this.styles.imageHeight}/>}
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement}>Click</button>
                    <button onClick={this.getRandomColors} className="mx-4">Colors</button>
                    <button onClick={this.getRandomColors} className="mx-4 btn btn-sm btn-danger">Delete</button>

                </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";


        classes += this.state.count === 0 ? "warning" : "success";
        return classes;
    }
}
 
export default Counter;