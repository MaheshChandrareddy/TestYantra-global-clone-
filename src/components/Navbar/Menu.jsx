import React from "react";
import st from "./Menu.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <section className={st.container}>
      <article className={st.subcontainer}>
        <ul>
          <li id={st.ListDis} className={st.home}>
            <Link className={st.List} to="/">
              Home
            </Link>
          </li>
          <li className={st.service} id={st.ListDis}>
            <a className={st.List} href="">
              Service
            </a>
            <div className={st.servicesDisplay}>
              <p>
                <div>
                  <Link to="/SoftwareDevelopement"> SoftwareDevelopement</Link>
                </div>
                <div>
                  <Link to="/SoftwareTesting"> SoftwareTesting</Link>
                </div>
                <div>
                  <Link to="/ElevateItTraining"> ElevateItTraining</Link>
                </div>
                <div>
                  <Link to="/ItConsultingManagedServices">
                    ItConsultingManagedServices
                  </Link>
                </div>
              </p>
            </div>
          </li>
          <li id={st.ListDis} className={st.products}>
            <a className={st.List} href="">
              Products
            </a>
            <div className={st.productDisplay}>
              <aside>
                <div>
                  <Link to="/SkillRary"> SkillRary</Link>
                </div>
              </aside>
            </div>
          </li>
          <li id={st.ListDis} className={st.industries}>
            <a className={st.List} href="">
              Industries
            </a>
            <div className={st.industriesDisplay}>
              <aside>
                <div>
                  <Link to="/BankingFinance">BankingFinance</Link>
                </div>
                <div>
                  <Link to="/Education">Education</Link>
                </div>
                <div>
                  <Link to="/Healthcare">Healthcare</Link>
                </div>
                <div>
                  <Link to="/Insurance">Insurance</Link>
                </div>
                <div>
                  <Link to="/MediaEntertainment">MediaEntertainment</Link>
                </div>
                <div>
                  <Link to="/RetaileCommerce">RetaileCommerce</Link>
                </div>
                <div>
                  <Link to="/TechnologyComunications">
                    TechnologyComunications
                  </Link>
                </div>
                <div>
                  <Link to="/Travel">Travel</Link>
                </div>
              </aside>
            </div>
          </li>
          <li id={st.ListDis} className={st.blogs}>
            <a className={st.List} href="">
              Blogs
            </a>
          </li>
          <li id={st.ListDis} className={st.about}>
            <a className={st.List} href="">
              About
            </a>
            <div className={st.aboutDisplay}>
              <aside>
                <div>
                  <Link to="/About">About</Link>
                </div>
                <div>
                  <Link to="/Article">Article</Link>
                </div>
                <div className={st.career}>
                  <Link>Careers</Link>
                  <div className={st.careerDisplay}>
                    <aside>
                      <div>
                        <Link to="/WorkWith">Work With</Link>
                      </div>
                      <div>
                        <Link to="/Life@TY">Life @ TY</Link>
                      </div>
                    </aside>
                  </div>
                </div>

                <div>
                  <Link to="/Contact">Contact</Link>
                </div>
                <div>
                  <Link to="/OurPurposeMission">OurPurposeMission</Link>
                </div>
              </aside>
            </div>
          </li>
          <li className={st.search}>
            <a href="">{<FaSearch />}</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Menu;
