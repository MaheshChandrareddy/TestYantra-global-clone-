import React from "react";
import bgImg from "../assets/contentimages/BF_portfolio_01 lap with hand.jpeg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
import float1 from "../assets/images/floating_image_04.png";
import SkillLogo from "../assets/contentimages/skillraryLogo.jpg";
import float2 from '../assets/images/floating_image_02.png'
const SkillRary = () => {
  return (
    <>
      <section className={st.start}>
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
            <article className={st.FloatImg}>
              <figure>
                <img src={float1} alt="" />
              </figure>
            </article>
            <aside className={st.TextCon}>
              <div className={st.TopText}>
                <p>SkillRary</p>
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
      <section className={st.SkillCon}>
        <article className={st.SkillMidCon}>
          <aside>
            <div>
              <iframe
                width="600"
                height="338"
                src="https://www.youtube.com/embed/3aEWGhR79OM"
                title="Skillrary"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </aside>
          <aside className={st.paraCon}>
            <div>
              <figure>
                <img src={SkillLogo} alt="" />
              </figure>
              <p>
                Whether you are a passionate professional with a keen
                understanding of a particular skill that you want to teach the
                world or a company owner looking at polishing the skills of your
                employees, Skillrary is the platform that you are looking for.
                An online learning and assessment platform tailored to suit
                every individual’s needs, Skillrary provides computer-based
                training and e-learning in a range of subjects. It also makes
                curating and launching a course a quick and easy affair.
              </p>
              <p>
                With courses on varied subjects like design, marketing, business
                and AI, learners can opt for anything that excites them or suits
                their business requirements. Skillrary’s courses also involve a
                variety of multimedia elements, including graphics, audios,
                videos and web links. Be it self-paced or real-time, each course
                caters to an individual’s needs.
              </p>
              <p>
                The platform is also coupled with assessments for you to rate
                the skills of your learners or employees. So far, the trainers
                of Skillrary have conducted over 87,000 lectures; created more
                than 99,000 videos and trained over 354,000 students in over
                14,000 courses.
              </p>
              <p>
                Join the community of Skillrary to sharpen your skills and make
                learning a fun and wholesome experience.
              </p>
            </div>
          </aside>
        </article>
      </section>
      <section className={st.buttonCon}>
        <article>
          <button>SkillRary Know more</button>
        </article>
        <figure>
          <img src={float2} alt="" />
        </figure>
      </section>
    </>
  );
};

export default SkillRary;
