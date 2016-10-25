// CreateCollectionFormField.js
import React from 'react';

export default function CreateCollectionFormField(props) {
  return (
  	<fieldset onChange={(e) => props.updateProps(e, props.fieldIndex)}>
			<input type="text" name="collection-property" placeholder="Collection property" />
			<select id="collection-property-type">
			  <option value="string">text</option>
			  <option value="number">number</option>
			  <option value="boolean">boolean</option>
			</select>
		</fieldset>
  )
}