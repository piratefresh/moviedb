import React from 'react';

class MovieList extends React.Component {
    state={
        apikey: '9983ae98fd65654ca7494dd94103697e',
        getInitialState: function() {
            return {data: [], mounted: false};
        },
    }

    loadContent = () => {
        const requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
        fetch(requestUrl).then((response) =>{
            
        })
    }

    render() {
        return (

        )
    }
}

export default MovieList;