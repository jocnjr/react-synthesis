// add post
function addPost(title, author, type, status, publishDate) {
  return {
    type: 'ADD_POST',
    title,
    author,
    postType,
    status,
    publishDate
   }
}
// export const addCard    = card   => ({ type: 'ADD_CARD',    data: card   });
// export const updateCard = card   => ({ type: 'UPDATE_CARD', data: card   });
// export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });
// delete post
function deletePost(postID) {
  return {
    type: 'DELETE_POST',
    postID
   }
}

// update post
function updatePost(postID, title, author, type, status, publishDate) {
  return {
    type: 'UPDATE_POST',
    postID,
    title,
    author,
    postType,
    status,
    publishDate
   }
}