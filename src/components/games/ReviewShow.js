// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// //------------------------------------------------------------------------------
// class GamesShow extends React.Component{
//  state = {
//    review: {}
//  }
//  componentDidMount() {
//    axios.get(`/api/games/${this.props.match.params.id}`)
//      .then(res => this.setState({ game: res.data }));
//  }
//  // review edit but only on form , probably wanted to get to anothe form.
//  // handleChange =({target: { name,value }}) => {
//  //   const review = {...this.state.review, [name]: value};
//  //   this.setState({ review },() => {
//  //   });
//  // }
//  //-----------------------------------------------------------------------------
//  render() {
//    const {game} = this.state;
//    if(!game) return null;
//    return (
//      <div className="columns">
//        <div className="column">
//          <div className="card-image2" style={{ backgroundImage:
//             `url(${game.cover.url})`}}/>
//        </div>
//        <div className="column">
//          <h1 className="title is-1">{game.name}</h1>
//          <p>{game.summary}</p>
//          <ul>
//            {game.reviews.map(review =>
//              // key is the same for all reviews?
//              <li key={review._id}>
//                <p className="title is-4">{review.title}</p>
//                <p className="title is-4">{review.subtitle}</p>
//                <p className="title is-4">{review.content}</p>
//                <hr />
//              </li>
//            )}
//          </ul>
//        </div>
//      </div>
//    );
//  }
// }
// //------------------------------------------------------------------------------
// export default GamesShow;