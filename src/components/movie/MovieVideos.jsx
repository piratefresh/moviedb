import React, { Component } from "react";
import ReactPlayer from "react-player";
//styled
import styled from "styled-components";

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  grid-area: videos;
  width: 100%;
  @media (max-width: 400px) {
    margin-top: 10%;
  }
`;
const ReactPlayerStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

class MovieVideos extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <PlayerWrapper>
          {movie.videos.results.map(vid => {
            return (
              <ReactPlayer
                key={vid.id}
                url={`https://www.youtube.com/watch?v=${vid.key}`}
              />
            );
          })}
        </PlayerWrapper>
      </div>
    );
  }
}

export default MovieVideos;
