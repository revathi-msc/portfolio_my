import React from 'react'

import P1 from '../images/P1.JPG'
import P2 from '../images/P2.JPG'
import P3 from '../images/P3.JPG'
import P4 from '../images/P4.JPG'
import P5 from '../images/P5.JPG'
import P6 from '../images/P6.JPG'
const Project = () => {
    const projects = [
        {
            name: "SIGNUP APPLICATION",
            img: P1,
            languageOrFramwork: "HTML,CSS,JAVASCRIPT,REACT JS, NODE JS, EXPRESS JS, MONGO DB",
            link: "https://signup-app1.netlify.app/"
            
        },
        {
            name: "O-AUTH FIREBASE PHONE OTP",
            img: P2,
            languageOrFramwork: "HTML,CSS,JAVASCRIPT,REACT JS, NODE JS, EXPRESS JS, MONGO DB, FIREBASE",
            link: "https://phone-auth-70be1.firebaseapp.com/"
        },
        {
            name: "Crud Book store app",
            img: P3,
            languageOrFramwork: "HTML,CSS,JAVASCRIPT,REACT JS, NODE JS, EXPRESS JS, MONGO DB,CRUD",
            link: "https://bookstore-app1.netlify.app/",
            
            
        },
        {
            name: "INSTAGRAM JWT",
            img: P4,
            languageOrFramwork: "HTML,CSS,JAVASCRIPT,REACT JS, NODE JS, EXPRESS JS, MONGO DB, JWT",
            link: "https://instagramjwt.netlify.app/"
            
        },
        {
            name: "Flipkart App using PAYMENT GATEWAY",
            img: P5,
            languageOrFramwork: "Frontend: React.js, Material-UI & Redux Backend: Node.js & Express.js Database: MongoDB Payment Gateway: Paytm",
            link: "https://iridescent-granita-68829f.netlify.app/"
            
        },
        {
            name: "LOGIN AND REGISTRATION APP",
            img: P6,
            languageOrFramwork: "HTML,CSS,JAVASCRIPT,REACT JS, NODE JS, EXPRESS JS, MONGO DB",
            link: "https://mern-stack11.netlify.app/",
        
        },

        
];
    return (
        <section id="Project">
            <div className="container Project_section">
                <h1 data-aos="fade-left">Project</h1>
                <div className="all_works row">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-lg-6 col-xl-6 ">
                                    <div data-aos="fade-right" className="singlework">
                                        <img src={project.img} alt="project_img"/>
                                        <div className="overlay">
                                            <div className="work_link">
                                                <p className="project_name">Project: {project.name}</p>
                                                <p className="languages">Language/Framework: {project.languageOrFramwork}</p>
                                                <a target="_blank" rel="noreferrer" href={project.link}>{index === 0 ? 'NETLIFY' :'NETLIFY Link'}</a>
                                                <div className="social_links">
                    <ul>
                        <li className="link_item"><a href="https://github.com/revathimsc/signup-frontend.git/"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://github.com/revathimsc/auth-login.git/"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://github.com/revathimsc/bookstore.git/"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://github.com/revathimsc/instagram-jwt--frontend.git/"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href="https://github.com/revathimsc/flipkart-frontend.git/"><i className="fa fa-github"></i></a></li>
                        <li className="link_item"><a href=""><i className="fa fa-github"></i></a></li>
                    </ul>
                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



            </div>
           
            
            


                

        </section>
    )
}

export default Project
