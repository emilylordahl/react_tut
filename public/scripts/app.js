var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
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
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
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

var Comment = React.createClass({
  rawMarkup: function(){
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return {  __html: rawMarkup };
  },

  render: function(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// ReactDOM.render( // This instantiates the root component (CommentBox), starts the framework and injects the markup into a raw DOM element, provided as the second argument.
//   React.createElement(CommentBox, null),
//   document.getElementById("content")
// );


ReactDOM.render(
  <CommentBox data={data} />, // The React class begins with an uppcerase letter
  document.getElementById('content')
);
