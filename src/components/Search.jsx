import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const movieId = this.state.value;
        this.props.onSubmitMovie(movieId);
    }
    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <input
                    id={this.state.value}
                    placeholder='Movie name..'
                    type='text'
                    value={this.state.value}
                    autoComplete='off'
                    onChange={this.handleChange}
                />
                    <button
                        className='button'
                        type='submit'
                        disabled={!this.state.value}>
                            Submit
                    </button>
            </form>
        )
    }
}


export default Search;