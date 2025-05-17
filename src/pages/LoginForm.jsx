import { motion } from 'framer-motion';
import { FiUser, FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de autenticación
    setTimeout(() => {
      setIsSubmitting(false);
      // Aquí iría la lógica de redirección después del login
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex items-center justify-center px-4 py-12"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8 border border-light-muted"
          >
            <div className="text-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center mb-4"
              >
                <FiUser className="text-3xl text-primary-500 mr-2" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Iniciar Sesión
                </h2>
              </motion.div>
              <p className="text-dark-muted">Accede a tu cuenta para continuar</p>
            </div>

            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-light-muted focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <label htmlFor="password" className="block text-sm font-medium text-dark mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-light-muted focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="text-right mt-2">
                  <Link to="/recuperar-contrasena" className="text-sm text-primary-500 hover:text-primary-700 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ 
                  backgroundColor: 'hsl(24, 95%, 40%)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting ? 'bg-primary-400' : 'bg-primary-500'
                }`}
              >
                {isSubmitting ? (
                  'Ingresando...'
                ) : (
                  <>
                    <span>Ingresar</span>
                    <FiArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-dark-muted">
                ¿No tienes una cuenta?{' '}
                <Link to="/registro" className="text-primary-500 hover:text-primary-700 font-medium transition-colors">
                  Regístrate
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default LoginForm;