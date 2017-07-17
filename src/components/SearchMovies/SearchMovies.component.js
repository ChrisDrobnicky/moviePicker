import React, {Component} from 'react';

import styles from './SearchMovies.stylesheet.css';
import getUpcomingMovies from '../../services/services';

class SearchMovies extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getUpcomingMovies().then(res => this.setState( {data: res.data.results}));
  }

  render () {
    return(
      <div className={styles.Wrapper}>
        {this.state.data.map ( (item, index) => {
          return <div key={index}>{item.title}</div>
        })}
      </div>
    )
  }
}

export default SearchMovies;
