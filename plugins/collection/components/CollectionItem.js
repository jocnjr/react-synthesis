// CollectionItem.js
import React from 'react';

export default function CollectionItem(props) {
	let itemValues = props.itemData;
	let properties = itemValues.map((property, index) => {
    let key = Object.keys(property);
		return <td key={index}>{property[key]}</td>;
	})

  return (
  	<tr>
    	{properties}
    	<td><button className="btn btn-default" onClick={() => props.deleteItem(props.itemId)}>Delete</button></td>
  	</tr>
  )
}