// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const rendertimelineItemsList = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} CourseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} ProjectDetails={item} />
  }
  return (
    <div className="chrono-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => rendertimelineItemsList(each))}
      </Chrono>
    </div>
  )
}
export default TimelineView
