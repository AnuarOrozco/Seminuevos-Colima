import { motion } from 'framer-motion';
import { FiUser, FiShoppingBag, FiDollarSign, FiInfo } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Compra un auto', icon: <FiShoppingBag />, path: '/compra' },
    { name: 'Vende tu auto', icon: <FiDollarSign />, path: '/venta' },
    { name: 'Nosotros', icon: <FiInfo />, path: '/nosotros' }
  ];

  const itemVariants = {
    hover: { 
      y: -3,
      transition: { 
        type: 'spring',
        stiffness: 500,
        damping: 15
      }
    },
    rest: { y: 0 }
  };

  const underlineVariants = {
    hover: { 
      width: '100%',
      opacity: 1,
      transition: { duration: 0.3 }
    },
    rest: { 
      width: '0%',
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Seminuevos Colima
              </span>
            </motion.div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link to={item.path} key={item.name}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative cursor-pointer"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-500"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                  <motion.div
                    variants={underlineVariants}
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      hoveredItem === item.name ? 'bg-primary-500' : 'bg-transparent'
                    }`}
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Login btn */}
          <Link to="/login">
            <motion.button
              whileHover={{ 
                backgroundColor: 'hsl(24, 95%, 40%)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <FiUser className="text-base" />
              <span>Iniciar sesión</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;