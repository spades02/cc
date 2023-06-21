import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/footer.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE ZAIF PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Shop 5 & 6, Liberty Square, F-11
            <br />
            Islamabad - Pakistan
            <br /> 051 123-4567
          </p>
          <p className={styles.text}>
            6b Bhittai Rd, F-7 Markaz F 7 Markaz F-7
            <br />
            Islamabad, Pakistan
            <br /> 051 123-4567
          </p>
          <p className={styles.text}>
            Street no 8-B Ghori Town Phase 5
            <br />
            Islamabad - Pakistan
            <br /> 051 123-4567
          </p>
          <p className={styles.text}>
            Giga Mall, Sector F DHA Phase II
            <br />
            Islamabad, Pakistan
            <br /> 051 123-4567
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
