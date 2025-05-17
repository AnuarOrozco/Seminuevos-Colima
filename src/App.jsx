import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header/Navbar irá aquí */}
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Contenido de la página de inicio irá aquí */}
                    <h1 className="text-3xl font-bold text-center mt-8">Bienvenido a Seminuevos Colima</h1>
                  </motion.div>
                } 
              />
              
              <Route 
                path="/vehiculos" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Listado de vehículos irá aquí */}
                    <h1 className="text-3xl font-bold text-center mt-8">Nuestros Vehículos</h1>
                  </motion.div>
                } 
              />
              
              <Route 
                path="*" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Página 404 */}
                    <h1 className="text-3xl font-bold text-center mt-8">Página no encontrada</h1>
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer irá aquí */}
      </div>
    </Router>
  );
}

export default App;