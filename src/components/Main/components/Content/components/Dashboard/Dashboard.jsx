import React from 'react';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout/HalfWidthLayout';
import PostCourseForm from './PostCourseForm';

const Dashboard = () => (
  <React.Fragment>
    <HalfWidthLayout title="Welcome" />
    <HalfWidthLayout title="Future features" background>
      To be implemented...
    </HalfWidthLayout>

    {/* TODO: this whole full width layout is about posting course detail as admin,
     can be moved later. remember to bring the style with you  */}
    <PostCourseForm />
  </React.Fragment>
);

export default Dashboard;
