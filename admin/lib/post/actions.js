// add post
export const addPost = (title, author, type, status, publishDate) => ({
    type: 'ADD_POST',
    title,
    author,
    postType,
    status,
    publishDate
});
// export const addCard    = card   => ({ type: 'ADD_CARD',    data: card   });
// export const updateCard = card   => ({ type: 'UPDATE_CARD', data: card   });
// export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });
// delete post
export const deletePost = (postID) => ({
    type: 'DELETE_POST',
    postID
})

// update post
export const updatePost = (postID, title, author, type, status, publishDate) => ({
    type: 'UPDATE_POST',
    postID,
    title,
    author,
    postType,
    status,
    publishDate
})

//alternative import method for action types
// todos/actions.js
import * as p from './actionTypes';

export const add = (text) => ({
  type: t.ADD,
  payload: { text }
});