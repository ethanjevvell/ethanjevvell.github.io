import uniqid from "uniqid";
import { GitHub, Launch } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <Link to={`/project/${project.name}`}>
    <div className="project">
      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a href={project.sourceCode} aria-label="source code" className="link link--icon">
          <GitHub />
        </a>
      )}

      {project.livePreview && (
        <a href={project.livePreview} aria-label="live preview" className="link link--icon">
          <Launch />
        </a>
      )}
    </div>
  </Link>
);

export default ProjectContainer;
