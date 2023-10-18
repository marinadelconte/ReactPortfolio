import '../styles/styles.css';

export default function Home() {
  return (
    <div>
    <a href="https://www.linkedin.com/in/marina-delconte/" target="_blank"><img src="/IMG_9039.jpg" alt="Headshot"></img></a>
    
    <aside>
        <container className="home-text">
      <h1 className="welcome">Welcome to my digital portfolio!</h1>
      <a href="https://www.linkedin.com/in/marina-delconte/" target="_blank"><img className="linkedin-logo" src="/linkedin-logo.jpg" alt="linkedin"></img></a>             
      <a href="https://github.com/marinadelconte" target="_blank"><img className="github-logo" src="github.png" alt="github"></img></a>
      <a href="" target="_blank"><img className="wordpress-logo" src="wordpress.png" alt="wordpress"></img></a>
        </container>
    </aside>

        
    </div>
    
  );
}
