import React from 'react';
import Network from './Network';
import Copyright from './Copyright';

export default function LayoutFooter() {
  const formDate = {
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  };
  const [form, setForm] = React.useState({...formDate});
  const handleFormData = e => {
    const formatKey = e.target.id.substring(5);
    switch (formatKey) {
      case 'name':
        setForm({...form, [formatKey]: e.target.value})
        break;
      case 'phone':
        setForm({...form, [formatKey]: e.target.value})
        break;
      case 'email':
        setForm({...form, [formatKey]: e.target.value})
        break;
      case 'company':
        setForm({...form, [formatKey]: e.target.value})
        break;
      case 'message':
        setForm({...form, [formatKey]: e.target.value})
        break;
    
      default:
        throw new Error('Invalid data Form')
    };
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  }
  return (
    <footer className="l-footer vh" id="contact" data-snap-current="false">
      <aside className="l-footer-aside">
        <Network />
        <div className="l-footer-boxing">
          <h3>Teléfono</h3>
          <p>+51 999 999 999</p>
        </div>
        <div className="l-footer-boxing">
          <h3>Email</h3>
          <p>hola@alaxatech.com</p>
        </div>
        <Copyright />
      </aside>
      <div className="l-footer-box">
        <h2 className="l-footer-title l-title">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="l-footer-form">
          <div className="l-footer-form__wrap">
            <div className="l-footer-form__primary">
              <div className="form-field">
                <label className="form-label" htmlFor="form-name">Nombre*</label>
                <input className="form-input" required onChange={handleFormData} type="text" id="form-name" placeholder="Nombre completo" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-phone">Teléfono*</label>
                <input className="form-input" required onChange={handleFormData} type="tel" id="form-phone" placeholder="Ingrese número" pattern="[0-9]*" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-email">Email*</label>
                <input className="form-input" required onChange={handleFormData} type="email" id="form-email" placeholder="ejemplo@ejemplo.com" />
              </div>
            </div>
            <div className="l-footer-form__secondary">
              <div className="form-field">
                <label className="form-label" htmlFor="form-company">Compañía</label>
                <input className="form-input" onChange={handleFormData} type="text" id="form-company" placeholder="Nombre de empresa" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-message">Mensaje</label>
                <input className="form-input" onChange={handleFormData} type="text" id="form-message" placeholder="Escribir un mensaje" />
              </div>
            </div>
          </div>
          <button className="btn" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </footer>
  );
}
