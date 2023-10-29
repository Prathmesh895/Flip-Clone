import React from 'react'
import '../flex/flex.css'
import { Link } from 'react-router-dom'

function flex_cont() {
  return (

    <div className='flex-content'>
      <ul className='flex-cont-1' >
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/790b539a57f7b8cd.png?q=100" alt="Top Offers" /><br />Top Offers</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/444802d58a814f57.png?q=100" alt="" /><br/>Mobiles&Tablet</Link></li>
        <li><Link className='flex-content-list'> <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b8ad952a656b015.png?q=100" alt="" /><br/>TVs&Appliances</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/e4b01f3d783c49a1.png?q=100" alt="" /><br/>Fasion</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9e4acc1d8929bcc6.png?q=100" alt="" /><br/>Beauti</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/ce3744f59fadb72e.png?q=100" alt="" /><br/>Electronics</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/683d71deb68235d5.png?q=100" alt="" /><br/>Flights</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9ba7be5608413886.png?q=100" alt="" /><br/>Home&Kitchen</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/280a9406b5a7fdc8.png?q=100" alt="" /><br/>Grocery</Link></li>
        <li><Link className='flex-content-list'><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/dc9cb4d7bd005f70.png?q=100" alt="" /><br/>Furniture</Link></li>

      </ul>
    </div>
  )
}
export default flex_cont