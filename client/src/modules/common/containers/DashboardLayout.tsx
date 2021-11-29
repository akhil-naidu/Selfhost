import React from 'react';
import ProfileCard from '../../user/components/ProfileCard';
import Dashboard from './Dashboard/Dashboard';

const DashboardLayout = () => {
  return <Dashboard children={<ProfileCard />} />;
};

export default DashboardLayout;
