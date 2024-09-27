import aboutImg from "../assets/about.jpeg";
import Title from "./Title";

function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Tourvia, we believe travel is more than just seeing new
            places—it's about feeling them. We craft experiences that let you
            wander freely, explore deeply, and connect with the world on your
            own terms.
          </p>
          <p>
            No rush, no pressure, just the thrill of discovering what's out
            there. Wherever you’re headed, we’re here to help you find the
            moments that matter.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
