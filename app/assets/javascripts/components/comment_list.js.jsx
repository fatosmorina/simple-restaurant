class CommentList extends React.Component{

  componentDidMount(){ 
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    Store.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.forceUpdate();
  }

  render(){
    return (
      <div>
      {
         Store.comments().map(function(comment){
        return <Comment key={comment.id} {... comment} />
      }
      )
      }
      </div>
    );
  }

};
