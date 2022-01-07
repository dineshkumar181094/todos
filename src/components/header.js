import React from 'react'
import './header.css'
export const Header = () => {
    return (
        <>
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
</ul>
<div className="card h-25 bg-primary mb-3 rounded" >
  <div className="card-body text-center ">
    <h5 class="card-title text-white fs-1">TODO LIST</h5>
  </div>
</div>
</>
    )
}
