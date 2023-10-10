import Project from '/src/components/Project';
import '../styles/styles.css';

const projects = [
{
  projectTitle: "test",
  projectUrl: "www.google.com",
  about: "asdfsdf"
},
{
  projectTitle: "Travel Tracker",
  projectUrl: "www.yahoo.com",
  about: "asdfsdf"
},
{
  projectTitle: "Brewery Locator & Random Joke Generator",
  projectUrl: "https://pb1983.github.io/Project1/",
  about: "asdfsdf"
},
{
  projectTitle: "test2",
  projectUrl: "www.yahoo.com",
  about: "asdfsdf"
},
{
  projectTitle: "test2",
  projectUrl: "www.yahoo.com",
  about: "asdfsdf"
},
{
  projectTitle: "test2",
  projectUrl: "www.yahoo.com",
  about: "asdfsdf"
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
  