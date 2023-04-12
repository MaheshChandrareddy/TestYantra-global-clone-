import React from "react";
import st from "./Home.module.css";
import backGround from "../assets/images/background_03.jpg";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import imgfloat4 from "../assets/images/floating_image_04.png";
import imgfloat3 from "../assets/images/floating_image_03.png";
import imgfloat2 from "../assets/images/floating_image_02.png";
import imgfloat1 from "../assets/images/floating_image_01.png";
import SoftDesign from "../assets/images/portfolio_01-1280x960.jpg";
import testing from "../assets/images/post_07-1280x960.jpg";
import elvate from "../assets/images/training_01-1280x960.jpg";
import itConsultensy from "../assets/images/consulting-1280x960.jpg";
import artIcon1 from "../assets/images/01-160x160.jpg";
import artIcon2 from "../assets/images/02-160x160.jpg";
import artIcon3 from "../assets/images/03-160x160.jpg";
import artIcon4 from "../assets/images/04-160x160.jpg";
import automate from "../assets/images/Automate-Software-Testing-1280x800.jpg";
import salesforce from "../assets/images/4_salesforce-720x800.jpg";
import devops from "../assets/images/3_devops-1280x800.jpg";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

import waveBottom1 from '../assets/images/white_bottom_wave_01.png'
import waveBottomGray2 from "../assets/images/Wave_grey_bottom_left_shape_01.png";
const Home = () => {
  return (
    <>
      <section className={st.container}>
        <article className={st.Subcontainer}>
          <figure>
            <img className={st.Backfigure} src={backGround} alt="" />
          </figure>
          <figure>
            <img className={st.wave} src={wave} alt="" />
          </figure>
          <div className={st.ParaText}>
            <aside className={st.UpParaText}>
              <p>Enabling the Digital</p>
            </aside>
            <aside className={st.MiddleParaText}>
              <p>Transformation</p>
            </aside>
            <aside className={st.DrowParaText}>
              <p>
                Test Yantra Global provides a range of innovative technology
                solutions to digitally transform your organization.
              </p>
            </aside>
          </div>
          <figure>
            <img className={st.imgfloat4} src={imgfloat4} alt="" />
          </figure>
          <figure>
            <img className={st.imgfloat2} src={imgfloat2} alt="" />
          </figure>
          <figure>
            <img className={st.imgfloat3} src={imgfloat3} alt="" />
          </figure>
          <figure>
            <img className={st.imgfloat1} src={imgfloat1} alt="" />
          </figure>
        </article>
      </section>
      <section className={st.CardMenucon}>
        <article className={st.menuCon}>
          <div className={st.div1}>
            <h1>Our Services & </h1>
            <h1>Industries</h1>
          </div>
          <div className={st.div2}>
            <p>We provide industry-specific services and solutions</p>
            <p> expertise to Global brands across a range of verticals.</p>
          </div>
          <div className={st.div3}>
            <p>Some of the industries that we have worked with are :</p>
          </div>
          <div className={st.div4}>
            <ul>
              <li>
                <Link to="/BankingFinance">
                  <b>{<BiCheckCircle />} </b>
                  <span>Banking and Finance</span>
                </Link>
              </li>
              <li>
                <Link to="/Insurance">
                  <b>{<BiCheckCircle />} </b>
                  <span>Insurance</span>
                </Link>
                <li>
                  <Link to="/RetaileCommerce">
                    <b>{<BiCheckCircle />} </b>
                    <span>Retail and e-commerce</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Healthcare">
                    <b>{<BiCheckCircle />} </b>
                    <span>Healthcare</span>
                  </Link>
                </li>
                <Link to="/TechnologyComunications">
                  <li>
                    <b>{<BiCheckCircle />}</b>
                    <span>Information, Communication,Technology</span>
                  </li>
                </Link>
                <li>
                  <Link to="/Education">
                    <b>{<BiCheckCircle />} </b>
                    <span>Education</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Travel">
                    <b>{<BiCheckCircle />} </b>
                    <span>Travel</span>
                  </Link>
                </li>
                <li>
                  <Link to="/MediaEntertainment">
                    <b>{<BiCheckCircle />} </b>
                    <span>Media and Entertainment</span>
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </article>
        <article className={st.Cardcon}>
          <section className={st.CardconLeft}>
            <div id={st.imgCon1} className={st.CardLeft1}>
              <figure>
                <Link to="/SoftwareDevelopement">
                  <img className={st.ImgCd1} src={SoftDesign} alt="" />
                </Link>
              </figure>
              <main>
                <aside>
                  <section>
                    <Link to="/SoftwareDevelopement">
                      Software Design and Development
                    </Link>
                  </section>
                  <article>
                    <Link to="/SoftwareDevelopement">
                      We deliver IT solutions in a wide variety of verticals and
                      elevate businesses to the next level.
                    </Link>
                  </article>
                  <div>
                    <Link to="/SoftwareDevelopement">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </div>
                </aside>
              </main>
            </div>
            <div id={st.imgCon2} className={st.CardLeft2}>
              <figure>
                <Link to="/ElevateItTraining">
                  <img className={st.ImgCd2} src={elvate} alt="" />
                </Link>
              </figure>
              <main>
                <aside>
                  <section>
                    <Link to="/ElevateItTraining">
                      Software Design and Development
                    </Link>
                  </section>
                  <article>
                    <Link to="/ElevateItTraining">
                      We deliver IT solutions in a wide variety of verticals and
                      elevate businesses to the next level.
                    </Link>
                  </article>
                  <div>
                    <Link to="/ElevateItTraining">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </div>
                </aside>
              </main>
            </div>
          </section>
          <section className={st.CardconRight}>
            <div id={st.imgCon3} className={st.CardRight3}>
              <figure>
                <Link to="/SoftwareTesting">
                  <img className={st.ImgCd3} src={testing} alt="" />
                </Link>
              </figure>
              <main>
                <aside>
                  <section>
                    <Link to="/SoftwareTesting">
                      Software Design and Development
                    </Link>
                  </section>
                  <article>
                    <Link to="/SoftwareTesting">
                      We deliver IT solutions in a wide variety of verticals and
                      elevate businesses to the next level.
                    </Link>
                  </article>
                  <div>
                    <Link to="/SoftwareTesting">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </div>
                </aside>
              </main>
            </div>
            <div id={st.imgCon4} className={st.CardRight4}>
              <figure>
                <Link to="/ItConsultingManagedServices">
                  <img className={st.ImgCd4} src={itConsultensy} alt="" />
                </Link>
              </figure>
              <main>
                <aside>
                  <section>
                    <Link to="/ItConsultingManagedServices">
                      Software Design and Development
                    </Link>
                  </section>
                  <article>
                    <Link to="/ItConsultingManagedServices">
                      We deliver IT solutions in a wide variety of verticals and
                      elevate businesses to the next level.
                    </Link>
                  </article>
                  <div>
                    <Link to="/ItConsultingManagedServices">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </div>
                </aside>
              </main>
            </div>
          </section>
        </article>
        <figure>
          <img className={st.waveImgMidd} src={waveBottom1} alt="" />
        </figure>
      </section>
      <section className={st.videoCOn}>
        <article className={st.videoCOnLeft}>
          <div>
            <iframe
              width="800"
              height="504"
              src="https://www.youtube.com/embed/tuwxrL7Kh4E"
              title="TestYantra Global"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </article>
        <article className={st.videoCOnRight}>
          <aside>
            <div>
              <h1>At the forefront of innovation</h1>
              <p>
                Test Yantra Global provides industry leading expertise and
                advanced technology solution to Digitally Transform leading
                brands across various industries. Connect with one of our Expert
                Solutions Specialist to see how Test Yantra can give your
                organization a leading edge.
              </p>
            </div>
          </aside>
        </article>
      </section>
      <section className={st.Articon}>
        <article className={st.head}>
          <h1> The numbers speak for </h1>
          <h1>themselves</h1>
        </article>
        <article className={st.artIconsSec}>
          <div>
            <figure>
              <img src={artIcon1} alt="" />
            </figure>
            <aside>
              <h1>6</h1>
              <h1>Countries & </h1>
              <h1>Growing</h1>
            </aside>
          </div>
          <div>
            <figure>
              <img src={artIcon2} alt="" />
            </figure>
            <aside>
              <h1>3000 +</h1>
              <h1>Clients Across </h1>
              <h1>Globe</h1>
            </aside>
          </div>
          <div>
            <figure>
              <img src={artIcon3} alt="" />
            </figure>
            <aside>
              <h1>5000 +</h1>
              <h1>Team </h1>
              <h1>Members</h1>
            </aside>
          </div>
          <div>
            <figure>
              <img src={artIcon4} alt="" />
            </figure>
            <aside>
              <h1>12000 +</h1>
              <h1>On Demand </h1>
              <h1>Engineers</h1>
            </aside>
          </div>
        </article>
      </section>
      <section className={st.BtmCardCon}>
        <article>
          <header>
            <h1>Articles</h1>
          </header>
        </article>
        <article className={st.CardSecBtm}>
          <div>
            <section className={st.BtmCard1}>
              <figure>
                <img src={automate} alt="" />
              </figure>
              <aside>
                <main>
                  <div>February 21, 2023</div>
                  <h1>
                    <Link to="/SoftwareTesting">
                      Automated software testing -101
                    </Link>
                  </h1>
                  <p>
                    <Link to="/SoftwareTesting">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </p>
                </main>
              </aside>
            </section>
            <section className={st.BtmCard2}>
              <figure>
                <img src={salesforce} alt="" />
              </figure>
              <main></main>
              <aside className={st.MoveData}>
                <div>March 25, 2022</div>
                <aside>
                  <Link to="/BankingFinance">Salesforce Testing</Link>
                </aside>
                <p>
                  <Link to="/BankingFinance">
                    read more <span>{<AiOutlineRightCircle />}</span>
                  </Link>
                </p>
              </aside>
            </section>
            <section className={st.BtmCard3}>
              <figure>
                <img src={devops} alt="" />
              </figure>
              <aside>
                <main>
                  <div>March 25, 2022</div>
                  <h1>
                    <Link>
                      Test Automation and Performance Testing for DevOps
                      Platform
                    </Link>
                  </h1>
                  <p>
                    <Link to="">
                      read more <span>{<AiOutlineRightCircle />}</span>
                    </Link>
                  </p>
                </main>
              </aside>
            </section>
          </div>
        </article>
      </section>
      <section className={st.btmHeadCon}>
        <article className={st.btmHeadSubCon}>
          <div>
            <button>Read More Articles</button>
          </div>
          <div>
            <h1>We enable you to digitally transform your business to</h1>
            <h2>help you create the company of your dreams.</h2>
          </div>
        </article>
        <figure>
          <img src={waveBottomGray2} alt="" />
        </figure>
      </section>
    </>
  );
};
export default Home;
