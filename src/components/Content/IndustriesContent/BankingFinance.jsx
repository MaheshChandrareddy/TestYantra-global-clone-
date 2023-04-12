import React from "react";
import bgImg from "../assets/contentimages/Bankingfinancewith plant.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/contentimages/bottom_wave_02images.png";
import st from "./Service.module.css";
const BankingFinance = () => {
  return (
    <>
      <section className={st.TopSection}>
        <article>
          <div>
            <figure className={st.backGroundImg}>
              {/* <img src={bgImg} alt="" /> */}
            </figure>
            <figure>
              <img className={st.wave} src={wave} alt="" />
            </figure>
            <figure>
              <img className={st.blankImg} src={blank} alt="" />
            </figure>
            <aside className={st.TextCon}>
              <div className={st.TopText}>
                <p>BANKING </p>
                <p>&FINANCE</p>
              </div>
              <div className={st.BottomText}>
                <p>
                  We have been providing services to over 50 clients for more
                  than a decade
                </p>
              </div>
            </aside>
          </div>
        </article>
      </section>
      <section>
        <article></article>
      </section>
    </>
  );
};

export default BankingFinance;
