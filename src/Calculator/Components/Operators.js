import React from 'react';
import { Segment, Button, Grid } from 'semantic-ui-react';

const Operators = ({ applyOperation }) => {
	return (
        <Segment.Inline>
            <Grid relaxed columns={4}>
                <Grid.Column>
                <Button id='plus' size='massive' circular onClick={applyOperation}>+</Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='minus' size='massive' circular onClick={applyOperation}>-</Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='multiply' size='massive' circular onClick={applyOperation}>x</Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='divide' size='massive' circular onClick={applyOperation}>/</Button>
                </Grid.Column>
            </Grid>
        </Segment.Inline>
	);
	
}

export default Operators;