import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <div>
      <footer>
        <article><FontAwesomeIcon icon={faSquarePollVertical} /><span>Hernalytics</span></article><br/>
        <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos,<br/>
        Nigeria
        </p>
        <aside>© 2022 Hernalytics</aside>
      </footer>
    </div>
  )
}
