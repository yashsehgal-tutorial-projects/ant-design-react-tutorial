import './style.css';
import React, { useState } from 'react';
import { Input, Button, Switch } from 'antd';
import GetRecentJobsData from '../../data/GetRecentJobsData';
import Select from 'rc-select';
import JobCard from '../../components/JobCard';

export default function Home() {
  const [recentJobsData] = useState(GetRecentJobsData());
  return (
    <div className="home-view">
      <h1>Jobs for Steve</h1>
      <div className="job-search-input-wrapper">
        <Input type="text" className="job-search-input" placeholder="Search some good jobs for steve" />
        <Button type="primary">Search for openings</Button>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Switch />
        </span>
      </div>
      <div className="recent-jobs-section" style={{ marginTop: '2em' }}>
        <h2>Some jobs, steve might want to apply for</h2>
        <div className="recent-jobs-wrapper" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'auto auto auto', 
            marginTop: '2em',
            gap: '1em',
            rowGap: '1.2em' 
          }}>
          {recentJobsData.map((data, key) => (
            <JobCard 
              JobTitle={data.job_title}
              JobDescription={data.job_description}
              RequiredSkills={data.required_skills}
              JobType={data.job_type}
              CompanyLocation={data.company_location}
              JobLocation={data.job_location}
              MinimumPay={data.minimum_pay}
              MaximumPay={data.maximum_pay}
              key={key}
            />
          ))}
        </div>
      </div>

    </div>
  )
}