class CommentList extends React.Component{
  render(){
    return (
      <div>
      {JSON.parse(this.props.comments).map(function(comment){
          return <Comment author={comment.author} body={comment.body} rank={comment.rank} />
           }
        )
      }
      </div>
    );
  }
};
