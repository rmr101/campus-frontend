import React from "react";
import RenderLink from "../RenderLink";
import getTeachingList from "../../../../../../../../apis/getTeachingList";
import NothingDisplay from "../NothingDisplay";
import CanvasTitleWrap from "../CanvasTitleWrapper";
import LoaderContainer from "../../../../../../../Layout/LoaderContainer";
import pagination from "../../../../../../../../utils/Algorithm/pagination";
import Loader from "../../../../../../../Loader";
import CanvasPagination from '../CanvasPagination';

const ITEM_PER_PAGE = 5;
class TeachingCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachingList: [],
      loading: true,
      page: 1,
      paginationArray: [],
    };
  this.handlePageChange = this.handlePageChange.bind(this);
  }

  async getTeachingList() {
    const resp = await getTeachingList();
    const teachingList = resp.hasOwnProperty("courseList")
      ? resp.courseList
      : [];
    this.setState({
      page: 1,
      teachingList,
      loading: false,
      paginationArray: pagination(teachingList, ITEM_PER_PAGE),
    });
  }

  componentDidMount() {
    this.getTeachingList();
  }
  handlePageChange(page) {
    this.setState({ page });
  }

  MapToRenderArray(array) {
    return array.map((obj) => {
      return {
        name: obj.name,
        id: obj.id,
      };
    });
  }
  renderList() {
    const { paginationArray, page } = this.state;
    return this.state.teachingList.length !== 0 ? (
      <CanvasTitleWrap title={"Your Teaching"}>
        <RenderLink
          RenderArray={this.MapToRenderArray(paginationArray[page - 1])}
          toPageID={"TeacherCourseAssignment"}
        />
        <CanvasPagination
          currentPage={page}
          totalPage={paginationArray.length}
          handlePageChange={this.handlePageChange}
        />
      </CanvasTitleWrap>
    ) : (
      <NothingDisplay name={"Teaching Courses"} />
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <LoaderContainer>
            <Loader color={"white"} />
          </LoaderContainer>
        ) : (
          this.renderList()
        )}
      </React.Fragment>
    );
  }
}

export default TeachingCourse;
