import React from 'react';
import '../nav/navbar.css'

function navbar() {
  
  return (
    <div>
      <nav className='nav'>
        <ul className='Nav-content'>
          <li className='tag'><i><strong style={{fontSize:'25px'}}>Flipkart</strong> <br/>explor <span style={{color:'gold'}}>plus</span></i></li>
          <li>
            <form action="">
              <input type="text" placeholder='Search for Products,Brands and more' autoComplete='off' className='search-tab'/>
            </form>
          </li>
          <li className='Login'>Login</li>
          
          <li className='nav-txt'>Become a Seller</li>
          <li>
      <select className='dropdown'>
        <option className='li-drop-option'>More</option>
        <option value="#" className='li-drop-option'>Notification preferences</option>
        <option value="#" className='li-drop-option'>24x7 Customer care</option>
        <option value="#" className='li-drop-option'>Adverties</option>
        <option value="#" className='li-drop-option'>Download App</option>

      </select>
          </li>
          <li className='nav-txt'>Cart</li>
        </ul>
      </nav>
      
    </div>
  )
}

export default navbar