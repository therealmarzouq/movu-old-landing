import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import "../components/ThreeJs";
import { PopupButton } from "@typeform/embed-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/aventa/Aventa-LightItallicPERSONALUSEONLY.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/aventa/Aventa-LightPERSONALUSEONLY.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/aventa/Aventa-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/aventa/Aventa-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <div
          data-w-id="a842052a-5012-330f-4a29-df5b1dd09cff"
          style={{
            opacity: "1",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className={styles.header}
        >
          <div className={styles["logo-wrapper"]}>
            <div className={styles["name-wrapper"]}>
              <Link
                href="/"
                passHref
                className={
                  (styles["link-block"],
                  styles["w-inline-block"],
                  styles["w--current"])
                }
              >
                <div className={styles.name}>Movu</div>
              </Link>
            </div>
          </div>
          <div className={styles["right-wrapper"]}>
            <div className={styles["menu-staff"]}>
              <Link href="#" passHref data-tf-popup="Y78CCF">
                {/* <div></div> */}
                <PopupButton
                  id={"Y78CCF"}
                  // size={66}
                  className={`${styles["btn-try"]} ${styles["w-inline-block"]}`}
                  medium="demo-test"
                  hidden={{ foo: "foo value", bar: "bar value" }}
                >
                  Join the Waitlist
                </PopupButton>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles["_1560-wrapper"]}>
          <div className={styles["_1560"]}>
            <div id="Header" className={styles["wf-section"]}>
              <div
                data-w-id="748fa65e-73c8-4121-74e7-cb94d323e6bd"
                className={styles["hero-wrapper"]}
              >
                {/* <canvas className="webgl"></canvas> */}
                <video
                  width="1000"
                  height="70%"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/Clay.mp4" type="video/mp4;"></source>
                  <source src="/videos/Clay.mp4" type="video/mp4;"></source>
                </video>
                <div className={styles["hero-text"]}>
                  <h1
                    data-w-id="51bd0bb4-79b5-f822-b367-7ed950075ca0"
                    style={{
                      opacity: "1",
                      willChange: "transform",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      marginBottom: "10px",
                    }}
                    className={styles.heading}
                  >
                    Movu
                  </h1>
                </div>
                <div className={styles["hero-desc"]}>
                  <div
                    data-w-id="e93cb42a-7b9c-7f7f-1759-301b10899792"
                    style={{ opacity: "1" }}
                    className={`${styles["text-body"]} ${styles["center"]}`}
                  >
                    Lorem1560 ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed euismod, urna eget consectetur consectetur, nunc
                    {/* Colorful set of medicine icons to enhance your
                    presentations. <br />
                    For Figma &amp; Blender. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
