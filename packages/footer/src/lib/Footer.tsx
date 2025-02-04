import styles from './footer.module.css';

export const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-4" style={{width: "80%"}}>
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h4 className="font-bold text-sm mb-2">Home</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Servizi</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Contatti</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Supporto</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
            </nav>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
        </div>
      </footer>
  );
}

export default Footer;