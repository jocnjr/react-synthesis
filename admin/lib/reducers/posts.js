// post reducer

function posts(state = [], action) {
  console.log('the post is changing');
  console.log(state, action);
  return state;
}

export default posts;