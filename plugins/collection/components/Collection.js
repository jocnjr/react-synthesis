// Collection.js
import React from 'react';
import CollectionItem from '../components/CollectionItem';

export default function Collection(props) {
	let items = props.collectionItems.map(item => {
		return <CollectionItem key={item._id} itemId={item._id} itemData={item.item_properties} deleteItem={props.deleteItem} />
	});

	let propFields = props.collection.collection_properties;
	
	let fields = propFields.map(field => {
    let fieldName = Object.keys(field);
		return <th key={fieldName}>{fieldName}</th>;
	});

	let addItemInputs = propFields.map(field => {
    let fieldName = Object.keys(field);
		return <input key={fieldName} name={fieldName} placeholder={fieldName} />;
	});

  return (
  	<div>
    	<h4>{props.collection.title}</h4>
      <button className="btn btn-default" onClick={(e) => props.deleteCollection(e, props.collection._id)}>delete collection</button>
    	<table className="table">
	    	<thead>
	    		<tr className="collection-header">{ fields }</tr>
	    	</thead>
	    	<tbody>
	    		{ items }
	    	</tbody>
    	</table>
    	<form onSubmit={(e) => props.addItem(e, props.collection._id)}>
    		New item {addItemInputs}
    		<button className="btn btn-default" type="submit">Add item</button>
    	</form>
      <br />
  	</div>
  )
}