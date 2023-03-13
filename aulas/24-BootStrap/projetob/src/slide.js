import React from "react";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

function slideshow(){
    return(
        <div>
            <h1>Slide Show</h1>
            <hr/>
            <Carousel interval={300}>
                <Carousel.Item>
                    <img src={img1} alt="imagem1"/>
                </Carousel.Item >
                <Carousel.Item >
                    <img src={img2} alt="imagem1"/>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={img3} alt="imagem1"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default slideshow;