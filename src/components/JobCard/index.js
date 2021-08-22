import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Card, Tag, Rate, Button, notification } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Job Report',
    description:
      'This recent job update has been reported from your account.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

export default function JobCard(JobDetails) {
  const [jobModalVisibilityState, setJobModalVisibilityState] = useState(false);
  const [reportRecentJobSuggestionsDropdownState, setReportJobSuggestionsDropdownState] = useState('none');
  return (
    <Card className="job-card" style={{
      transition: 'all 0.2s ease-in-out'
    }}>
      <div className="job-card-header" 
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
        onClick={() => setReportJobSuggestionsDropdownState('block')}
      >
        <h3>{ JobDetails.JobTitle }</h3>
        <DownOutlined style={{
          marginLeft: 'auto'
        }} />
      </div>
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
        marginTop: '1.2em'
      }}>
        <Button type="primary"
          onClick={() => setJobModalVisibilityState(true)}
        >
          Apply now
        </Button>
        <Rate />
      </div>
      <Button onClick={openNotification} style={{ display: `${reportRecentJobSuggestionsDropdownState}` }}>
        Report job update
      </Button>
      <ReactModal isOpen={jobModalVisibilityState} onRequestClose={() => setJobModalVisibilityState(false)} style={{
        content: {
          width: '900px',
          height: '350px',
          margin: 'auto'
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <Button type="danger" onClick={() => setJobModalVisibilityState(false)} style={{
          }}
          >
            Close
          </Button>
          <Rate style={{ marginLeft: 'auto' }}/>
        </div>
      </ReactModal>
    </Card>
  )
}