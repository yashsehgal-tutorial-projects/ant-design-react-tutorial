import './style.css';
import React, { useState } from 'react';
import { Input, Button, Divider, Row, Col, Card, Switch, Rate, Carousel } from 'antd';
import FullscreenOutlined from '@ant-design/icons';
import ReactModal from 'react-modal';

export default function Home() {
  return (
    <div className="home-view">
      <h1>Search for job openings, all around the world</h1>
      <div className="job-search-input-wrapper">
        <Input type="text" className="job-search-input" />
        <Button type="primary">Search for openings</Button>
      </div>
    </div>
  )
}