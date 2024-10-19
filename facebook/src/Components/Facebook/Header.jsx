import React from 'react'
import './Header.css'

export function Header() {
    return (
        <div className="profile-header">
        <div className="cover-photo">
        <img src="/cover.jpeg" alt="Cover" />
        </div>
        <div className="profile-info">
        <img src="/profile.jpeg" alt="Profile" className="profile-pic" />
            <div className="profile-details">
                <h1>Softmint Software Solutions</h1>
                <h4>2.5K likes      .     2.5K followers</h4>      
                <p>We are a boutique digital transformation consultancy and s</p>
                oftware development company that provides c
            </div>
            <div className="profile-actions">
                <button>Like</button>
                <button>WhatsApp</button>
                <button>....</button>
            </div>
        </div>
    </div>
    );
  }
  

export default Header