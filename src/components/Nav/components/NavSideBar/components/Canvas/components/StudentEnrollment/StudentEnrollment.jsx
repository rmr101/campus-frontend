import React from 'react';
import RenderLink from '../RenderLink';
import getStudentEnrollment from "../../../../../../../../apis/getStudentEnrollment";
import styles from "./StudentEnrollment.module.scss";
import NothingDisplay from "../NothingDisplay";
import CanvasTitleWrap from '../CanvasTitleWrapper';
import pagination from '../../../../../../../../utils/Algorithm/pagination';
import LoaderContainer from '../../../../../../../Layout/LoaderContainer';
import Loader from "../../../../../../../Loader";
import CanvasPagination from '../CanvasPagination';

const ITEM_PER_PAGE = 4;

class StudentEnrollment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
      loading: true,
      page: 1,
      paginationArray: [],
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async getCourseList() {
    const { courseList } = await getStudentEnrollment();
    this.setState({
      page: 1,
      courseList,
      loading: false,
      paginationArray: pagination(courseList, ITEM_PER_PAGE),
    });
  }
  handlePageChange(page) {
    this.setState({ page });
  }

  componentDidMount() {
    this.getCourseList();
  }
  MapToRenderArray(array) {
    return array.map((obj) => ({
      name: obj.name,
      id: obj.id,
    }));
  }
  renderList(){
    const { paginationArray, page } = this.state;
    return this.state.courseList.length !== 0 ? (
      <CanvasTitleWrap title={"Enrollment"}>
        <RenderLink
          RenderArray={this.MapToRenderArray(paginationArray[page - 1])}
          toPageID={"StudentCourse"}
          titleSuffix={"Files"}
        />
        <div className={styles.filler}></div>
        <CanvasPagination
          currentPage={page}
          totalPage={paginationArray.length}
          handlePageChange={this.handlePageChange}
        />
      </CanvasTitleWrap>
    ) : (
      <NothingDisplay name={"Enrol Courses"} />
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
};


export default StudentEnrollment;
