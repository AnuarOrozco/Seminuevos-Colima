import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

function App() {
  // Temp components
  const TempComponent = ({ title }) => (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-dark mb-4">{title}</h1>
      <p className="text-dark-muted">Esta página está en construcción</p>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-light">
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home */}
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Home />
                  </motion.div>
                } 
              />
              
              {/* vehicle list */}
              <Route 
                path="/vehiculos" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TempComponent title="Nuestros Vehículos" />
                  </motion.div>
                } 
              />
              
              {/* buy page */}
              <Route 
                path="/compra" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TempComponent title="Compra un Auto" />
                  </motion.div>
                } 
              />
              
              {/* sell page */}
              <Route 
                path="/venta" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TempComponent title="Vende tu Auto" />
                  </motion.div>
                } 
              />
              
              {/* about page */}
              <Route 
                path="/nosotros" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TempComponent title="Nosotros" />
                  </motion.div>
                } 
              />
              
              {/* Login */}
              <Route 
                path="/login" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    key="login"
                  >
                    <LoginForm />
                  </motion.div>
                } 
              />
              
              {/* 404 - Not Found */}
              <Route 
                path="*" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="container mx-auto px-4 py-12 text-center">
                      <h1 className="text-3xl font-bold text-dark mb-4">404 - Página no encontrada</h1>
                      <p className="text-dark-muted">La página que buscas no existe</p>
                    </div>
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer hereee */}
      </div>
    </Router>
  );
}

export default App;