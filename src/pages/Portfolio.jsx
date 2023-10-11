import Project from '/src/components/Project';
import '../styles/styles.css';

const projects = [
{
  projectTitle: "My Recipe Book",
  projectUrl: "https://project-3-app-mck-b96b86dfcabe.herokuapp.com/",
  about: "An interactive MERN application that allows users to search for recipes and save them to their personal recipe book."
},
{
  projectTitle: "Travel Tracker",
  projectUrl: "https://travel-tracker-msc-0fe902780013.herokuapp.com/",
  about: "Uses a map API, node.js, express.js, Handlebars, bcrypt, Bulma, MySQL, and the Sequelize ORM to allow users to track places that they have visited on an interactive map."
},
{
  projectTitle: "Brewery Locator & Random Joke Generator",
  projectUrl: "https://pb1983.github.io/Project1/",
  about: "Utilizes two API's, JavaScript, CSS, HTML, and Local Storage to provide users with a list of breweries in their area and a random joke that they can use once they get there."
},
{
  projectTitle: "Book Search Engine",
  projectUrl: "https://limitless-taiga-59709-c8b8e6dbc195.herokuapp.com/",
  about: "An application created using React, MERN stack, node.js/express.js and graphql."
},
{
  projectTitle: "Work Day Scheduler",
  projectUrl: "https://marinadelconte.github.io/WorkDayScheduler/",
  about: "This was developed using JavaScript, HTML, and CSS to provide a digital calendar from 9am-5pm where the user can enter in calendar details and save to the page."
},
{
  projectTitle: "Code Quiz",
  projectUrl: "https://marinadelconte.github.io/CodeQuiz/",
  about: "This application utilizes JavaScript, HTML and CSS to display a multiple quiz choice on some JavaScript fundamentals."
}
]

export default function Portfolio() {
    return (
      <div>
          {projects.map((project, id) => (
            <Project project={project} key={"project" + id}>

            </Project>
          ))}
      </div>
    );
  }
  