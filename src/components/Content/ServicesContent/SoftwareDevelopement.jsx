import React from "react";
import bgImg from '../assets/contentimages/it-specialist-checking-code-computer-dark-office-night.jpg'
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
import TechLogo from '../assets/contentimages/technoelevateLogo.jpg'
import { BiCheckCircle } from "react-icons/bi";
import bulb from '../assets/contentimages/bulb.jpg'
import Bussinessman from '../assets/contentimages/businessman-with-colorful-cones-representing-growth.jpg'
const SoftwareDevelopement = () => {
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
                <p>DEVELOPEMENT</p>
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
      <section className={st.TopSoftWareDevCon}>
        <article className={st.TopSoftWareDev}>
          <div>
            <iframe
              width="618"
              height="404"
              src="https://www.youtube.com/embed/UVzfja1yI2Q"
              title="TechnoElevate"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <figure>
              <img src={TechLogo} alt="" />
            </figure>
            <h1>An overview</h1>
            <p>
              What is it like for companies to navigate through the complex
              world of Information Technology? In this ever-growing world of
              cloud, artificial intelligence, IoT (Internet of Things) and big
              data, businesses need to choose the right IT solutions, which may
              be a challenge considering the galloping technological
              advancements.
            </p>
            <p>
              Test Yantra Design and Software Development team, ‘Technoelevate’,
              as the name signifies, is all about digital solutions that elevate
              businesses to the next level. The skilled team of Technoelevate
              combines the three Ds – design, development and deployment – to
              provide quality, cost-efficient and timely services to the
              clients. It also delivers IT solutions in a wide variety of
              verticals and has worked with onshore, offshore and mixed delivery
              models.
            </p>
          </div>
        </article>
      </section>
      <section className={st.MidSoftWareDevCon}>
        <article className={st.MidSoftWareDev}>
          <aside>
            <header>
              <h1>Our expertise</h1>
            </header>
            <h4>‘Teamwork makes the dream work’</h4>
            <p>
              With close to two decades of experiance, TechnoElevate has
              industry leading talent and best-in-class global expertise to
              deliver high-end Software Design and Development to Digitally
              Transform your business in the following categories.
            </p>
            <div>
              <ul>
                <li>
                  <b>{<BiCheckCircle />} </b>Software development
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Mobile app development
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Web development
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Cloud solutions
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Migration and reengineering
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Middleware integration services
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>E-commerce development
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Full stack development
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>Data science
                </li>
                <li>
                  <b>{<BiCheckCircle />} </b>IT Consulting
                </li>
              </ul>
            </div>
          </aside>
          <aside className={st.RightImg}>
            <figure>
              <img src={bulb} alt="" />
            </figure>
          </aside>
        </article>
      </section>
      <section className={st.EndSoftWareDevCon}>
        <article className={st.EndSoftWareDev}>
          <aside>
            <figure>
              <img src={Bussinessman} alt="" />
            </figure>
          </aside>
          <aside className={st.RigthCon}>
            <div>
              <h1>Why Technoelevate?</h1>
              <p>
                We develop, formulate and execute a clear and
                strategic IT roadmap to help you reach your business goals. We
                also work hand-in-hand with your team to understand your
                requirements, business processes and current technical
                capabilities. We listen, collaborate, operate and deliver – all
                of this with high efficiency and cost-effectiveness.
              </p>
              <button>learn more about our Software developement </button>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
};

export default SoftwareDevelopement;
