import '../styles/styles.css';
import MyResume from '../../public/Resume2023.pdf'

export default function Resume() {
  return (
    <div>
      <h3 className="resume">
            If you would like to see more of my credentials and experience, you can download my full resume <u><a href={MyResume} download>here</a></u>.
      </h3>
      <div id="skills"> 
        <div >
          <ul className="skills">
            <h4>Technical Skills:</h4>
            <li>JavaScript ES6+</li>
            <li>jQuery</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>GitHub</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>Insomnia</li>
            <li>React</li>
            <li>Node</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
          <ul className="skills-2">
            <h4>Additional Skills:</h4>
            <li>Microsoft Office Systems</li>
            <li>Windows & Mac Operating Systems</li>
            <li>Outlook</li>
            <li>HubSpot</li>
            <li>Canva</li>
            <li>WordPress</li>
            <li>Vimeo</li>
            <li>Salesfusion</li>
            <li>Adobe InDesign</li>
            <li>Adobe Illustrator</li>
            <li>Camtasia</li>
            <li>Hootsuite</li>
          </ul>
        </div>

      </div>


    </div>
  );
}
