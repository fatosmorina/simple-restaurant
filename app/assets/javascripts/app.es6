
var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

var Store = new _.extend({}, EventEmitter.protype, {
  _comments: [],

  addComment: function(comment){
    this._comments[comment.id] = comment
  },
  comments: function(){
    return this._comments;
  },
  addChangeListener: function(callback){
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  }
});

let commentStore = new Store()

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function(payload){
  var action = payload.actionType;
  switch(action){
    case Constants.ADD_COMMENT:
      commentStore.addComment(payload.comment);
      commentStore.emitChange();
      break;
    default:
      //NO-OP

  }
});
