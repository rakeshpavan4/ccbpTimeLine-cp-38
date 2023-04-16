// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {ProjectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectDetails
  return (
    <div>
      <img src={imageUrl} alt="project" className="image" />
      <div className="header">
        <h1>{projectTitle}</h1>
        <div className="header">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="color">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
