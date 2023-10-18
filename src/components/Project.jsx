import '../styles/styles.css';

function Project(props) {
  return (
    <div className="projects display-card">
      <a href={props.project.projectUrl} target="_blank" className="card-link">
      <div className="card" style={{width: "370px", height: "450px"}}>
        <div className="card-body">
          <img className="card-img" height="100%" src={props.project.image} alt="card image"></img>
          <h5 className="card-title">{props.project.projectTitle}</h5>
          <p className="card-text">{props.project.about}</p>
        </div>
      </div>
      </a>
    </div>
  );
}

export default Project;
