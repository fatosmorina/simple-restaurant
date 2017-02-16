var Constans = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

var Store = new _.extend({}, EventEmitter.prototype, {
  _comments: [],

  addComment: function(comment){
    this._comments[comment.id] = comment;
  },

  comments: function(){
    this._comments;
  },

  addChangeListener: function(callback){
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange: function {
    this.emit(Constants.CHANGE_EVENT);
  }

});


