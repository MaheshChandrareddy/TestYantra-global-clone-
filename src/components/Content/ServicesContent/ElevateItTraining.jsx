import React from "react";
import bgImg from "../assets/images/training_01-1280x960.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
import Qspiders from '../assets/contentimages/qspidersLogo.jpg'

const ElevateItTraining = () => {
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
               <p>ElevateTraing</p>
             </div>
             <div className={st.BottomText}>
               <p>
                 Our team of Software Design and Development Engineers provide a
                 variety of solutions that elevate your business to the next
                 level.
               </p>
             </div>
           </aside>
         </div>
       </article>
     </section>

     <section className={st.ElvateTopCon}>
       <article className={st.ElvateTopSubCon}>
         <aside>
           <iframe
             width="600"
             height="338"
             src="https://www.youtube.com/embed/3aEWGhR79OM"
             title="Skillrary"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowfullscreen
           ></iframe>
         </aside>
         <aside>
           <h1>Elevate – The IT Finishing School</h1>
           <p>
             A finishing school from Test Yantra Global, Elevate’s SkillRary
             remote learning and assessment platform helps businesses and
             individuals. Businesses can use the SkillRary platform to educate
             their learner through standard or customized courses, and live or
             pre-recorded courses. The assessment element of SkillRary provides
             feedback on knowledge transfer and retention. Novice and
             experienced learners can use the library of various business and
             technology coures upskills and reskill, hone their technical skills
             and elevate their careers.
           </p>
           <p>
             Our team of professional educators have leveraged the SkillRary
             platform to bridge the gap between knowledge and industry
             requirements by helping hundreds of thousands of people build the
             skills that they require to succeed.
           </p>
         </aside>
       </article>
     </section>
     <section className={st.ElvateBotCon}>
       <article className={st.ElvateBot}>
         <div>
           <figure>
             <img src={Qspiders} alt="" />
           </figure>
           <p>
             Qspider is Test Yantra Global’s instructor led training brand.
             Qspider is one of the largest providers of remote learning and
             classroom based instructor led technology training courses.
             Qspider’s is the perfect enhancement to our SkillRary learning and
             assessment platform, and is specifically intended for learners that
             require the additionals benefit of a live classroom engagement and
             interaction.
           </p>
           <p>
             As one of the largest training centers in the world and with a
             variety of courses, including ISTQB certified trainers, QSpiders
             and SkillRary are a perfect combination for people who wish to have
             a rewarding in-demand career in the growing IT sector.
           </p>
           <p>
             Corporations around the world regularly hire our trained and
             certified graduates. With 95,000+ graduates, over 3,000+ companies
             hire almost 4,000 of our graduates every month!
           </p>
           <button>Know More </button>
         </div>
       </article>
     </section>
   </>
 );
};

export default ElevateItTraining;
