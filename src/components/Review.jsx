import React from 'react'

export default function Review({
  clientName = 'Nombre del cliente',
  companyName = 'Nombre de la empresa',
  description,
  avatar,
  }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="card-content">
        <figure className="card-figure">
          <img src={avatar} alt={clientName+'-'+companyName} />
        </figure>
        <div className="card-descriptor">
          <h3>{clientName}</h3>
          <p>{companyName}</p>
        </div>
      </div>
    </div>
  )
}
