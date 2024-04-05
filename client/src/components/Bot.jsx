import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

class Bot extends React.Component { // Fix the class declaration
  constructor(props) {
    super(props);

    this.directLine = new DirectLine({ token: 'YOUR_DIRECT_LINE_TOKEN' });
  }

  render() {
    return (
      <ReactWebChat styleOptions={{backgroundColor: 'yellow', primaryFont: 'Inter'}} directLine={this.directLine} userID='YOUR_USER_ID' />
    );
  }
}

export default Bot; // Add export statement
