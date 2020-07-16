import React from 'react';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout';
import Button from '../../../../../Button';

export default ({ enrolled, id, handleEnrol }) =>
  enrolled ? (
    <HalfWidthLayout title={"Enrol This Course"} background>
      You have already enrolled in this course.
    </HalfWidthLayout>
  ) : (
    <HalfWidthLayout
      title={"Enrol This Course"}
      description={"currently enrolment are for free"}
    >
      <Button type={"ENROL"} id={id} handleEnrol={handleEnrol} />
    </HalfWidthLayout>
  );