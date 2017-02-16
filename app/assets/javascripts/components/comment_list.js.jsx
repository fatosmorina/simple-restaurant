class CommentList extends React.Component{

  componentDidMount(){
    commentStore.addChangeListener(this._onChange);
  }

  componentWillUnMount(){
    commentStore.removeChangeListener(this._onChange);
  }

  render(){
    return(
      <div>
      {commentStore.comments().map(function(comment){
        return <Comment key={comment.id} {...comment}/>;
      })}
      </div>
    );
  }

  _onChange(){
    this.forceUpdate();
  }

};
