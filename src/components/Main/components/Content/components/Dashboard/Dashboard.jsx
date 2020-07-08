import React from 'react';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout/HalfWidthLayout';
import Button from "../../../../../Button";

const Dashboard = () => (
  <React.Fragment>
    <HalfWidthLayout title="Welcome" />
    <HalfWidthLayout
      title="Test"
      description="This area is for testing purpose"
    >
      <Button type={"LOGOUT"} />
    </HalfWidthLayout>
  </React.Fragment>
);

export default Dashboard;
