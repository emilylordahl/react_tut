var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      Hello world! I am a CommentBox.
      </div>
    ); // Closes return, which provides a native HTML div
  } // Closes render function
}); // Closes React class

// var CommentBox = React.createClass({
//   displayName: "CommentBox",
//     render: function() {
//       return (
//         React.createElement("div", { // These divs are not actual DOM nodes, but instatntiations of React div compoents, which are essentially pieces of data React knows how to handle.
//           className: "commentBox"
//         },
//           "Hello world! I am a derp derp CommentBox."
//       )
//     );
//   }
// });

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
      Hello world I am a derpy CommentList!
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello World I am a derpy CommentForm!
      </div>
    );
  }
});

// ReactDOM.render( // This instantiates the root component (CommentBox), starts the framework and injects the markup into a raw DOM element, provided as the second argument.
//   React.createElement(CommentBox, null),
//   document.getElementById("content")
// );


ReactDOM.render(
  <CommentBox />, // The React class begins with an uppcerase letter
  document.getElementById('content')
);
