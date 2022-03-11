import React from 'react'
import "./Portfolio.css"
import p1 from "../../assets/p1.webp"
import p2 from "../../assets/p2.webp"
import p3 from "../../assets/p3.webp"
import p4 from "../../assets/p4.webp"
import p5 from "../../assets/p5.webp"
import p6 from "../../assets/p6.webp"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p1} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
         {/*  */}
         <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p3} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
         {/*  */}
         <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p4} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
         {/*  */}
         <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p5} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
         {/*  */}
         <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p6} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
         {/*  */}
         <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={p2} alt="Project Files" />
            </div>
              <h3>Portfolio Item Title</h3>  
              <div className="portfolio__item-cta">
                <a target="_blank" href="https://github.com" className="btn ">Github</a>
                <a target="_blank" href="https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className="btn btn-primary">Live Demo</a>  
              </div>
         </article>  
      </div>
    </section>
  )
}

export default Portfolio