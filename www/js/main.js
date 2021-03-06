/** @jsx React.DOM */
(function(){
    var app = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function () {

            var movies = [
                {
                    "name": "Bing Crosby - White Christmas",
                    "link": "http:\/\/www.youtube.com\/embed\/SEXyH3XNhAA",
                    "id": "1",
                    "description": "",
                    "youtube_id": "SEXyH3XNhAA"
                },
                {
                    "name": "Last Christmas",
                    "link": "http:\/\/www.youtube.com\/embed\/asCFol6Bn_w",
                    "id": "2",
                    "description": "",
                    "youtube_id": "asCFol6Bn_w"
                },
                {
                    "name": "John Lennon \u0026 Yoko Ono - Happy Xmas (War Is Over)",
                    "link": "http:\/\/www.youtube.com\/embed\/lCCBOV5NwR8",
                    "id": "3",
                    "description": "",
                    "youtube_id": "lCCBOV5NwR8"
                }
            ];
            var List = require('./component/List');
            React.renderComponent(<List movies={movies} />, document.getElementById('container'))
        }
    });
    new app;
    Backbone.history.start();
})()