/** @jsx React.DOM */
module.exports =  React.createClass({
    render: function () {
        var Element = require('./Element');

        return <div>
            {this.props.movies.map(function(movie){
                return <Element key={movie.id} movie={movie} />
            })}
        </div>;
    }
})
