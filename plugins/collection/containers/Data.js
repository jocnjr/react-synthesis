// Data.js
import React from 'react';
import Collection from '../components/Collection';
import CreateCollectionForm from '../components/CreateCollectionForm';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      collection_items: []
    }
    this.addCollection = this.addCollection.bind(this);
    this.deleteCollection = this.deleteCollection.bind(this);
    this.getCollections = this.getCollections.bind(this);
    this.getCollectionItems = this.getCollectionItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
  	this.getCollections();
  	this.getCollectionItems();
  }

  exportData() {
  	return { mount_point: 'dashboard' }
  }

  addCollection(e, title, properties, user_id) {
  	e.preventDefault();
  	let collectionData = {};
  	collectionData.title = title;
  	collectionData.properties = properties;
  	collectionData.user_id = user_id;

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.getCollections();
				this.getCollectionItems();
			}			
		}
		xhr.open('POST', '/api/collection');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(collectionData));
  }

	deleteCollection(e, id) {
		let collectionId = id;

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.setState({
	        collections: this.state.collections.filter(collection => collection._id !== id)
	      })
			}			
		}
		xhr.open('DELETE', '/api/collection/' + collectionId);
		xhr.send();

		// delete collection items
		let xhrItem = new XMLHttpRequest();
		xhrItem.onreadystatechange = () => {
			if(xhrItem.status === 200 && xhrItem.readyState === 4) {
				console.log(xhrItem.responseText);
			}			
		}
		xhrItem.open('DELETE', '/api/collection_items/' + collectionId);
		xhrItem.send();
	}

  getCollections() {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.setState({collections: JSON.parse(xhr.responseText)});
			}			
		}
		xhr.open('GET', '/api/collections');
		xhr.send();
	}

	getCollectionItems() {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				// got all items, send them to render
				this.setState({collection_items: JSON.parse(xhr.responseText)});
			}			
		}
		xhr.open('GET', '/api/collection_items');
		xhr.send();
	}

	addItem(e, id) {
		e.preventDefault();
		let form = e.target;

		let sendData = {};
		sendData.item_properties = [];
		form.childNodes.forEach(input => {
			if (input.nodeName === 'INPUT') {
				let data = {}
				data[input.getAttribute('name')] = input.value;
				sendData.item_properties.push(data)
			}
		})
		sendData.collection_id = id;
		// // HARD CODED, get real value from cookie
		sendData.user_id = 1;

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.getCollectionItems();
			}			
		}
		xhr.open('POST', '/api/collection_item');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(sendData));
	}

	deleteItem(id) {
		let itemId = id;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.setState({
	        collection_items: this.state.collection_items.filter(item => item._id !== id)
	      })
			}			
		}
		xhr.open('DELETE', '/api/collection_item/' + itemId);
		xhr.send();	
	}

  render() {
  	let collections = this.state.collections.map(collection => {
  		let collectionItems = this.state.collection_items.filter(item => {
  			if (item.collection_id === collection._id) return item;
  		});
  		return <Collection key={collection._id} collection={collection} collectionItems={collectionItems} deleteItem={this.deleteItem} addItem={this.addItem} deleteCollection={this.deleteCollection}/>;
  	});
  	
    return (
    	<div>
    		<br />
	    	<h3>Data</h3>
	    	<br />
	    	<CreateCollectionForm addCollection={this.addCollection} />
	    	<br />
	    	{ collections }
    	</div>
    )
  }
}

module.exports = Data;
