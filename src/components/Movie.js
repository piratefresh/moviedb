import React from 'react';
import { fetchSingleMovie } from '../utils/api';

class Movie extends React.Component {
    render() {
        return (
            <div>
                {console.log(fetchSingleMovie())}
            </div>
        )
    }
}

export default Movie;