AppDispatcher.register((payload) => {
  switch(payload.actionType) {
    case Constants.ADD_COMMENT:
      commentStore.addComment(payload.comment)
      commentStore.emitChange()
      break
    default:
      // NO-OP
  }
});

