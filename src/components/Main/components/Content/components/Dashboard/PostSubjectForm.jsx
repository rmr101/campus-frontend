import React from "react";
import Loader from "../../../../../Loader";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import styles from "./PostSubjectForm.module.scss";
import postSubject from "../../../../../../apis/postSubject";
import LoaderContainer from "../../../../../Layout/LoaderContainer";
import {
  FormLayout,
  FormTitle,
  FormItem,
  HorizontalRow,
  Button,
  DummyButtonBlock,
  SmallText,
} from "../../../../../Layout/FormLayout/FormLayout";

class PostSubjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      errorMessage: "",
      notNullableError:"",
      name: "",
      subjectCode: "",
      introduction: "",
    };
  }

  handleSubjectCodeChange() {
    this.setState({ errorMessage: "" },this.validateSubjectCode);
  }
  validateSubjectCode() {
    const regex = /[A-Za-z]/;
    let flag ;
    this.state.subjectCode.split("").forEach((char) => {
      if (!regex.test(char) && char) {
        this.setState({ errorMessage: `${char} is not a valid character.` });
        flag = false;
      } else if(char){
        flag = true;
      }
    });
    return flag;
  }
  checkNull(){
    const {  postSuccessful,loading,errorMessage,notNullableError,...checkProps} = this.state;
    for( let prop in checkProps){
     if(!checkProps[prop].trim()) {
       this.setState({ notNullableError: "Not empty input is allowed." });
      }
   }
  }
  handleValueChange(name) {
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
          notNullableError: "",
        },
        this.checkNull);
    };
  }
  async postSubject() {
    const { loading, postSuccessful,errorMessage,notNullableError, ...postBody } = this.state;
    this.setState({
      loading: true,
    });
    await postSubject(postBody)
      .then(() => {
        this.setState(
          {
            loading: false,
            postSuccessful: true,
          },
          () => setTimeout(() => this.setState({ postSuccessful: false }), 2000)
        );
      })
      .catch(console.log);
  }
  onSubmit() {
    this.postSubject();
  }
  render() {
    return (
      <FullWidthLayout>
        <FormLayout
          className={this.state.postSuccessful ? "successful" : null}
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          <FormTitle>Post New Subject</FormTitle>
          {this.state.loading ? (
            <LoaderContainer background>
              <Loader />
            </LoaderContainer>
          ) : null}
          <HorizontalRow>
            <FormItem>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name for the subject"
                maxLength={30}
                required
                onChange={(event) => this.handleValueChange("name")(event)}
              />
            </FormItem>
            <FormItem>
              <label
                htmlFor="subjectCode"
                className={!this.state.errorMessage ? null : styles.error}
              >
                Subject Code:{" "}
              </label>
              <input
                id="subjectCode"
                type="text"
                placeholder="Enter 3 letters subject code"
                minLength={3}
                maxLength={3}
                required
                onChange={(event) => {
                  this.handleValueChange("subjectCode")(event);
                  this.handleSubjectCodeChange();
                }}
              />
            </FormItem>
          </HorizontalRow>
          <FormItem>
            <label htmlFor="Intro">Introduction: </label>
            <textarea
              id="Intro"
              className={styles.intro}
              placeholder="Enter introduction for the subject"
              required
              onChange={(event) => {
                this.handleValueChange("introduction")(event);
              }}
            />
          </FormItem>
          {!this.state.errorMessage && !this.state.notNullableError ? (
            <Button type="submit">Add New Subject</Button>
          ) : (
            <DummyButtonBlock>Unable to Click</DummyButtonBlock>
          )}
          {this.state.postSuccessful ? (
            <SmallText>Successful.</SmallText>
          ) : null}
          {this.state.errorMessage || this.state.notNullableError ? (
            <SmallText className={"error"}>
              {this.state.errorMessage + " " + this.state.notNullableError}
            </SmallText>
          ) : null}
        </FormLayout>
      </FullWidthLayout>
    );
  }
}

export default PostSubjectForm;
