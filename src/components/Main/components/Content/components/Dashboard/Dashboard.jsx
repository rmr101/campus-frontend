import React from 'react';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout/HalfWidthLayout';
import PostSubjectForm from './PostSubjectForm';
import { connect } from "react-redux";

const Dashboard = ({role}) => (
  <React.Fragment>
    <HalfWidthLayout title="Welcome" />
    <HalfWidthLayout title="Future features" background>
      To be implemented...
    </HalfWidthLayout>

    {/* TODO: this whole full width layout is about posting course detail as admin,
     can be moved later. remember to bring the style with you, or could just be left at the dashboard  */}
    {role === "ADMIN" ? <PostSubjectForm />:null}
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  role: state.Authentication.role,
});
const DashboardContainer = connect(mapStateToProps)(Dashboard);
export default DashboardContainer;

