"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import StatsCounter from '@/components/StatsCounter';



export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-sans bg-gradient-to-b from-[#0a1a2f] via-[#0f243c] to-[#142c4c] text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-sm bg-[#0a1a2f]/80 px-6 py-4 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/img/logoRB.svg" alt="RB Energía Solar Logo" width={120} height={50} />
          </div>

          <nav className="hidden md:flex gap-6 font-semibold">
            {["INICIO", "ACERCA DE", "PROYECTOS", "SERVICIOS", "CONTACTO"].map((item) => (
              <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} key={item} className="relative group">
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full group-hover:left-0 transition-all"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-yellow-400 font-semibold flex items-center gap-1">
              <i className="bi bi-telephone-inbound"></i> +57 321-742-6680
            </span>
            <a href="#contacto" className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition transform hover:-translate-y-1 shadow-lg">
              Contáctanos
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-white overflow-hidden snap-start">
        <Image
          src="/img/fond2.jpg"
          alt="Paneles solares"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0 brightness-50"
        />
        <div className="absolute z-10 max-w-4xl text-center px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Impulsando el futuro con <br />
            <span className="text-yellow-300">Energía Sostenible</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Descubra soluciones innovadoras y ecológicas para impulsar su mundo. En RB Energía Solar, nos especializamos en aprovechar la energía del sol para crear un futuro más brillante, limpio y sostenible para todos.
          </p>
          <a href="#acerca-de" className="inline-block mt-6 bg-yellow-400 hover:bg-cyan-500 px-6 py-3 text-lg rounded-full text-black hover:text-white transition transform hover:-translate-y-1 shadow-md">
            Aprender más
          </a>
        </div>

        {/* Tag Box */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-6 left-6 bg-black/60 text-white shadow-lg p-4 rounded-xl w-[350px] flex gap-4 backdrop-blur-sm"
          data-aos="fade-left"
        >
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <Image src="/img/instalacion_1.jpg" alt="Instalación solar" layout="fill" objectFit="cover" />
          </div>
          <div>
            <h3 className="font-bold text-base">Donde la sostenibilidad se fusiona con la innovación.</h3>
            <p className="text-sm mt-1 text-gray-300">Descubra soluciones innovadoras y ecológicas para impulsar.</p>
          </div>
        </motion.div>
      </section>

      {/* Acerca de - Nuevo diseño con imagen */}
      <section id="acerca-de" className="py-24 px-6 bg-[#EFEFEF] snap-start" data-aos="fade-up">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative" data-aos="zoom-in">
  {/* Imagen principal */}
  <div className="rounded-xl overflow-hidden shadow-xl">
    <Image
      src="/img/fond3.jpg"
      alt="RB Energía Acerca de"
      width={600}
      height={400}
      className="rounded-xl hover:scale-105 transition-transform duration-700 ease-in-out"
    />
  </div>

  {/* Imagen superpuesta */}
  <div className="absolute -bottom-10 -right-10 w-48 h-32 rounded-xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
    <Image
      src="/img/acercade1.jpg"
      alt="RB Energía adicional"
      layout="fill"
      objectFit="cover"
      className="rounded-xl"
    />
  </div>
</div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-600 text-justify">
              Somos una empresa con 8 años de trayectoria en el sector energético, con sede en la ciudad de Montería. Nos especializamos en brindar soluciones efectivas a los desafíos energéticos de nuestra región, desarrollando y ejecutando proyectos de energía solar fotovoltaica en edificaciones comerciales, residenciales y rurales, adaptándonos a las necesidades específicas de cada cliente.

Contamos con un equipo de especialistas en energía solar, comprometidos con la formación continua de nuestros colaboradores para garantizar un servicio técnico de excelencia, respaldado por calidad humana, seriedad y un alto sentido de responsabilidad.

            </p>
          </div>
        </div>
        
      </section>

{/* Contador de estadísticas - Separador entre "Acerca de" y "Proyectos" */}
<StatsCounter />


  {/* Parallax Divider con efecto scroll */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover bg-no-repeat scale-110 animate-[parallaxScroll_20s_linear_infinite]"
          style={{ backgroundImage: "url('/img/nuestrosServicios.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <h2 className="text-4xl font-bold text-yellow-400">Nuestros Servicios</h2>
        </div>
      </div>

     {/* Servicios */}
      <section id="servicios" className="py-24 px-6 bg-[#0f243c] text-center snap-start" data-aos="fade-up">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative bg-black/40 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl"
            >
              <div className="relative w-full h-48">
                <Image src={`/img/servicio${n}.jpg`} alt={`Servicio ${n}`} layout="fill" objectFit="cover" className="rounded-t-xl" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">
                  {n === 1 ? 'Instalación de Paneles Solares' : n === 2 ? 'Mantenimiento y Monitoreo' : 'Consultoría Energética'}
                </h3>
                <p className="text-gray-300 text-sm">
                  {n === 1
                    ? 'Diseño e instalación profesional de sistemas solares personalizados para hogares y empresas.'
                    : n === 2
                    ? 'Supervisión constante y mantenimiento preventivo para maximizar el rendimiento de tu sistema.'
                    : 'Asesoramiento experto para optimizar el consumo y reducir costos energéticos.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>






      {/* Parallax Divider con efecto scroll */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover bg-no-repeat scale-110 animate-[parallaxScroll_20s_linear_infinite]"
          style={{ backgroundImage: "url('/img/fond2.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
          <h2 className="text-4xl font-bold text-yellow-400">Proyectos Destacados</h2>
        </div>
      </div>

      {/* Proyectos */}
      <section id="proyectos" className="py-24 px-6 bg-[#0f243c] text-center snap-start" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image src={`/img/proyecto${n}.jpg`} alt={`Proyecto ${n}`} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Proyecto Solar #{n}</h3>
                <p className="text-gray-300 text-sm">Sistema fotovoltaico eficiente instalado con tecnología de punta.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-[#142c4c] text-center snap-start" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contáctanos</h2>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded bg-black/40 backdrop-blur text-white" />
          <input type="email" placeholder="Correo electrónico" className="p-3 rounded bg-black/40 backdrop-blur text-white" />
          <textarea placeholder="Mensaje" rows={4} className="p-3 rounded bg-black/40 backdrop-blur text-white"></textarea>
          <button type="submit" className="mt-2 bg-yellow-400 text-black py-3 rounded hover:bg-cyan-500 hover:text-white transition shadow-md">
            Enviar Mensaje
          </button>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573217426680"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.88 11.88 0 0 0 2.18 17.4L.2 24l6.75-1.97A11.88 11.88 0 1 0 20.52 3.48zm-8.62 17.4a9.84 9.84 0 0 1-5-1.35l-.36-.22-4 1.17 1.2-3.88-.24-.4A9.84 9.84 0 1 1 11.9 20.88zm5.4-7.27c-.3-.15-1.77-.88-2.04-.97s-.48-.15-.69.15-.78.96-.96 1.15-.36.22-.66.07a8 8 0 0 1-2.37-1.5 8.94 8.94 0 0 1-1.62-2.02c-.17-.3 0-.45.13-.6s.3-.36.45-.54.2-.3.3-.51a.61.61 0 0 0 0-.6c-.08-.15-.69-1.66-.95-2.26s-.5-.52-.69-.53-.39 0-.6 0a1.15 1.15 0 0 0-.84.39 3.5 3.5 0 0 0-1.1 2.63 6.09 6.09 0 0 0 1.3 3.15 13.73 13.73 0 0 0 5.36 4.65c.75.3 1.34.48 1.8.61a4.29 4.29 0 0 0 1.95.12 3.28 3.28 0 0 0 2.13-1.5 2.7 2.7 0 0 0 .18-1.5c-.07-.12-.27-.2-.57-.36z" />
        </svg>
      </a>
    </main>
  );
}
