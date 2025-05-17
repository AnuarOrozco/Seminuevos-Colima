import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronDown, FiFilter, FiSearch } from 'react-icons/fi';
import { FaCar, FaGasPump, FaTachometerAlt } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    brands: [],
    priceRange: [0, 1000000],
    year: [],
    mileage: [],
    carType: [],
    transmission: []
  });

  const [activeFilter, setActiveFilter] = useState(null);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Datos de ejemplo para los vehículos
  const vehicles = [
    {
      id: 1,
      title: 'Nissan Sentra 2022',
      image: 'https://source.unsplash.com/random/600x400/?car,nissan',
      specs: {
        year: 2022,
        mileage: 18500,
        transmission: 'Automático',
        fuel: 'Gasolina'
      },
      price: 350999,
      type: 'seminuevo'
    },
    // ... más vehículos
  ];

  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Encuentra tu auto ideal en Seminuevos Colima
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Los mejores autos nuevos y seminuevos con garantía y financiamiento
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Buscar por marca o modelo..."
              className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-4 top-3.5 text-gray-500 text-xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <FiFilter className="mr-2" /> Filtros
                </h2>
                <button 
                  className="text-blue-600 text-sm font-medium"
                  onClick={() => setFilters({
                    type: 'all',
                    brands: [],
                    priceRange: [0, 1000000],
                    year: [],
                    mileage: [],
                    carType: [],
                    transmission: []
                  })}
                >
                  Limpiar todo
                </button>
              </div>

              {/* Tipo de auto */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    className={`flex-1 py-2 rounded-lg font-medium ${filters.type === 'nuevo' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() => setFilters({...filters, type: 'nuevo'})}
                  >
                    Nuevos
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-lg font-medium ${filters.type === 'seminuevo' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() => setFilters({...filters, type: 'seminuevo'})}
                  >
                    Seminuevos
                  </button>
                </div>
              </div>

              {/* Filtros desplegables */}
              {[
                { name: 'brands', title: 'Marcas y modelos' },
                { name: 'price', title: 'Precio' },
                { name: 'year', title: 'Año' },
                { name: 'mileage', title: 'Kilometraje' },
                { name: 'carType', title: 'Tipo de auto' },
                { name: 'transmission', title: 'Transmisión' }
              ].map((filter) => (
                <div key={filter.name} className="mb-4 border-b border-gray-100 pb-4">
                  <button
                    className="w-full flex justify-between items-center py-2 text-left"
                    onClick={() => toggleFilter(filter.name)}
                  >
                    <span className="font-medium">{filter.title}</span>
                    <FiChevronDown className={`transition-transform ${activeFilter === filter.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFilter === filter.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 space-y-2">
                          {/* Aquí irían las opciones reales de cada filtro */}
                          <div className="flex items-center">
                            <input type="checkbox" id={`${filter.name}-option1`} className="mr-2" />
                            <label htmlFor={`${filter.name}-option1`}>Opción 1</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id={`${filter.name}-option2`} className="mr-2" />
                            <label htmlFor={`${filter.name}-option2`}>Opción 2</label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicles Gallery */}
          <div className="lg:w-3/4">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filters.type === 'all' ? 'Todos los vehículos' : filters.type === 'nuevo' ? 'Autos nuevos' : 'Autos seminuevos'}
              </h2>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Ordenar por:</span>
                <select className="bg-gray-100 rounded-lg px-3 py-1 focus:outline-none">
                  <option>Recomendados</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Kilometraje</option>
                  <option>Año más reciente</option>
                </select>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <LazyLoadImage
                      src={vehicle.image}
                      alt={vehicle.title}
                      effect="opacity"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
                      {vehicle.type === 'nuevo' ? 'Nuevo' : 'Seminuevo'}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{vehicle.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaTachometerAlt className="mr-1 text-blue-600" />
                        {vehicle.specs.mileage.toLocaleString()} km
                      </div>
                      <div className="flex items-center">
                        <FaCar className="mr-1 text-blue-600" />
                        {vehicle.specs.year}
                      </div>
                      <div className="flex items-center">
                        <FaGasPump className="mr-1 text-blue-600" />
                        {vehicle.specs.transmission}
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xl font-bold text-blue-600">
                        ${vehicle.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">
                        Desde ${Math.round(vehicle.price / 76).toLocaleString()} /mes*
                      </p>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                      Ver detalles
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Vehicles Slider */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Destacados</h2>
              <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3.2 }
                }}
                className="pb-8"
              >
                {vehicles.map((vehicle) => (
                  <SwiperSlide key={`featured-${vehicle.id}`}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <LazyLoadImage
                          src={vehicle.image}
                          alt={vehicle.title}
                          effect="opacity"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{vehicle.title}</h3>
                        <p className="text-blue-600 font-bold mt-2">
                          ${vehicle.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;