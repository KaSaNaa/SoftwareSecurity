import Navigation from '../components/Navigation';
import './homePage.css';
import ChangingMiddle from '../components/ChangingMiddle'

export default function HomePage() {
  return (
    <>
    <div className='decoy-123'>
    <div className='homepage-container'>
        <Navigation className='navigation' /> {/* Add class for Navigation */}
        <div className='greating-div'>
            <p className='greeting-para'>Good day Deenath.</p>
            <p className='greeting-para'>You are Powerful, brilliant and brave!</p>
        </div>
    </div>
    <div className='content-div'>
    <ChangingMiddle className='com1'/>

</div>
</div>
</>
  );
}
