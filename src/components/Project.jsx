import '../styles/styles.css';

function Project(props) {
  return (
    <div className="projects">
      <div className="card" style={{width: "300px", height: "250px"}}>
        <div className="card-body">
          <h5 className="card-title">{props.project.projectTitle}</h5>
          <h6 className="card-subtitle mb-2"></h6>
          <p className="card-text">{props.project.about}</p>
          <a href={props.project.projectUrl} className="card-link">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
