import React from "react";
import {FormItem,FormLayout} from '../../../Layout/FormLayout/FormLayout';

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <FormLayout
      >
        <FormItem>
          <label htmlFor="teacherUuid">Enter TeacherUuid</label>
          <input type="text" id="teacherUuid"/>
        </FormItem>
      </FormLayout>
    );
  }
}
export default AddTeacher;
