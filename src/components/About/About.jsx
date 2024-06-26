import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className={styles.AboutSection} id="about">
      <img
        src={getImageUrl("about/about.jpg")}
        alt="code-image"
        className={styles.img}
      />
      <article className={styles.article}>
        <p className={styles.titlePink}>SOBRE MIM</p>
        <h1 className={styles.title}>
          Front-end Developer based in Bahia-Brasil 📍
        </h1>
        <p className={styles.apresentation}>
          <span>
            Apaixonada pela criação de experiências de usuário envolventes e
            intuitivas. Trago um forte desejo de aprender e evoluir
            constantemente no campo do desenvolvimento Front-End. <br />
          </span>
        </p>
      </article>
    </section>
  );
};
