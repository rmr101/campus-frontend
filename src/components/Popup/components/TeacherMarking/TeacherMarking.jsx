import React from "react";

import putReviewOnAssignment from '../../../../apis/putReviewOnAssignment';
import  Loader from '../../../Loader';
import LoaderContainer from "../../../Layout/LoaderContainer";
import {
  FormLayout,
  Button,
  SmallText,
  FormItem
} from "../../../Layout/FormLayout/FormLayout";
// Post object would need a name

class TeacherMarking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      comment: "",
      score: 0,
      successful: false,
    };
  }

  onSubmit() {
    const { id } = this.props;
    this.putReview(id);
  }
  async putReview(id){
    const {score,comment} = this.state
    this.setState({loading:true});
    await putReviewOnAssignment(id, score, comment)
      .then(() =>
        this.setState(
          {
            successful: true,
            loading: false,
          },
          () => {
            setTimeout(() => this.setState({ successful: false }), 3000);
          }
        )
      )
      .catch(console.log);
  }
  handleValueChange(name) {
    this.setState({
      successful: false,
    });
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
        });
    };
  }


  render() {
    return (
      <FormLayout
        className={this.state.successful?"successful":null}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : null}
        <FormItem>
          <label>Enter Score:</label>
          <input
            type="number"
            placeholder="Enter score"
            required
            max={100}
            min={0}
            onChange={(event) => this.handleValueChange("score")(event)}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            placeholder="Enter comment for this assignment"
            required
            onChange={(event) => {
              this.handleValueChange("comment")(event);
            }}
          ></textarea>
        </FormItem>

        {this.state.successful ? <SmallText> Successful. </SmallText> : null}
        <Button type="submit">Confirm</Button>
      </FormLayout>
    );
  }
}
export default TeacherMarking;
