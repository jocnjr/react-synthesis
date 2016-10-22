// add post
function addPost(title, author, type, status, publishDate) {
  return {
    type: 'ADD_POST',
    title,
    author,
    type,
    status,
    publishDate
   }
}

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
    type: 'ADD_POST',
    postID,
    title,
    author,
    type,
    status,
    publishDate
   }
}