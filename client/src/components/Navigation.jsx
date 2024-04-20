import './navigation.css';
export default function Navigation() {
  return (
    <div className='navigation-container'>
      <button className='navigation-button'>Home</button>
      <button className='navigation-button'>Transaction</button>
      <button className='navigation-button'>Contact Info</button>
      <button className='logout-btn'>Log Out</button>
    </div>
  )
}
