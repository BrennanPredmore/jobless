import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function SearchBar(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'></Label>
        <Input
          className={'container'}
          style={{
            borderColor: '#333',
            borderStyle: 'grove',
            borderWidth: '5px',
            textAlign: 'center',
          }}
          onChange={(e) => props.setFilterText(e.target.value)}
          type='text'
          placeholder='Filter by Company, Position, or Location  '
        />
      </FormGroup>
    </Form>
  );
}

export default SearchBar;
