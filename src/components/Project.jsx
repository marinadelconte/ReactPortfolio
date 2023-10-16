import '../styles/styles.css';

function Project(props) {
  return (
    <div className="projects">
      <div className="card" style={{width: "370px", height: "480px"}}>
        <div className="card-body">
          <img className="card-img" height="100%" src={props.project.image} alt="card image"></img>
          <h5 className="card-title">{props.project.projectTitle}</h5>
          <p className="card-text">{props.project.about}</p>
          <a href={props.project.projectUrl} target="_blank" className="card-link">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
