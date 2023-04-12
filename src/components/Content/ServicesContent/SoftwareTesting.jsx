import React from "react";
import bgImg from "../assets/images/post_07-1280x960.jpg";
import blank from '../assets/contentimages/blank.gif'
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
import logoimg from '../assets/contentimages/testyantra_final testing logo.jpg'
const SoftwareTesting = () => {
   return (
     <>
       <section>
         <article>
           <div>
             <figure>
               <img className={st.backGroundImg} src={bgImg} alt="" />
             </figure>
             <figure>
               <img className={st.wave} src={wave} alt="" />
             </figure>
             <figure>
               <img className={st.blankImg} src={blank} alt="" />
             </figure>
             <aside className={st.TextCon}>
               <div className={st.TopText}>
                 <p>SOFTWARE</p>
                 <p>TESTING</p>
               </div>
               <div className={st.BottomText}>
                 <p>
                   Our team of Software Design and Development Engineers provide
                   a variety of solutions that elevate your business to the next
                   level.
                 </p>
               </div>
             </aside>
           </div>
         </article>
       </section>
       <section className={st.TestTopCon}>
         <article className={st.TestTopSubCon}>
           <aside>
             <iframe
               width="600"
               height="338"
               src="https://www.youtube.com/embed/iGjTFB6C6tY"
               title="TestYantra"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
             ></iframe>
           </aside>
           <aside>
             <figure>
               <img src={logoimg} alt="" />
             </figure>
             <h1>An overview</h1>
             <p>
               With changing technologies and complex business dynamics,
               companies often face uncertainties that could prove to be an
               obstacle on their path to digital transformation. How can they be
               sure that their applications are giving them the intended ROI?
               How can they validate the performance of an application?
             </p>
             <p>
               If you are one such business owner having a difficult time
               navigating through the complex world of software testing, Test
               Yantra is the answer to all your problems. An entity of Test
               Yantra Global that offers pioneering software services worldwide,
               Test Yantra provides cost-effective and quick quality assurance
               (QA) services. Test Yantra’s ‘Testing as a Service’ helps assess
               the maturity of testing organizations; build Test Competency
               Centres and leverage Global Delivery and other curated engagement
               models. With Test Yantra’s application testing services,
               companies can achieve their quality goals, quickly and
               effectively.
             </p>
           </aside>
         </article>
       </section>
       <section className={st.TestBottomCon}>
         <article className={st.TestBottom}>
           <div>
             <h1>Why Test Yantra?</h1>
             <p>
               Quality and accelerated go-to-market timelines are critical
               factors that determine the success of an application. Our expert
               team of testers, assure quick testing turnaround and optimum
               customer satisfaction.
             </p>
             <p>
               We help you validate your application from an end-user
               perspective quickly and instil greater confidence to launch your
               application. Leverage Test Yantra’s crowd testing experts,
               explore our test automation strategy, or use our game-changing
               AI, ML-driven, scriptless automation tool “Flinko” to make your
               testing organization more comprehensive, efficient, and
               intelligent.
             </p>
             <p>
               Test Yantra provides software testing services to 1,000+ clients
               across seven industries, from six countries. Connect with Test
               Yantra’s team of expert testers to imrove your quality assurance
               and improve your digital transformation.
             </p>
             <button>Learn more about our Testing Solutions</button>
           </div>
         </article>
       </section>
     </>
   );
};

export default SoftwareTesting;
