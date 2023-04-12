import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import footerLogo from "../assets/contentimages/footer logo.png";
import st from './Footer.module.css'
const FooterPart = () => {
  return (
    <>
      <div className={st.FooterDiv}>
        <section className={st.BtmSearchCon}>
          <article className={st.BtmSearch}>
            <div className={st.BtmSearchLeft}>Subscribe to our Newsletter</div>
            <div className={st.BtmSearchRight}>
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </article>
        </section>
        <section className={st.FooterCon}>
          <main className={st.FooterConList}>
            <article className={st.FooterList1}>
              <figure>
                <img src={footerLogo} alt="" />
              </figure>
            </article>
            <article className={st.FooterList2}>
              <h1>Home</h1>
              <ul>
                <li>About Us</li>
                <li>Work With Us</li>
                <li>Contact</li>
                <li>Case Studies</li>
              </ul>
              <h1 className={st.FooterList2head2}>Services</h1>
              <ul>
                <li>Software Development</li>
                <li>Software Testing</li>
                <li>Elevate - IT training services</li>
                <li>IT consulting</li>
              </ul>
            </article>
            <article className={st.FooterList3}>
              <h1>Industries</h1>
              <ul>
                <li>Banking & Finance</li>
                <li>Insurance</li>
                <li>Healthcare</li>
                <li>Retail & e-commerce</li>
                <li>Technology and Communications</li>
                <li>Education</li>
                <li>Travel</li>
                <li>Media and Entertainment</li>
              </ul>
            </article>
            <article className={st.FooterList4}>
              <h1>Connect</h1>
              <div>
                <span>{<FaFacebookF />}</span>
                <span>{<BsTwitter />}</span>
                <span>{<FiInstagram />}</span>
                <span>{<FaLinkedinIn />}</span>
              </div>
              <p>ph : +1 888 980 7010</p>
              <p>hello@testyantraglobal.com</p>
            </article>
          </main>
        </section>
        <section className={st.BtmFooterCon}>
          <article className={st.BtmFooterSub}>
            <div>©2022 Test Yantra Global. All rights reserved</div>
            <div>
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default FooterPart