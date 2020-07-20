import React from 'react';
import RenderLink from '../RenderLink';
import getSubjectList from './../../../../../../../../apis/getSubjectList';
import styles from "./CourseMarket.module.scss";
import CanvasTitleWrap from '../CanvasTitleWrapper';
import pagination from '../../../../../../../../utils/Algorithm/pagination';
import LoaderContainer from '../../../../../../../Layout/LoaderContainer';
import Loader from "../../../../../../../Loader";
import CanvasPagination from '../CanvasPagination';
const ITEM_PER_PAGE = 7;

class CourseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: [],
      loading: true,
      page:1,    
      paginationArray:[]
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  async getSubjectList() {
    const { subjectList } = await getSubjectList();
    this.setState(
      { page:1,  
        subjectList: subjectList, 
        loading: false,
        paginationArray:pagination(subjectList, ITEM_PER_PAGE)
      });
  }
  handlePageChange(page){
    this.setState({page})
  }

  componentDidMount() {
    this.getSubjectList();
  }
  MapToRenderArray(array) {
    return array.map((obj) => ({
      name: obj.name,
      id: obj.id,
    }));
  }

  render() {
    const {paginationArray,page} = this.state;
    return (
      <React.Fragment>
        {this.state.loading ? (
          <LoaderContainer>
            <Loader color={"white"} />
          </LoaderContainer>
        ) : (
          <CanvasTitleWrap title={"Subjects"}>
            <RenderLink
              RenderArray={this.MapToRenderArray(paginationArray[page - 1])}
              toPageID={"SubjectCourse"}
            />
            <div className={styles.filler}></div>
            <CanvasPagination
              currentPage = {page}
              totalPage = {paginationArray.length}
              handlePageChange={this.handlePageChange}
            />
          </CanvasTitleWrap>
        )}
      </React.Fragment>
    );
  }
};


export default CourseMarket;
