import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getSubjectList from './../../../../../../../../apis/getSubjectList';
import styles from "./CourseMarket.module.scss";
import CanvasTitleWrap from '../CanvasTitleWrapper';
import pagination from '../../../../../../../../utils/Algorithm/pagination';

const ITEM_PER_PAGE = 7;

class CourseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      loading: true,
      page:1,    
      paginationArray:null
    };
  }
  
  async getSubjectList() {
    const { subjectList } = await getSubjectList();
    this.setState(
      { subjectList: subjectList, 
        loading: false,
        paginationArray:pagination(subjectList, ITEM_PER_PAGE)
      });
  }
  handlePageChange(dir){
    switch (dir) {
      case "PREV":
        return this.setState({page:this.state.page-1})
      case "NEXT":
        return this.setState({page:this.state.page+1})
      default:
        return null;
    }
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
          <CanvasLoading />
        ) : (
          <CanvasTitleWrap title={"Subjects"}>
            <RenderLink
              RenderArray={this.MapToRenderArray(paginationArray[page - 1])}
              toPageID={"SubjectCourse"}
            />
            <div className={styles.filler}>
            </div>
            <div className={styles.pagination}>
              {page === 1 ? (
                <div></div>
              ) : (
                <div
                  className={styles.clickable}
                  onClick={() => this.handlePageChange("PREV")}
                >
                  &lt;
                </div>
              )}
              <div className={styles.number}>
                {page + "/" + paginationArray.length}
              </div>
              {page === paginationArray.length ? (
                <div></div>
              ) : (
                <div
                  className={styles.clickable}
                  onClick={() => this.handlePageChange("NEXT")}
                >
                  &gt;
                </div>
              )}
            </div>
          </CanvasTitleWrap>
        )}
      </React.Fragment>
    );
  }
};


export default CourseMarket;
