import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Footer.css";

function Footer(){
    return(
        <>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>locations</h3>
                        <Link to="/">india</Link>
                        <Link to="/">japan</Link>
                        <Link to="/">russia</Link>
                        <Link to="/">USA</Link>
                        <Link to="/">france</Link>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/menu">menu</Link>
                        <Link to="/review">review</Link>
                        <Link to="/cart">cart</Link>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <Link to="/">+123-456-7890</Link>
                        <Link to="/">+111-222-3333</Link>
                        <Link to="/">shaikhanas@gmail.com</Link>
                        <Link to="/">anasbhai@gmail.com</Link>
                        <Link to="/">mumbai,india - 400104</Link>
                    </div>
                    <div className="box">
                        <h3>follow us</h3>
                        <Link to="/">facebook</Link>
                        <Link to="/">twitter</Link>
                        <Link to="/">instagram</Link>
                        <Link to="/">linkdin</Link>
                    </div>

                </div>

                <div className="credit">copyright @2023 by <span>mr. web designer</span></div>

            </section>
        </>
    );
}

export default Footer;