import React from "react";
import getStudentAssignmentList from "../../../../../../apis/getStudentAssignmentList";
import Loading from '../Loading';
import { connect } from "react-redux";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import pagination from '../../../../../../utils/Algorithm/pagination';
import NoContent from "../NoContent/NoContent";
import RenderContentLink from "../RenderContentLink";
import {RadioItem,RadioLayout,RadioTitle} from '../../../../../Layout/RadioLayout/RadioLayout';

import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
  Page,
} from "../../../../../Layout/TableLayout/TableLayout";


const ITEM_PER_PAGE = 4;

class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginationArray: [],
      displayOption: "all",
      renderArray: null,
      assignmentList: null,
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

    this.setState({
      renderArray: assignmentList,
      assignmentList: assignmentList,
      paginationArray: pagination(assignmentList, ITEM_PER_PAGE),
      loading: false,
    });
  }

  componentDidMount() {
    this.getAssignmentList();
  }
  renderOption(option) {
    switch (option) {
      case "all":
        this.setState(
          {
            renderArray: this.state.assignmentList,
            displayOption: "all",
          },
          () =>
            this.setState({
              paginationArray: pagination(
                this.state.renderArray,
                ITEM_PER_PAGE
              ),
            })
        );
        break;
      case "notSubmitted":
        this.setState(
          {
            displayOption: "notSubmitted",
            renderArray: this.state.assignmentList.filter(
              (obj) => !obj.submitted
            ),
          },
          () =>
            this.setState({
              paginationArray: pagination(
                this.state.renderArray,
                ITEM_PER_PAGE
              ),
            })
        );
        break;
      case "scored":
        this.setState(
          {
            displayOption: "scored",
            renderArray: this.state.assignmentList.filter((obj) => obj.scored),
          },
          () =>
            this.setState({
              paginationArray: pagination(
                this.state.renderArray,
                ITEM_PER_PAGE
              ),
            })
        );
        break;
      default:
        this.setState({
          renderArray: this.state.assignmentList,
          paginationArray: pagination(this.state.renderArray, ITEM_PER_PAGE),
        });
    }
  }
  renderResult() {
    const { page, paginationArray } = this.state;
    if (paginationArray[page - 1].length === 0) {
      return <NoContent text={"You have no assignment to be done."} />;
    } else {
      let renderArray = [
        <HeaderRow key={"StudentAssignment " + Math.random()}>
          {" "}
          <IndexItem>No:</IndexItem>
          <TableItem>Name:</TableItem>
          <TableItem>Due:</TableItem>
          <TableItem>Submitted :</TableItem>
          <TableItem>Result :</TableItem>
          <TableItem>Comment :</TableItem>
        </HeaderRow>,
        this.renderAssignmentList(paginationArray[page - 1]),
      ];
      return renderArray;
    }
  }
  renderAssignmentList(array) {
    //a_ for sorting purpose
    return array.map((obj, index) => {
      let { id, score, submitted, scored, comment } = obj;
      let { title, dueDate } = obj.assignment;
      let RenderObj = {
        index: index,
        disable: scored,
        name: title,
        id: id,
        d_comment: comment,
        a_dueDate: dueDate + " 11:59 pm ",
        b_submitted: submitted ? "Done" : "No Submitted",
        c_scored: scored ? score : "Not Marked yet",
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
    const { page, paginationArray } = this.state;
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
                <Page
                  currentPage={page}
                  handlePageChange={this.handlePageChange}
                  totalPage={paginationArray.length}
                />
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
