import React, { Component } from "react";
import { connect } from "react-redux";
// styled
import styled from "styled-components";

const MovieContent = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  color: #fbfbfb;
  width: 800px;
  margin-top: 150px;
  li{
    padding: 20px;
  margin: 10px 0;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.25);
  }
  h3::before {
    display: block;
  content: "";
  height: 10px;
  background-color: yellow;
  margin: 10px 0;
}
  }
`;
const Thumbnail = styled.img`
  width: 64px;
  border-radius: 5px;
  padding: 0 10px 0 0;
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-items: center;
`;

class MovieBody extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {" "}
        <MovieContent>
          <div className="movie-overview">
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </div>
          <div className="movie-photos">
            <h3>Photos:</h3>
          </div>
          <div className="movie-crew">
            <h3>Crew: </h3>
            {movie.credits.crew.slice(0, 6).map(
              obj => (
                !obj.profile_path
                  ? (obj.profile_path = "http://via.placeholder.com/74x96")
                  : (obj.profile_path = `https://image.tmdb.org/t/p/original/${
                      obj.profile_path
                    }`),
                (
                  <Card key={obj.name}>
                    <Thumbnail src={`${obj.profile_path}`} alt="" />
                    <div className="info-text">
                      <p>
                        {obj.job} - {obj.name}
                      </p>
                    </div>
                  </Card>
                )
              )
            )}
          </div>
          <div className="movie-cast">
            <h3>Cast: </h3>
            {movie.credits.cast.slice(0, 6).map(
              obj => (
                !obj.profile_path
                  ? (obj.profile_path = "http://via.placeholder.com/74x96")
                  : (obj.profile_path = `https://image.tmdb.org/t/p/original/${
                      obj.profile_path
                    }`),
                (
                  <Card key={obj.name}>
                    <Thumbnail src={`${obj.profile_path}`} alt="" />
                    <div className="info-text">
                      {obj.character} - {obj.name}
                    </div>
                  </Card>
                )
              )
            )}
          </div>
        </MovieContent>;
      </div>
    );
  }
}

export default connect()(MovieBody);
