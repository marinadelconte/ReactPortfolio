import '../styles/styles.css';

export default function Home() {
  return (
    <div>
    <a href="https://www.linkedin.com/in/marina-delconte/" target="_blank"><img src="/IMG_9039.jpg" alt="Headshot"></img></a>
    
    <aside>
        <container className="home-text">
      <h1 className="welcome">Welcome to my digital portfolio!</h1>
      {/* <h2 className="links">Follow these links to learn more about me...</h2> */}
      <a href="https://www.linkedin.com/in/marina-delconte/" target="_blank"><img className="linkedin-logo" src="/linkedin-logo.jpg"></img></a>
      <a href="https://github.com/marinadelconte" target="_blank"><img className="github-logo" src="github.png"></img></a>
      <a href="" target="_blank"><img className="wordpress-logo" src="wordpress.png"></img></a>
        </container>
    </aside>

        
    </div>
    
  );
}
