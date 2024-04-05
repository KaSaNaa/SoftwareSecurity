import { DirectLine } from "botframework-directlinejs";
import React from "react";
import ReactWebChat from "botframework-webchat";

class Bot extends React.Component {
  // Fix the class declaration
  constructor(props) {
    super(props);

    this.directLine = new DirectLine({ token: "YOUR_DIRECT_LINE_TOKEN" });
  }

  render() {
    return (
      <div style={{ display: 'flex', width: '100%', height: '200px', backgroundColor: 'darkgray' }}>
        <ReactWebChat
          styleOptions={CUSTOM_OPTIONS}
          directLine={this.directLine}
          userID="YOUR_USER_ID"
        />
      </div>
    );
  }
}

export default Bot; // Add export statement

const CUSTOM_OPTIONS = {
  bubbleBackground: "#F5F5F5", // Light gray background for chat bubbles
  bubbleBorderColor: "#E0E0E0", // Light border color for chat bubbles
  bubbleBorderRadius: 8, // Rounded corners for chat bubbles
  bubbleBorderStyle: "solid", // Solid border style for chat bubbles
  avatarSize: 32, // Smaller avatar size
  sendBoxBackground: "#FFFFFF", // White background for the send box
  sendBoxHeight: 60, // Taller send box for better visibility
  suggestedActionBackgroundColor: "#E0E0E0", // Background color for suggested action buttons
  suggestedActionTextColor: "#333333", // Text color for suggested action buttons
  suggestedActionBorderRadius: 16, // Rounded corners for suggested action buttons
  suggestedActionLayout: "carousel", // Display suggested actions in a carousel layout
  toastFontSize: "90%", // Adjusted font size for toast notifications
};
