import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header here reminder */}
        
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
                    <Home />
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
        
        {/* Reminder Footer here */}
      </div>
    </Router>
  );
}

export default App;