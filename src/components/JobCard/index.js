import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Card, Tag, Rate, Button } from 'antd';

export default function JobCard(JobDetails) {
  const [jobModalVisibilityState, setJobModalVisibilityState] = useState(false);
  return (
    <Card className="job-card">
      <h3>{ JobDetails.JobTitle }</h3>
      <p>{ JobDetails.JobDescription }</p>
      <div className="job-card__required-skills-wrapper">
        {JobDetails.RequiredSkills.map((skillTag) => {
          if (skillTag === 'ReactJS') {
            return <Tag color="blue">{skillTag}</Tag>
          } else if (skillTag === 'CSS') {
            return <Tag color="magenta">{skillTag}</Tag>
          } else if (skillTag === 'Javascript') {
            return <Tag color="yellow">{skillTag}</Tag>
          } else if (skillTag === 'UI Design') {
            return <Tag color="green">{skillTag}</Tag>
          } else if (skillTag === 'UI Development') {
            return <Tag color="cyan">{skillTag}</Tag>
          } else if (skillTag === 'JSX/HTML') {
            return <Tag color="geekblue">{skillTag}</Tag>
          } else if (skillTag === 'Storybook') {
            return <Tag color="gold">{skillTag}</Tag>
          } else if (skillTag === 'Chromatic') {
            return <Tag color="orange">{skillTag}</Tag>
          } else {
            return <Tag>{skillTag}</Tag>
          }
        })}
      </div>
      <div style={{
        display: 'grid',
        marginTop: '1.2em'
      }}>
        <Rate style={{
          marginLeft: 'auto',
          marginBottom: '1em'
        }} />
        <Button type="primary"
          onClick={() => setJobModalVisibilityState(true)}
        >
          Apply now
        </Button>
      </div>
      <ReactModal isOpen={jobModalVisibilityState} onRequestClose={() => setJobModalVisibilityState(false)} style={{
        content: {
          width: 'fit-content',
          height: '350px'
        }
      }}>
        <h1>{ JobDetails.JobTitle }</h1>
        <p>{ JobDetails.JobDescription }</p>
        <div className="job-card__required-skills-wrapper">
          {JobDetails.RequiredSkills.map((skillTag) => {
            if (skillTag === 'ReactJS') {
              return <Tag color="blue">{skillTag}</Tag>
            } else if (skillTag === 'CSS') {
              return <Tag color="magenta">{skillTag}</Tag>
            } else if (skillTag === 'Javascript') {
              return <Tag color="yellow">{skillTag}</Tag>
            } else if (skillTag === 'UI Design') {
              return <Tag color="green">{skillTag}</Tag>
            } else if (skillTag === 'UI Development') {
              return <Tag color="cyan">{skillTag}</Tag>
            } else if (skillTag === 'JSX/HTML') {
              return <Tag color="geekblue">{skillTag}</Tag>
            } else if (skillTag === 'Storybook') {
              return <Tag color="gold">{skillTag}</Tag>
            } else if (skillTag === 'Chromatic') {
              return <Tag color="orange">{skillTag}</Tag>
            } else {
              return <Tag>{skillTag}</Tag>
            }
          })}
        </div>
        <h3>Job type ({ JobDetails.JobType })</h3>
        <p><b>Location - </b>{ JobDetails.CompanyLocation }</p>
        <span>Job working location </span><Tag>{ JobDetails.JobLocation }</Tag>
        <div>
          <Tag>Minimum { JobDetails.MinimumPay }</Tag> to <Tag>Maximum { JobDetails.MaximumPay }</Tag>
        </div>
        <Button type="danger" onClick={() => setJobModalVisibilityState(false)} style={{
          position: 'fixed',
          marginTop: '20px',
          display: 'grid'
        }}
        >
          Close
        </Button>
      </ReactModal>
    </Card>
  )
}