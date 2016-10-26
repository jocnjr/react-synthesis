class PostContainer extends React.Component {
  constructor() {
    super();
    this.state = { post: {} }
  }

  componentDidMount() {
    $.ajax({
      url: "/post/" + id,
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this)
    });
  }

  render() {
    return <Post comments={this.state.comments} />;
  }
}