import React from 'react';
import getAssignmentDetail from "../../../../../../apis/getAssignmentDetail";
import sortArrayByScore from "../../../../../../utils/Algorithm/sortArrayByScore";
import pagination from "../../../../../../utils/Algorithm/pagination";
import Loading from '../Loading';
import {connect} from 'react-redux';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout'
import NoContent from '../NoContent';
import getS3Link from "../../../../../../apis/AWS/getS3Link";
import Button from "../../../../../Button";
import {DisplayTitle,DisplaySubHeading,DisplayContent,DisplayLayout} from '../../../../../Layout/DisplayContentLayout/DisplayContentLayout';
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
  Row,
  Page,
} from "../../../../../Layout/TableLayout/TableLayout";
import {
  RadioItem,
  RadioLayout,
  RadioTitle,
} from "../../../../../Layout/RadioLayout/RadioLayout";


const ITEM_PER_PAGE = 5;

class MarkingAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginationArray: [],
      displayOption: "all",
      scoreChange: false,
      assignmentDetail: null,
      studentAssignmentList: [],
      loading: true,
    };
    this.handleReview = this.handleReview.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page });
  }
  async getStudentAssignmentList() {
    const { id, courseID } = this.props;
    const { assignment, studentAssignmentList } = await getAssignmentDetail(
      id,
      courseID
    );
    this.setState({
      page: 1,
      assignmentDetail: assignment,
      studentAssignmentList: sortArrayByScore(studentAssignmentList),
      paginationArray: pagination(
        sortArrayByScore(studentAssignmentList),
        ITEM_PER_PAGE
      ),
      loading: false,
    });
  }
  renderOption(option) {
    switch (option) {
      case "all":
        this.setState({
          page: 1,
          paginationArray: pagination(
            this.state.studentAssignmentList,
            ITEM_PER_PAGE
          ),
          displayOption: "all",
        });
        break;
      case "notMarked":
        this.setState({
          page: 1,
          displayOption: "notMarked",
          paginationArray: pagination(this.state.studentAssignmentList.filter(
            (obj) => obj.submitted && !obj.scored
          ),ITEM_PER_PAGE),
        });
        break;
      default:
        this.setState({
          page: 1,
          paginationArray: pagination(
            this.state.studentAssignmentList,
            ITEM_PER_PAGE
          ),
          displayOption: "all",
        });
        break;
    }
  }
  invokeLinkClick(url){
    let link = document.createElement("a");
      link.href = url;
      link.click();
  }
  async downloadFileFromS3(objectKey) {
    const { url } = await getS3Link(objectKey);
    this.invokeLinkClick(url);
  }
  componentDidUpdate() {
    if (this.state.scoreChange) {
      this.setState({ scoreChange: false }, () =>
        this.getStudentAssignmentList()
      );
    }
  }
  componentDidMount() {
    this.getStudentAssignmentList();
  }
  handleReview() {
    this.setState({ scoreChange: true });
  }
  renderArray(array) {
    let renderArray = [];
    array.forEach((obj, number) => {
      const { attachmentUrl, score, submitted, scored, id } = obj;
      renderArray.push(
        <Row key={"MarkingAssignmentID" + Math.random()}>
          <IndexItem>No. {number + 1}</IndexItem>
          {submitted ? (
            <TableItem onClick={() => this.downloadFileFromS3(attachmentUrl)}>
              Download Response
            </TableItem>
          ) : (
            <TableItem>Not Submitted yet</TableItem>
          )}
          <TableItem>{scored ? score : "Not Marked yet"}</TableItem>
          <TableItem>
            {submitted ? (
              <Button type="MARKING" id={id} handleReview={this.handleReview} />
            ) : null}
          </TableItem>
        </Row>
      );
    });
    return renderArray;
  }
  renderStudentAssignmentList() {
    const { page,paginationArray } = this.state;
    if (paginationArray.length === 0) {
      return <NoContent text="No assignment to be marked." />
    } else {
      return (
        <TableLayout>
          <HeaderRow>
            <IndexItem>No. </IndexItem>
            <TableItem>Response status: </TableItem>
            <TableItem>Score:</TableItem>
            <TableItem></TableItem>
          </HeaderRow>
          {this.renderArray(paginationArray[page - 1])}
          <Page
            currentPage={page}
            handlePageChange={this.handlePageChange}
            totalPage={paginationArray.length}
          />
        </TableLayout>
      );
    }
  }
  renderAssignmentDetail() {
    const {
      title,
      courseName,
      dueDate,
      acceptanceCriteria,
      content,
    } = this.state.assignmentDetail;

    return (
      <DisplayLayout>
        <DisplayTitle>
          {courseName} - {title}
        </DisplayTitle>
        <DisplaySubHeading>Due: {dueDate} 11:59 pm </DisplaySubHeading>
        <DisplaySubHeading>Acceptance Criteria: </DisplaySubHeading>
        <DisplayContent> {acceptanceCriteria} </DisplayContent>
        <DisplaySubHeading>Content: </DisplaySubHeading>
        <DisplayContent> {content} </DisplayContent>
      </DisplayLayout>
    );
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderAssignmentDetail()}
        </FullWidthLayout>
        <FullWidthLayout>
          <RadioLayout>
            <RadioTitle> Display Option: </RadioTitle>
            <RadioItem>
              <input
                id="all"
                type="radio"
                name="display"
                checked={this.state.displayOption === "all" ? true : false}
                onChange={() => this.renderOption("all")}
              />
              <label htmlFor="all">All</label>
            </RadioItem>
            <RadioItem>
              <input
                id="notMarked"
                type="radio"
                name="display"
                checked={
                  this.state.displayOption === "notMarked" ? true : false
                }
                onChange={() => this.renderOption("notMarked")}
              />
              <label htmlFor="notMarked">Only not marked</label>
            </RadioItem>
          </RadioLayout>
          {this.renderStudentAssignmentList()}
        </FullWidthLayout>
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  courseID: state.headerHistory.content.secondID,
});
const MarkingAssignmentContainer = connect(mapStateToProps)(MarkingAssignment);
export default MarkingAssignmentContainer;
