import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date="2016 - 2017"
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Gurukul Convent Hr. Sec. School
          </h3>
          <p>
            Secondary Education
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gyan Ganga International Academy, Bhopal, India
          </h3>
          <p>
            Higher Secondary Education
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rajiv Gandhi Proudyogiki Vishwavidyala, Bhopal, India
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p>
            Computer Science and Engineering
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MedTourEasy, Gurugram, India
          </h3>
          <p>
            Cloud Computing Trainee
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nagarro, Gurugram, India
          </h3>
          <p>
            Software Devloper Trainee (JAVA)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience