import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFiles/button.css'
import SliderData from './SliderData';
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Button = () => {


    const [imageIndex, setImageIndex] = useState(0);
    const { image, name } = SliderData[imageIndex];

    const checkImage = (number) => {
        if (number > SliderData.length - 1) {
            return 0
        }
        if (number < 0) {
            return SliderData.length - 1
        }
        return number;
    }
    const nextImage = () => {
        let newImage = imageIndex + 1;
        setImageIndex(checkImage(newImage));

    }
    const prevImage = () => {
        let newImage = imageIndex - 1;
        setImageIndex(checkImage(newImage));

    };

    useEffect(() => {
        let timerId = setInterval(() => { nextImage() }, 3000);
        return () => { clearInterval(timerId) }
    }, [imageIndex]);

    return (
        <div>
            <section className="slider-section">
                <img src={image} alt={name} />
                <div className="btn-container">
                    <button onClick={prevImage} style={{ color: 'white' }} className="prev-btn">
                        <FaChevronLeft />
                    </button>
                    <div className="con">
                        <h1 className="head">STAR PHARMACY</h1>

                        {/* <button className="btnd">Donate Now</button> */}
                        <Link to="/Login" className='aa'>
                            ADMIN
                        </Link>
                        <Link to="/Supplierlogin" className='aa'>

                            SUPPLIER

                        </Link>

                    </div>
                    <button onClick={nextImage} style={{ color: 'white' }} className="next-btn">
                        <FaChevronRight />
                    </button>
                </div>
            </section>
            {/* <Link to="/Login" className='aa'>
            ADMIN
     </Link>
            <Link to="/Supplierlogin" className='aa'>

                SUPPLIER

            </Link>  */}

        </div>
    )
}

export default Button
