// Main.js
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators';
import App from './App';

function mapStateToProps(state) {
	return {
		user: state.user,
		components: state.components,
		posts: state.posts,
		post: state.post
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;
