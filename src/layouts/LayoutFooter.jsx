import React from 'react';
import Network from './Network';
import Copyright from './Copyright';

export default function LayoutFooter() {
  const [numberOnly, setNumberOnly] = React.useState();
  const formDate = {
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  };
  const [form, setForm] = React.useState({...formDate});
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  const handleFormData = e => {
    const formatKey = e.target.id.substring(5);
    const onlyNums = e.target.value.replace(/\D/,'');
    if (formatKey === 'phone') {
      setNumberOnly(onlyNums);
      setForm({...form, [formatKey]: onlyNums});
    } else {
      setForm({...form, [formatKey]: e.target.value})
    }
  };

/*   const handleSubmit = e => {
    e.preventDefault();
  }; */

  return (
    <footer className="l-footer vh" id="contact" data-snap-current="false">
      <aside className="l-footer-aside">
        <Network />
        <div className="l-footer-boxing">
          <h3>Teléfono</h3>
          <p>+51 942 883 987</p>
        </div>
        <div className="l-footer-boxing">
          <h3>Email</h3>
          <p>hola@alaxatech.com</p>
        </div>
        <Copyright />
      </aside>
      <div className="l-footer-box">
        <h2 className="l-footer-title l-title">Contáctanos</h2>
          {success && (
              <p style={{ color: "green" }}>Gracias por su Mensaje! </p>
            )}
        <form
              method="POST"
              name="contactform"
              data-netlify= "true"
              className="l-footer-form">
          <input type="hidden" name="form-name" value="contactform" />
          <div className="l-footer-form__wrap">
            <div className="l-footer-form__primary">
              <div className="form-field">
                <label className="form-label" htmlFor="form-name">Nombre*</label>
                <input className="form-input" name="name" required onInput={handleFormData} type="text" id="form-name" placeholder="Nombre completo" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-phone">Teléfono*</label>
                <input className="form-input" name="phone" required onInput={handleFormData} type="text" id="form-phone" placeholder="Ingrese número" pattern="[0-9]*" value={numberOnly} />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-email">Email</label>
                <input className="form-input" name="email" onInput={handleFormData} type="email" id="form-email" placeholder="ejemplo@ejemplo.com" />
              </div>
            </div>
            <div className="l-footer-form__secondary">
              <div className="form-field">
                <label className="form-label" htmlFor="form-company">Compañía</label>
                <input className="form-input" name="company" onInput={handleFormData} type="text" id="form-company" placeholder="Nombre de empresa" />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="form-message">Mensaje</label>
                <input className="form-input" name="message" onInput={handleFormData} type="text" id="form-message" placeholder="Escribir un mensaje" />
              </div>
            </div>
          </div>
          <button className="btn" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </footer>
  );
}
