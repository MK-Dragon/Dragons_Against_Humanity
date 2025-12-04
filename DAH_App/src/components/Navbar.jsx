// Navbar.jsx

import React from 'react';


export default function Navbar() {
  return <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Candy Shop!</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Go GO GOOO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WTF?!</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Candy
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Candy Cane</a></li>
                <li><a class="dropdown-item" href="#">Lolipop</a></li>
                <li><a class="dropdown-item" href="#">More Candy</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
}
