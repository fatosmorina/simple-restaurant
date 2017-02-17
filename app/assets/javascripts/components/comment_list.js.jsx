class CommentList extends React.Component {

  componentDidMount(){
    Store.addChangeListener(this._onChange);
  }

  componentWillUnMount(){
    Store.removeChangeListener(this._onChange);
  }

  render(){
    return(
      <div>
      {Store.comments().map(function(comment){
        return <Comment key={comment.id} {...comment}/>;
      })}
      </div>
    );
  }

  _onChange(){
    this.forceUpdate();
  }

};
