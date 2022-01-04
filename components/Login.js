import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.center_content}>
          <img
            className={styles.center_logo_one}
            src="/assets/images/cta-logo-one.svg"
            alt="cta-logo-one"
          />
          <a className={styles.signUp}>GET ALL THERE</a>
          <p className={styles.description}>
            Get Premier Access to The Fall of the Frozen Forest for an
            additional fee with a Disney+ subscription. As of 03/26/21, the
            price of Disney+ and the Disney Bundle will increase by 1$
          </p>
          <img
            className={styles.center_logo_two}
            src="/assets/images/cta-logo-two.png"
            alt="cta-logo-two"
          />
        </div>
        <div className={styles.background} />
      </div>
    </section>
  );
};

export default Login;
