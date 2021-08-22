import './style.css';
import React, { useState } from 'react';
import { Input, Button, Switch, Dropdown, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import GetRecentJobsData from '../../data/GetRecentJobsData';
import JobCard from '../../components/JobCard';

function handleMenuClick(locationDropdownSelectedOption) {
  message.info('selected ' + locationDropdownSelectedOption);
  console.log(locationDropdownSelectedOption);
  console.log('drop-down button clicked!');
}

export default function Home() {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        USA
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        India
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        UK
      </Menu.Item>
    </Menu>
  );
  const [recentJobsData] = useState(GetRecentJobsData());
  // const [jobLocationSelectorDropdownVisibilityState, setJobLocationSelectorDropdownVisibilityState] = useState('none');
  return (
    <div className="home-view">
      <h1>Jobs for Steve</h1>
      <div className="job-search-input-wrapper">
        <Input type="text" className="job-search-input" placeholder="Search some good jobs for steve" />
        <Dropdown overlay={menu}>
          <Button>
            Location <DownOutlined />
          </Button>
        </Dropdown>
        <Button type="primary">Search for openings</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em', marginTop: '1em' }}>
        <u>Remote jobs only</u><Switch />
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