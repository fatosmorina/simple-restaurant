class Comment extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <div> Author: {this.props.author} </div>
      <div> Body: {this.props.body} </div>
      <div> Rank: {this.props.rank} </div>
      </div>
    );
  }
}
