import '../styles/styles.css';
import MyResume from '/MarinaDelConte - Resume 2024.pdf'

export default function Resume() {
  return (
    <div>
      <h3 className="resume">
            If you would like to see more of my credentials and experience, you can download my full resumé <u><a href={MyResume} download>here</a></u>.
      </h3>
      <div id="skills"> 
        <div >
          <ul className="skills">
            <h4>Technical Skills:</h4>
            <li>JavaScript ES6+</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Node.js/Express.js</li>
            <li>MERN Stack</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Git/GitHub/Git Version Control</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Insomnia</li>
            <li>Visual Studio Code</li>
          </ul>
          <ul className="skills-2">
            <h4>Additional Skills:</h4>
            <li>WordPress & WP Plugins</li>
            <li>Salesfusion</li>
            <li>Salesforce</li>
            <li>Microsoft Office</li>
            <li>Microsoft Outlook</li>
            <li>Social Media</li>
            <li>HubSpot</li>
            <li>Hootsuite</li>
            <li>Canva</li>
            <li>Camtasia</li>
            <li>Vimeo</li>
            <li>Salesfusion</li>
            <li>Adobe InDesign</li>
            <li>Adobe Illustrator</li>
            <li>Writing/Editing</li>
            <li>GoDaddy</li>
            <li>SEO</li>
                       
          </ul>
        </div>
      </div>


    </div>
  );
}
