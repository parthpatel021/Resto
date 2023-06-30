import React from "react";
import "../CSS/About.css";

function About(){
    return(
        <>
            <section className="about" id="about">
                <h3 className="sub-heading">about us</h3>
                <h1 className="heading">why choose us</h1>

                <div className="row">
                    <div className="image">
                        <img src="https://img.freepik.com/free-photo/grilled-beef-pork-with-fresh-guacamole-generated-by-ai_188544-38177.jpg?t=st=1688031729~exp=1688032329~hmac=ef3692cfeac92b6fd856e0034149f4c6e8df8a9d6dc42943ea52118dec3d8713&w=1060" alt="" />
                    </div>
                    <div className="content">
                        <h3>best food in the area</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia, repudiandae debitis quod at eaque repellat. Esse, voluptatibus magnam! Voluptatibus sequi vero modi cum ab quisquam. Laborum fuga iusto soluta?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore doloremque inventore in voluptatum sint quae nostrum excepturi alias eos.</p>

                        <div className="icons-container">
                            <div className="icons">
                                <i className="fas fa-shipping-fast"></i>
                                <span>free delivery</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-dollar-sign"></i>
                                <span>easy payments</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-headset"></i>
                                <span>24/7 service</span>
                            </div>
                        </div>
                        <a href="#" className="btn">learn more</a>

                    </div>

                </div>

            </section>
        </>
    );
}

export default About;