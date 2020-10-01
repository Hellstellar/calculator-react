import React from 'react';
import { Input, Form, Label, Grid } from 'semantic-ui-react';

const Operand = ({ id, error, value, label, inputChange }) => {
	return (
		<Form.Field inline>
			<Input size='huge' id = {id} value = {value} label={label} onChange={inputChange} />
			{error.length > 0 &&
				<Label size='huge' prompt = {true} basic color='red' pointing='below'>
					{error}
				</Label>
			}  	
		</Form.Field>
	);
	
}

export default Operand;