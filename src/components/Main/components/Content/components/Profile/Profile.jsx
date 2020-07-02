import React from 'react';
import axios from 'axios';
import styles from './Profile.module.scss';

const Loading = () => (
  <div className={styles.loading}>
    <h4>Loading...</h4>
  </div>
);

// 先取 teacher 之後再重構, uuid hardcoded
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personDetail: null,
      loading: true,
      uuid:"6fe87e23-7885-4193-9906-fabbf677932d",
      courseList:[],
    };
    this.finishLoading = this.finishLoading.bind(this);
  }

  finishLoading() {
    this.setState({ loading: false });
  }
  async getPersonDetail() {
    console.log(this.state.uuid + " uuid");
    await axios
      .get(`http://localhost:8080/teachers/${this.state.uuid}`)
      .then((res) =>
        this.setState({ personDetail: res.data }, () =>
          this.setState({ loading: false }
            ,() => this.setState({courseList: res.data.courseList}))
        )
      );
  }
  componentDidMount() {
    this.getPersonDetail();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className={styles.container}>
              uuid:{this.state.personDetail.uuid}
              <br />
              name:{this.state.personDetail.name}
              <br />
              title:{this.state.personDetail.title}
              <br />
              courseList:{this.state.courseList}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
};

export default Profile;
