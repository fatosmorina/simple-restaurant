
const Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

class Store extends EventEmitter {

  constructor(){
    super()
    this._comments = []
  }

  _comments: [],

    addComment(comment){
      this._comments[comment.id] = comment
    }

  comments(){
    return this._comments;

  }
  addChangeListener(callback){
    this.on(Constants.CHANGE_EVENT, callback);
  }
  removeChangeListener(callback){
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function(payload){
  var action = payload.actionType;
  switch(action){
    case Constants.ADD_COMMENT:
      Store.addComment(payload.comment);
      break;
    default:
      //NO-OP

  }
});
