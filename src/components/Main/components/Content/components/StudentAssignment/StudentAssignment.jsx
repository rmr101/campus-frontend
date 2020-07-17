import React from "react";
import getStudentAssignmentList from "../../../../../../apis/getStudentAssignmentList";
import sortArrayByDueDate from "../../../../../../utils/Algorithm/sortArrayByDueDate";
import Loading from '../Loading';
import { connect } from "react-redux";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import pagination from '../../../../../../utils/Algorithm/pagination';
import NoContent from "../NoContent";
import RenderContentLink from "../RenderContentLink";
import {RadioItem,RadioLayout,RadioTitle} from '../../../../../Layout/RadioLayout/RadioLayout';
import Button from "../../../../../Button";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
  Page,
} from "../../../../../Layout/TableLayout/TableLayout";

//TODO: View Report 可以combine;
const ITEM_PER_PAGE = 4;

class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginationArray: [],
      displayOption: "all",
      assignmentList: [],
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page });
  }
  async getAssignmentList() {
    this.setState({
      loading: true,
    });
    const { assignmentList } = await getStudentAssignmentList();
    // TODO: 之后要做排序功能，以及加一个CoureseName
    this.setState({
      page:1,
      assignmentList: sortArrayByDueDate(assignmentList),
      paginationArray: pagination(
        sortArrayByDueDate(assignmentList),
        ITEM_PER_PAGE
      ),
      loading: false,
    });
  }

  componentDidMount() {
    this.getAssignmentList();
  }
  renderOption(option) {
    const {assignmentList} = this.state;
    switch (option) {
      case "all":
        this.setState(
          {
            page: 1,
            paginationArray: pagination(assignmentList,ITEM_PER_PAGE),
            displayOption: "all",
          });
        break;
      case "notSubmitted":
        this.setState({ 
            page: 1,
            displayOption: "notSubmitted",
            paginationArray: pagination(
              assignmentList.filter((obj) => !obj.submitted),
              ITEM_PER_PAGE
            )});
        break;
      case "scored":
        this.setState(
          {
            page: 1,
            displayOption: "scored",
             paginationArray: pagination(
              assignmentList.filter((obj) => obj.scored), ITEM_PER_PAGE)});
        break;
      default:
        this.setState({
          page: 1,
          paginationArray: pagination(assignmentList, ITEM_PER_PAGE),
          displayOption: "all",
        });
    }
  }
  renderResult() {
    const { page, paginationArray } = this.state;
    if (paginationArray.length === 0) {
      return <NoContent text={"You have no assignment to be done."} />;
    } else {
      let renderArray = [
        <HeaderRow key={"StudentAssignment " + Math.random()}>
          <IndexItem>No:</IndexItem>
          <TableItem>Name:</TableItem>
          <TableItem>Course:</TableItem>
          <TableItem>Due:</TableItem>
          <TableItem>Status:</TableItem>
          <TableItem>Report:</TableItem>
        </HeaderRow>,
        this.renderAssignmentList(paginationArray[page - 1]),
        <Page
          key={"StudentAssignment" + Math.random()}
          currentPage={page}
          handlePageChange={this.handlePageChange}
          totalPage={paginationArray.length}
        />
      ];
      return renderArray;
    }
  }
  renderAssignmentList(array) {
    //a_ for sorting purpose
    return array.map((obj, index) => {
      let {
        id,
        score,
        submitted,
        scored,
        comment,
        title,
        dueDate,
        courseName,
      } = obj;
      let RenderObj = {
        index: index,
        disable: scored,
        name: title,
        id: id,
        d_scored: scored ? (
          <Button type="VIEW_REPORT" comment={comment} score={score} />
        ) : (
          "No Report Yet"
        ),
        a_courseName:courseName,
        b_dueDate: dueDate.split("-").slice(1,3).join("/"),
        c_submitted: submitted ? "Done" : "No Submitted",
      };

      return (
        <RenderContentLink
          key={"StudentAssignment " + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Assignment"}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? (
            <Loading />
          ) : (
            <React.Fragment>
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
                    id="notSubmitted"
                    type="radio"
                    name="display"
                    checked={
                      this.state.displayOption === "notSubmitted" ? true : false
                    }
                    onChange={() => this.renderOption("notSubmitted")}
                  />
                  <label htmlFor="notSubmitted">Only not submitted</label>
                </RadioItem>
                <RadioItem>
                  <input
                    id="scored"
                    type="radio"
                    name="display"
                    checked={
                      this.state.displayOption === "scored" ? true : false
                    }
                    onChange={() => this.renderOption("scored")}
                  />
                  <label htmlFor="scored">Only marked</label>
                </RadioItem>
              </RadioLayout>
              <TableLayout>
                {this.renderResult()}
              </TableLayout>
            </React.Fragment>
          )}
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  header: state.headerHistory.title,
});
const StudentAssignmentContainer = connect(mapStateToProps)(StudentAssignment);
export default StudentAssignmentContainer;
