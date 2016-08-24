// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//       Hello world! I am a CommentBox.
//       </div>
//     ); // Closes return, which provides a native HTML div
//   } // Closes render function
// }); // Closes React class
//
// ReactDOM.render(
//   <CommentBox />, // The React class begins with an uppcerase letter
//   document.getElementById('content')
// );

var CommentBox = React.createClass({
    displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {
                    className: "commentBox"
                },
                "Hello world! I am a commentBox."
            )
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById("content")
);
