import React from 'react';

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
    <footer className="l-footer vh" id='contact'>
      <aside className="l-footer-aside">
        <div className="l-footer-boxing">
          <h3>Síguenos</h3>
          <div className="l-footer-boxing__network">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 7.5V10.5H7.5V15.75H10.5V10.5H12.75L13.5 7.5H10.5V6C10.5 5.80109 10.579 5.61032 10.7197 5.46967C10.8603 5.32902 11.0511 5.25 11.25 5.25H13.5V2.25H11.25C10.2554 2.25 9.30161 2.64509 8.59835 3.34835C7.89509 4.05161 7.5 5.00544 7.5 6V7.5H5.25Z" fill="#7097FF"/>
              </svg>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9318 9.87974V14.4002H12.3259V10.1722C12.3259 8.98451 11.8827 8.39065 10.9964 8.39065C10.3405 8.39065 9.88842 8.70974 9.64024 9.34792C9.58706 9.47201 9.56047 9.68474 9.56047 9.9861V14.4002H6.92797C6.94569 9.63156 6.94569 6.99906 6.92797 6.5027H9.56047V7.61951L9.53388 7.6461H9.56047V7.61951C10.1277 6.75088 10.9166 6.31656 11.9271 6.31656C12.8311 6.31656 13.558 6.61792 14.1075 7.22065C14.6571 7.82338 14.9318 8.70974 14.9318 9.87974ZM4.1891 2.7002C3.74592 2.7002 3.38694 2.82872 3.11217 3.08576C2.8374 3.34281 2.70001 3.66633 2.70001 4.05633C2.70001 4.44633 2.83297 4.77429 3.09888 5.0402C3.36479 5.3061 3.71047 5.43906 4.13592 5.43906H4.16251C4.60569 5.43906 4.96467 5.3061 5.23944 5.0402C5.51422 4.77429 5.6516 4.44633 5.6516 4.05633C5.63388 3.66633 5.49206 3.34281 5.22615 3.08576C4.96024 2.82872 4.61456 2.7002 4.1891 2.7002ZM2.83297 14.4002H5.46547V6.5027H2.83297V14.4002Z" fill="#7097FF"/>
              </svg>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3H6C4.34315 3 3 4.34315 3 6V12C3 13.6569 4.34315 15 6 15H12C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3Z" stroke="#7097FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="#7097FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.375 5.625V5.626" stroke="#7097FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="l-footer-boxing">
          <h3>Teléfono</h3>
          <p>+51 999 999 999</p>
        </div>
        <div className="l-footer-boxing">
          <h3>Email</h3>
          <p>hola@alaxatech.com</p>
        </div>
        <div className="l-footer-boxing">
          <h3 className="copyright">© 2022 Alaxatech. Made with ♥︎ in Peru.</h3>
        </div>
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
