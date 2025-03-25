import React from "react";
import '../css/Home.css';

const Home = () => {
    return (
         <div className="container">
    
              <header className="profile">
                   <img src="./public/assets/john.png" alt="Profile" className="profile-image" />
                   <div  className="profile-text">
                        <h1>Hi, I am John, <br /> Creative Technologist</h1>
                        <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        </p>
                        <button className="resume-button">Download Resume</button>
                   </div>
              </header>
    
    
              <section className="recent-posts">
                   <div className="section-header">
                        <h2>Recent posts</h2>
                        <a href="#">View all</a>
                   </div>
                   <div className="posts">
                        <div className="post">
                             <h3>Making a design system from scratch</h3>
                             <p className="post-meta">12 Feb 2020    |    Design, Patterns</p>
                             <p className="post-description">
                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                             </p>
                        </div>
                        <div className="post">
                             <h3>Creating pixel perfect icons in Figma</h3>
                             <p className="post-meta">12 Feb 2020    |    Figma, Icon Design</p>
                             <p className="post-description">
                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                             </p>
                        </div>
                   </div>
              </section>
    
              <section className="featured-works">
                   <h2>Featured works</h2>
                   <div className="work">
                        <img src="./public/assets/index-blog-post-images/designing-dashboards.png" alt="Designing Dashboards" />
                        <div className="work-info">
                             <h3>Designing Dashboards</h3>
                             <p className="work-meta"><p className="meta-num">2020</p><p className="meta-t">Dashboard</p></p>
                             <p className="work-description">
                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                             </p>
                        </div>
                   </div>
                   <div className="work">
                        <img src="./public/assets/index-blog-post-images/vibrant-portraits.png" alt="Vibrant Portraits" />
                        <div className="work-info">
                             <h3>Vibrant Portraits of 2020</h3>
                             <p className="work-meta"><p className="meta-num">2020</p><p className="meta-t">Illustration</p></p>
                             <p className="work-description">
                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                             </p>
                        </div>
                   </div>
                   <div className="work">
                        <img src="./public/assets/index-blog-post-images/malayalam-type.png" alt="Designing Dashboards" />
                        <div className="work-info">
                             <h3>36 Days of Malayalam type</h3>
                             <p className="work-meta"><p className="meta-num">2018</p><p className="meta-t">Typography</p></p>
                             <p className="work-description">
                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                             </p>
                        </div>
                   </div>
              </section>
         </div>
    );
    };
    
    export default Home;