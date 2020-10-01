import React from 'react';
import { Segment, Button, Grid } from 'semantic-ui-react';

const Operators = ({ applyOperation }) => {
	return (
        <Segment.Inline>
            <Grid relaxed columns={4}>
                <Grid.Column>
                <Button id='plus' size='massive' circular onClick={applyOperation}><img src="https://img.icons8.com/metro/52/000000/plus-math.png"/></Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='minus' size='massive' circular onClick={applyOperation}><img src="https://img.icons8.com/android/48/000000/minus-math.png"/></Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='multiply' size='massive' circular onClick={applyOperation}><img src="https://img.icons8.com/ios-glyphs/50/000000/multiply.png"/></Button>
                </Grid.Column>
                <Grid.Column>
                <Button id='divide' size='massive' circular onClick={applyOperation}><img src="https://img.icons8.com/metro/52/000000/divide.png"/></Button>
                </Grid.Column>
            </Grid>
        </Segment.Inline>
	);
	
}

export default Operators;