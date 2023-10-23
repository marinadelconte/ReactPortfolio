import '../styles/styles.css';



export default function About() {
    return (
      <>
      <div className="about-text">
        <h2>Hi, thanks for stopping by.</h2>
          <p>My name is Marina Del Conte and I am Full Stack Software Developer who enjoys experimenting and creating fun, interactive designs through code. I am a recent graduate of the University of Pennsylvania's Full Stack Coding Bootcamp, and prior to enrolling in the Bootcamp, I was working in financial marketing as a Communications Coordinator. After much consideration, I decided to change career paths and pursue a career in software development. I am continuing to grow and expand upon my experience, and look forward to career opportunities to succeed as a Full Stack Software Developer. </p>
      </div>
      <div className="social-media-logos">
        <h3>View more of my professional experience here: </h3>
        <a href="https://www.linkedin.com/in/marina-delconte/" target="_blank"><img className="linkedin-logo" src="././linkedin-logo.jpg" alt="Linkedin logo"></img></a>
        <a href="https://github.com/marinadelconte/" target="_blank"><img className="github-logo" src="././github-logo.jpg" alt="Linkedin logo"></img></a>
      </div>
      </>
    );
  }
  