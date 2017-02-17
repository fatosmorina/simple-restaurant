var CommentList = React.createClass({
  render: function(){
    return(
      <div>
        { JSON.parse(this.props.comments).map(function(comment){
          // return (<div>{ comment.author }</div>);
          return <Comment key={ comment.id } { ... comment } />;
        })}
      </div>
      );
  }
});