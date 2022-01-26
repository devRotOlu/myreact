import React, { Component } from 'react';

class  Main extends React.Component {

    style={

        width:" 18rem",
        display: "inline"

    }


    render() { 

        return (
    
                    <div className="container-fluid my-4  row justify-content-around mx-auto">

                        <div id="carouselExampleIndicators" className="carousel slide col-8" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="images/g4.jpg" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="images/g2.jpg" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="images/g5.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>


                            <div  className="col-4 align-self-center" >
                                
                                <div className="card ">
                                <img src="images/about1new.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>

                                <div className="card mt-4">
                                <img src="images/bg3new.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>


                            </div>

                    </div>
                    
        );
    }

}
 
export default Main;