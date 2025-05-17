import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-light mt-auto"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4">
              Seminuevos Colima
            </h3>
            <p className="text-light-muted mb-4">
              Tu destino confiable para compra y venta de vehículos seminuevos en Colima y sus alrededores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-muted hover:text-primary-500 transition-colors">
                <FiFacebook className="text-xl" />
              </a>
              <a href="#" className="text-light-muted hover:text-primary-500 transition-colors">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#" className="text-light-muted hover:text-primary-500 transition-colors">
                <FiInstagram className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light-muted hover:text-primary-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/vehiculos" className="text-light-muted hover:text-primary-500 transition-colors">
                  Vehículos
                </Link>
              </li>
              <li>
                <Link to="/compra" className="text-light-muted hover:text-primary-500 transition-colors">
                  Compra
                </Link>
              </li>
              <li>
                <Link to="/venta" className="text-light-muted hover:text-primary-500 transition-colors">
                  Venta
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-light-muted hover:text-primary-500 transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-light-muted">Av. Tecnológico #123, Colima, Col.</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-light-muted">(312) 123 4567</span>
              </li>
              <li className="flex items-start">
                <FiMail className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-light-muted">contacto@seminuevoscolima.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-dark-muted mt-8 pt-8 text-center text-light-muted text-sm">
          <p>© {currentYear} Seminuevos Colima. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/terminos" className="hover:text-primary-500 transition-colors">
              Términos y condiciones
            </Link>
            <Link to="/privacidad" className="hover:text-primary-500 transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;