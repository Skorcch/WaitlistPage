import Button from "./button";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.filterIconParent}>
        <div className={styles.filterIcon} />
        <div className={styles.filterIcon1} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.iconButtonParent}>
          <div className={styles.iconButton}>
            <img
              className={styles.trendingUpIcon}
              loading="lazy"
              alt=""
              src="/trending-up.svg"
            />
          </div>
          <div className={styles.filterChip}>
            <div className={styles.stateLayer}>
              <img
                className={styles.lucideflameIcon}
                loading="lazy"
                alt=""
                src="/lucideflame.svg"
              />
              <div className={styles.labelText}>
                Amazing times coming your way
              </div>
            </div>
          </div>
        </div>
        <div className={styles.theIdeaForgeStartsSoonParent}>
          <h1 className={styles.theIdeaForgeContainer}>
            <p className={styles.theIdeaForge}>The Idea Forge</p>
            <p className={styles.theIdeaForge}> Starts Soon</p>
          </h1>
          <h2 className={styles.theFoundersCollective}>
            The Founders Collective, is a new platform where creators can
            collaborate, showcase ideas, and work together on innovative
            projects. The only prerequisite- you want to make something.
          </h2>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.buttonWrapper}>
            <Button hasIconEnd hasIconStart label="Join waitlist" />
          </div>
          <div className={styles.join100OthersWhoSignedUpParent}>
            <div className={styles.join100Others}>
              Join 100+ others who signed up
            </div>
            <div className={styles.lucideyoutubeParent}>
              <img
                className={styles.lucideyoutubeIcon}
                loading="lazy"
                alt=""
                src="/lucideyoutube.svg"
              />
              <img
                className={styles.lucideyoutubeIcon}
                loading="lazy"
                alt=""
                src="/lucidelinkedin.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
