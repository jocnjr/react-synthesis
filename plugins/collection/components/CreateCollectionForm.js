// CreateCollectionForm.js
import React from 'react';
import CreateCollectionFormField from '../components/CreateCollectionFormField';

export default class CreateCollectionForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      title: '',
      collection_props: [{ 'property': 'text' }],
      user_id: 1
    }
    this.addProperty = this.addProperty.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

	addProperty(e) {
		e.preventDefault();
		let newProps = this.state.collection_props.slice();
		newProps.push({'property': 'text'});

		this.setState({collection_props: newProps})
	}

	handleTitleChange(e) {
		let newTitle = e.target.value;
		this.setState({title: newTitle})
	}	

	handleInputChange(e, index) {
		let field = e.target.parentNode;
		let prop = {};
		prop[field.firstChild.value] = field.lastChild.value;

		let props = this.state.collection_props.slice();
		props[index] = prop;
		this.setState({collection_props: props})
	}

	render() {
		let propsFields = this.state.collection_props.map((props, index) => {
			return <CreateCollectionFormField key={index} fieldIndex={index} updateProps={this.handleInputChange} />
		})

    return (
    	<form onSubmit={(e) => this.props.addCollection(e, this.state.title, this.state.collection_props, this.state.user_id)}>
    		<h4>Create New Collection</h4>
    		<input type="text" placeholder="Collection Title" onChange={this.handleTitleChange} />
    		{ propsFields }
    		<button onClick={this.addProperty}>Add property</button>
    		<button type="submit">Create Collection</button>
    	</form>
    )
	}
}