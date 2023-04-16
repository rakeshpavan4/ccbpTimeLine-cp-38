// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {CourseDetails} = props
  const {courseTitle, description, duration, tagsList} = CourseDetails
  return (
    <>
      <div className="header">
        <h1>{courseTitle}</h1>
        <div className="header">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <div>
        <p>{description}</p>
        <ul className="taglist-container">
          {tagsList.map(each => (
            <li key={each.id} className="tag">
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimelineCard
