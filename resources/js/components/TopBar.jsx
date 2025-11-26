import React from 'react';
import logo from '../../assets/images/logo.webp';

const TopBar = () => {
  return (
    <div className="py-2" style={{borderBottom: "1px solid #e5e5e5"}}>
      <div className="container d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '70px', cursor: 'pointer' }}/>
          </div>

          <div className="d-flex align-items-center gap-4">

            <div className="topbar-item">
              <i className="fa-solid fa-pizza-slice me-1" style={{color: 'orange'}}></i> MENÚ
            </div>

            <div className="topbar-item">
              <i className="fa-solid fa-receipt me-1" style={{color: 'orange'}}></i> PEDIDOS
            </div>

            <div className="topbar-item">
              <i className="fa-solid fa-store me-1" style={{color: 'orange'}}></i> LOCALES
            </div>

            <div className="topbar-item">
              <i className="fa-solid fa-user me-1" style={{color: 'orange'}}></i> INGRESAR
            </div>

          </div>

      </div>
    </div>

  );
};

export default TopBar;
