import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronDown, FiFilter, FiSearch } from 'react-icons/fi';
import { FaCar, FaGasPump, FaTachometerAlt, FaStar, FaRegStar } from 'react-icons/fa';

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
      image: 'https://source.unsplash.com/random/800x600/?car,nissan',
      specs: {
        year: 2022,
        mileage: 18500,
        transmission: 'Automático',
        fuel: 'Gasolina',
        condition: 'Excelente',
        rating: 4.5
      },
      price: 350999,
      type: 'seminuevo',
      featured: true
    },
    {
      id: 2,
      title: 'Toyota Corolla 2023',
      image: 'https://source.unsplash.com/random/800x600/?car,toyota',
      specs: {
        year: 2023,
        mileage: 12500,
        transmission: 'Automático',
        fuel: 'Híbrido',
        condition: 'Como nuevo',
        rating: 5
      },
      price: 420999,
      type: 'seminuevo',
      featured: true
    },
    {
      id: 3,
      title: 'Volkswagen Jetta 2024',
      image: 'https://source.unsplash.com/random/800x600/?car,volkswagen',
      specs: {
        year: 2024,
        mileage: 0,
        transmission: 'Automático',
        fuel: 'Gasolina',
        condition: 'Nuevo',
        rating: 4.8
      },
      price: 389999,
      type: 'nuevo',
      featured: true
    },
    {
      id: 4,
      title: 'Honda Civic 2021',
      image: 'https://source.unsplash.com/random/800x600/?car,honda',
      specs: {
        year: 2021,
        mileage: 32000,
        transmission: 'Automático',
        fuel: 'Gasolina',
        condition: 'Muy bueno',
        rating: 4.2
      },
      price: 289999,
      type: 'seminuevo'
    },
    {
      id: 5,
      title: 'Mazda CX-5 2023',
      image: 'https://source.unsplash.com/random/800x600/?car,mazda',
      specs: {
        year: 2023,
        mileage: 15000,
        transmission: 'Automático',
        fuel: 'Gasolina',
        condition: 'Excelente',
        rating: 4.7
      },
      price: 459999,
      type: 'seminuevo'
    },
    {
      id: 6,
      title: 'Ford Mustang 2022',
      image: 'https://source.unsplash.com/random/800x600/?car,mustang',
      specs: {
        year: 2022,
        mileage: 12000,
        transmission: 'Automático',
        fuel: 'Gasolina',
        condition: 'Excelente',
        rating: 4.9
      },
      price: 689999,
      type: 'seminuevo'
    },
  ];

  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 bg-gradient-to-r from-primary-700 to-primary-500 flex items-center justify-center text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-display"
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
              className="w-full py-3 px-4 pr-12 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FiSearch className="absolute right-4 top-3.5 text-dark-muted text-xl" />
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
                <h2 className="text-xl font-bold flex items-center text-dark">
                  <FiFilter className="mr-2 text-primary-500" /> Filtros
                </h2>
                <button 
                  className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
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
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      filters.type === 'nuevo' 
                        ? 'bg-primary-500 text-white hover:bg-primary-600' 
                        : 'bg-light-muted text-dark hover:bg-light'
                    }`}
                    onClick={() => setFilters({...filters, type: 'nuevo'})}
                  >
                    Nuevos
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      filters.type === 'seminuevo' 
                        ? 'bg-primary-500 text-white hover:bg-primary-600' 
                        : 'bg-light-muted text-dark hover:bg-light'
                    }`}
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
                <div key={filter.name} className="mb-4 border-b border-light pb-4">
                  <button
                    className="w-full flex justify-between items-center py-2 text-left hover:text-primary-500 transition-colors"
                    onClick={() => toggleFilter(filter.name)}
                  >
                    <span className="font-medium text-dark">{filter.title}</span>
                    <FiChevronDown className={`transition-transform text-primary-500 ${
                      activeFilter === filter.name ? 'rotate-180' : ''
                    }`} />
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
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`${filter.name}-option1`} 
                              className="mr-2 rounded text-primary-500 focus:ring-primary-500"
                            />
                            <label htmlFor={`${filter.name}-option1`} className="text-dark-muted">Opción 1</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`${filter.name}-option2`} 
                              className="mr-2 rounded text-primary-500 focus:ring-primary-500"
                            />
                            <label htmlFor={`${filter.name}-option2`} className="text-dark-muted">Opción 2</label>
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
              <h2 className="text-2xl font-bold text-dark">
                {filters.type === 'all' ? 'Todos los vehículos' : filters.type === 'nuevo' ? 'Autos nuevos' : 'Autos seminuevos'}
              </h2>
              <div className="flex items-center">
                <span className="mr-2 text-dark-muted">Ordenar por:</span>
                <select className="bg-light-muted rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark">
                  <option>Recomendados</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Kilometraje</option>
                  <option>Año más reciente</option>
                </select>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-light-muted"
                >
                  <div className="relative h-64 overflow-hidden">
                    <LazyLoadImage
                      src={vehicle.image}
                      alt={vehicle.title}
                      effect="opacity"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold shadow-sm ${
                      vehicle.type === 'nuevo' 
                        ? 'bg-accent-500 text-white' 
                        : 'bg-white text-dark'
                    }`}>
                      {vehicle.type === 'nuevo' ? 'Nuevo' : 'Seminuevo'}
                    </div>
                    {vehicle.featured && (
                      <div className="absolute top-3 right-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                        Destacado
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-dark">{vehicle.title}</h3>
                      <div className="flex items-center">
                        {renderRating(vehicle.specs.rating)}
                        <span className="ml-1 text-sm text-dark-muted">({vehicle.specs.rating})</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-primary-500 mb-3">{vehicle.specs.condition}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-5 text-sm text-dark-muted">
                      <div className="flex items-center">
                        <FaTachometerAlt className="mr-2 text-primary-500" />
                        {vehicle.specs.mileage.toLocaleString()} km
                      </div>
                      <div className="flex items-center">
                        <FaCar className="mr-2 text-primary-500" />
                        {vehicle.specs.year}
                      </div>
                      <div className="flex items-center">
                        <FaGasPump className="mr-2 text-primary-500" />
                        {vehicle.specs.transmission}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-primary-600">
                        ${vehicle.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-dark-muted mt-1">
                        Desde ${Math.round(vehicle.price / 76).toLocaleString()} /mes*
                      </p>
                    </div>
                    
                    <button className="mt-6 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      Ver detalles
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Vehicles Slider */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-dark">Destacados</h2>
              <Swiper
                spaceBetween={30}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3.2 }
                }}
                className="pb-12"
              >
                {vehicles.filter(v => v.featured).map((vehicle) => (
                  <SwiperSlide key={`featured-${vehicle.id}`}>
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-light-muted h-full">
                      <div className="relative h-56 overflow-hidden">
                        <LazyLoadImage
                          src={vehicle.image}
                          alt={vehicle.title}
                          effect="opacity"
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute top-3 left-3 px-3 py-1 rounded-md text-sm font-semibold shadow-sm ${
                          vehicle.type === 'nuevo' 
                            ? 'bg-accent-500 text-white' 
                            : 'bg-white text-dark'
                        }`}>
                          {vehicle.type === 'nuevo' ? 'Nuevo' : 'Seminuevo'}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-dark">{vehicle.title}</h3>
                        <div className="flex items-center mt-1 mb-3">
                          {renderRating(vehicle.specs.rating)}
                          <span className="ml-1 text-xs text-dark-muted">({vehicle.specs.rating})</span>
                        </div>
                        <p className="text-xl font-bold text-primary-500 mt-2">
                          ${vehicle.price.toLocaleString()}
                        </p>
                        <button className="mt-4 w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                          Ver detalles
                        </button>
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