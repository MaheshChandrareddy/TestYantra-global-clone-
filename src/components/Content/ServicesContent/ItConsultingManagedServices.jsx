import React from "react";
import bgImg from "../assets/contentimages/itconsulty and manager.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
const ItConsultingManagedServices = () => {
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
                 <p>IT CONSULTING</p>
                 <p>MANAGED SERVICES</p>
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
       <section className={st.ItConTextCon}>
         <article className={st.ItConTextSubCon}>
           <aside>
             <h1>An overview</h1>
             <p>
               It’s extremely crucial for organizations to choose the right IT
               solutions for the growth of their company and brand. But with
               galloping technological advancements, it may be challenging for
               companies to keep up with the fast-changing times. This is where
               our team of consulting experts step in.
             </p>
           </aside>
           <aside>
             <h1>Why Test Yantra Global?</h1>
             <p>
               Test Yantra Global clients have leveraged our IT Consulting &
               Managed Services to create a competitive edge. With 15+ years of
               experience, 12,000+ engineers, 3,000+ customers, and 180+
               enterprise deployments, our experts IT Consulting and Managed
               Services team can successfuly guide your business digital
               transformation.
             </p>
             <p>
               From consulting and planning for the most appropriate technology
               strategy and software stack, to deployment, maintenance, and
               support of applications, we have the resources, skills, and
               expertise to help elevate your business.
             </p>
             <p>
               Get in touch with our team of experts to discuss how we can help
               guide your successful digital transformation journey.
             </p>
           </aside>
         </article>
       </section>
     </>
   );
};

export default ItConsultingManagedServices;
