import React, {Component} from 'react';

import styles from './SearchMovies.stylesheet.css';
import {get2017Movies} from '../../services/services';
import MovieRow from '../MovieRow/MovieRow.component'

class SearchMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isComponentLoading: true
    }
  }

  componentDidMount() {
    get2017Movies().then(res => this.setState({
      movies: res.data.results,
      isComponentLoading: false
    }));
  }

  render() {
    return(
      <div className={styles.Wrapper}>
        {
          this.state.isComponentLoading ?
            <span>Loading...</span> :
            <table className={`ui compact celled definition table`}>
              <thead className={styles.tableHead}>
                <tr>
                  <th>Add </th>
                  <th>Title</th>
                  <th>Genres</th>
                  <th>Cast</th>
                  <th>Rating</th>
                  <th>Votes</th>
                  <th>Release Year</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
              {this.state.movies.map(movie =>
                <MovieRow
                  id={movie.id} key={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_count={movie.vote_count}
                  vote_average={movie.vote_average}
                  release_date={movie.release_date}
                />
              )}
              </tbody>
              <tfoot className="full-width">
                <tr>
                  <th></th>
                  <th colSpan="7">
                    <div className="ui right floated small primary labeled icon button">
                      <i className="star icon"></i> Add to My Movies
                    </div>
                    <div className="ui small button">
                      Add
                    </div>
                    <div className="ui small  disabled button">
                      Add All
                    </div>
                  </th>
                </tr>
              </tfoot>
            </table>
        }
      </div>
    )
  }
}

export default SearchMovies;
