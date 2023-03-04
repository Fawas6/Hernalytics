import React, { Component } from 'react'
import Chart from 'react-google-charts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import { textAlign } from '@mui/system'

export default function Home() { 
  const geoData = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
    ['Nigeria', 800],
  ]
  const pieData = [
    ['Task', 'Hours per Day'],
    ['Accepted Voters', 11],
    ['Rejected Voters', 2],
  ]
  const pieOptions = {
    title: 'My Daily Activities',
    pieHole: 0.4,
  }
  return (
    <div id='body'>
      <section className='title'>
       <header>Post Election Data<span>Presidential / 2023</span></header>
       <div className='sub-menu'>
        <p className='sub-title'>Presidential Race</p>
        <div className='dropdown text-end'>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Election Data
        </button>
        <ul className='dropdown-menu'>
         <li><a className="dropdown-item" href="#">Pre-Election</a></li>
         <li><a className="dropdown-item" href="#">Election Day Live Updates</a></li>
         <li><a className="dropdown-item" href="#">Post-Election Analysis</a></li>
        </ul>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Presidential
        </button>
        <ul className='dropdown-menu'>
         <li><a className="dropdown-item" href="#">Presidential</a></li>
         <li><a className="dropdown-item" href="#">Gubernatorial</a></li>
         <li><a className="dropdown-item" href="#">Senate</a></li>
         <li><a className="dropdown-item" href="#">House of Representatives</a></li>
        </ul>
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          2023
        </button>
        <ul className='dropdown-menu'>
         <li><a className="dropdown-item" href="#">2023</a></li>
         <li><a className="dropdown-item" href="#">2019</a></li>
         <li><a className="dropdown-item" href="#">2015</a></li>
         <li><a className="dropdown-item" href="#">2011</a></li>
         <li><a className="dropdown-item" href="#">2007</a></li>
         <li><a className="dropdown-item" href="#">2003</a></li>
         <li><a className="dropdown-item" href="#">1999</a></li>
         <li><a className="dropdown-item" href="#">1995</a></li>
         <li><a className="dropdown-item" href="#">1991</a></li>
         <li><a className="dropdown-item" href="#">1987</a></li>
         <li><a className="dropdown-item" href="#">1983</a></li>
         <li><a className="dropdown-item" href="#">1979</a></li>
         <li><a className="dropdown-item" href="#">1975</a></li>
         <li><a className="dropdown-item" href="#">1971</a></li>
         <li><a className="dropdown-item" href="#">1967</a></li>
         <li><a className="dropdown-item" href="#">1963</a></li>
         <li><a className="dropdown-item" href="#">1959</a></li>
        </ul>
        </div>
       </div>
       <hr className='horizontal-line'/>
      </section>
      <section className='map_container'>
      <div className='map_controller'>
      <FontAwesomeIcon className='plus' icon={faPlus} />
      <FontAwesomeIcon className='minus' icon={faMinus} />
      </div>
      <div className="map_image container mt-5">
        <Chart
          width={'1000px'}
          height={'620px'}
          chartType="GeoChart"
          data={geoData}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className='marker'>
      <FontAwesomeIcon  className='marker1' icon={faSquare} /><span className='marker_label'>APC</span>
      <FontAwesomeIcon  className='marker2' icon={faSquare} /><span className='marker_label'>LP</span>
      <FontAwesomeIcon  className='marker3' icon={faSquare} /><span className='marker_label'>PDP</span>
      </div>
      </section>
      <section className='analysis'>
        <div className="container mt-5">
        <Chart
          width={'600px'}
          height={'320px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
        </div>
        <div className='nigeria_map'>
          <h6>CANDIDATES BY GEOPOLITICAL ZONES</h6>
          <img src='images/mapofnigeria.png' width='500px' height='400px' alt=''/>
        </div>
        <div className='data'>
          <dl>
            <dt>TOTAL ELECTED MEMBERS</dt>
            <dd>10,000</dd>
            <dt>MALE<FontAwesomeIcon className='mars' icon={faMars} /></dt>
            <dd>9,000</dd>
            <dt>FEMALE<FontAwesomeIcon className='venus' icon={faVenus} /></dt>
            <dd>1,000</dd>
          </dl>
        </div>
      </section>
      <footer>
        <div className='foot_container'>
        <article><span><FontAwesomeIcon icon={faSquarePollVertical} />Hernalytics</span><br/>
        Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos,<br/>
        Nigeria
        <aside>© 2022 Hernalytics</aside>
        </article>
        <div className='col1'>
          <ul>
            <li className='listhead'>About</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>About Hernalytics</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className='col2'>
          <ul>
            <li className='listhead'>Support</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className='col3'>
          <ul>
            <li className='listhead'>Let's Chat!</li>
            <li>hernalytics@gmail.com</li>
            <li>+234 801 234 5678</li>
            <li className='media-icons'>
             <li><InstagramIcon /></li>
             <li><TwitterIcon /></li>
             <li><WhatsappIcon /></li>
            </li>
          </ul>
        </div>
        </div>           
      </footer>
    </div>
  )
}
