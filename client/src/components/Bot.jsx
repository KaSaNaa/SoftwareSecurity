import { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

const ChatBot = () => {
  const directLine = useMemo(() => createDirectLine({ token: 'YOUR_DIRECT_LINE_TOKEN' }), []);

  return <ReactWebChat styleOptions={{display: 'flex'}} directLine={directLine} userID="YOUR_USER_ID" />;
};

const Bot = () => {
  return(
    <div style={{display: 'flex'}}>
      <ChatBot/>
    </div>
  )
}
export default Bot