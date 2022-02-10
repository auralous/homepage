import { useHead } from "hoofd/preact";
import { useEffect, useState } from "preact/hooks";
import twoSideIllu from "../assets/2_side_illus.png";
import appApplemusic from "../assets/Apple_Music_logo.svg";
import appStoreBadge from "../assets/Download_on_the_App_Store_Badge.svg";
import googleplayBadge from "../assets/Google_Play_Store_badge.svg";
import logo from "../assets/logo.svg";
import appSpotify from "../assets/Spotify_logo_with_text.svg";
import appYoutube from "../assets/YouTube_Logo_2017.svg";
import styles from "./Home.module.css";

const featApps = [
  {
    name: "YouTube",
    logo: appYoutube,
    song: {
      title: "OneRepublic - Counting Stars (Official Music Video)",
      artists: "OneRepublic",
      href: "https://youtu.be/hT_nvWreIhg",
      image: "https://i3.ytimg.com/vi/hT_nvWreIhg/maxresdefault.jpg",
    },
  },
  {
    name: "Spotify",
    logo: appSpotify,
    song: {
      title: "Counting Stars",
      artists: "OneRepublic",
      href: "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1",
      image: "https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb",
    },
  },
  {
    name: "Apple Music",
    logo: appApplemusic,
    song: {
      title: "Counting Stars",
      artists: "OneRepublic",
      href: "https://music.apple.com/album/counting-stars/1440862673?i=1440862803",
      image:
        "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ff/ac/01/ffac01e0-afb1-b8b0-57de-0d1ca7d2d02b/source/512x512bb.jpg",
    },
  },
];

const FeatCross = () => {
  const [appIdx, setAppIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      setAppIdx(appIdx < 2 ? appIdx + 1 : 0);
    }, 4000);
    return () => clearTimeout(t);
  }, [appIdx]);

  return (
    <section class={styles.section}>
      <h2 class={styles.title}>Listen across boundaries</h2>
      <p class={styles.description}>
        Your friend listens to a different music application? No worry, Auralous
        will find and play that same song on your application instead.
      </p>
      <div>
        <div class={styles.musicAppContainer}>
          {featApps.map((featApp, index) => (
            <button
              onClick={() => setAppIdx(index)}
              key={featApp.name}
              class={`${styles.musicApp} ${
                index === appIdx ? styles.active : ""
              }`}
            >
              <img src={featApp.logo} alt={featApp.name} />
            </button>
          ))}
        </div>
        <div class={styles.mockPlayer}>
          <img
            src={featApps[appIdx].song.image}
            alt={featApps[appIdx].song.title}
            loading="lazy"
            width={96}
            height={96}
          />
          <div class={styles.mpContainer}>
            <a
              target="_blank"
              href={featApps[appIdx].song.href}
              class={styles.mpTitle}
              rel="noreferrer"
            >
              {featApps[appIdx].song.title}
            </a>
            <div class={styles.mpAritsts}>{featApps[appIdx].song.artists}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatSocial = () => {
  return (
    <section class={styles.section}>
      <h2 class={styles.title}>Chat, Collaborate, Cheer!</h2>
      <p class={styles.description}>
        Chat with each other, invite your friends to add songs, and react to
        each other's picks.
        <br />
        <b>Music is better when we listen together.</b>
      </p>
      <img
        loading="lazy"
        width={681}
        height={383}
        class={styles.imgFeatSocial}
        src={twoSideIllu}
        alt="Chat, Collaborate, Cheer!"
      />
    </section>
  );
};

const Hero = () => {
  return (
    <div class={styles.hero}>
      <div class={styles.logo}>
        <img src={logo} alt="Auralous" />
      </div>
      <p class={styles.motto}>Music Together</p>
      <p class={styles.heroSub}>
        Play &amp; listen to music in sync with friends around the world. Stream
        your favorite songs from YouTube, Spotify, and Apple Music.
      </p>
      <div class={styles.appLinks}>
        <a class={styles.btnLaunch} href="https://app.auralous.com">
          Launch Web App
        </a>
        <div>
          <a
            onClick={() => alert("Coming soon")}
            href="#"
            class={styles.btnNative}
          >
            <img
              class={styles.nativeBadge}
              src={appStoreBadge}
              alt="Download on the App Store"
            />
          </a>
          <a
            onClick={() => alert("Coming soon")}
            href="#"
            class={styles.btnNative}
          >
            <img
              class={styles.nativeBadge}
              src={googleplayBadge}
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  useHead({
    title: "Auralous: Music Together",
  });
  return (
    <div class="container">
      <Hero />
      <FeatCross />
      <FeatSocial />
    </div>
  );
};

export default Home;
