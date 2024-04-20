// eslint-disable-next-line react/prop-types
function ErrorComponent({ message }) {
    return (
      <div>
        <h1>Error</h1>
        <p>{message}</p>
        <a href='/signin'>Click here to login</a>
      </div>
    );
  }
  
  export default ErrorComponent;