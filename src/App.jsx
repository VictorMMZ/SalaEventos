import "./App.css";
import { BenefitCards } from "./components/BenefitCards";
import { RoomCards } from "./components/RoomCards";
import { PriceCards } from "./components/PriceCards";
import { createReserva } from "./services/api";
import { useState } from "react";
import { validarFormulario } from "./utils/validate";

function App() {
  const [reservaCreada, setReservaCreada] = useState(false);
  const [errorReserva, setErrorReserva] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setReservaCreada(false);
    setErrorReserva("");
    const datos = {
      nombre_completo: form.name.value,
      email: form.email.value,
      telefono: form.phone.value,
      fecha_evento: form.date.value,
      hora_entrada: form.time.value,
      hora_salida: form.endTime.value,
      sala_id: form.room.value,
      numero_ninos: form.children.value,
      mensaje_adicional: form.message.value,
    };
    
    try {
      const errores = validarFormulario(datos);
       if (Object.keys(errores).length > 0) {
      setErrorReserva(errores);
      return;
    }
      const respuesta = await createReserva(datos);
      console.log("Reserva creada:", respuesta);
      setReservaCreada(true);
      form.reset();
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      setErrorReserva({ general: error.message });
    }
  };

 

  return (
    <div>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header>
        <div className="container header-container">
          <a href="#inicio" className="logo">
            <span className="pink">Peque</span>
            <span className="blue">Mun</span>
            <span className="yellow">do</span>
            <small>Eventos Infantiles</small>
          </a>

          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#salas">Salas</a>
            <a href="#galeria">Galería</a>
            <a href="#precios">Precios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>

            <a href="#reserva" className="btn btn-pink">
              🎈 Reservar ahora
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="hero">
          <span className="star yellow" style={{ left: "4%", top: "30%" }}>
            ★
          </span>
          <span className="star pink" style={{ right: "7%", top: "20%" }}>
            ✦
          </span>
          <span className="star blue" style={{ right: "12%", bottom: "20%" }}>
            ★
          </span>

          <div className="container hero-content">
            <small>🎉 EVENTOS INFANTILES</small>

            <h1>
              ¡Bienvenidos a <span>PequeMundo!</span>
            </h1>

            <p>
              El lugar donde la diversión, la imaginación y los mejores momentos
              se hacen realidad.
            </p>

            <div className="hero-buttons">
              <a href="#reserva" className="btn btn-pink">
                🎈 Reservar mi fecha
              </a>
              <a href="#salas" className="btn btn-white">
                🏰 Conocer salas
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFICIOS
        ========================================================= */}
        <section className="benefits">
          <div className="container benefits-grid">
            <BenefitCards
              emoji="🎈"
              title="Diversión asegurada"
              description="Juegos, actividades y entretenimiento para todos los niños."
              className="benefit"
            />

            <BenefitCards
              emoji="🎂"
              title="Cumpleaños inolvidables"
              description="Celebraciones únicas pensadas para crear recuerdos mágicos."
              className="benefit"
            />

            <BenefitCards
              emoji="🛡️"
              title="Seguro y confiable"
              description="Espacios seguros, limpios y preparados para los pequeños."
              className="benefit"
            />

            <BenefitCards
              emoji="👨‍👩‍👧‍👦"
              title="Para todos"
              description="Salas adaptadas para diferentes edades y tipos de eventos."
              className="benefit"
            />
          </div>
        </section>

        {/* =========================================================
            SALAS
        ========================================================= */}
        <section id="salas" className="section rooms">
          <div className="container">
            <div className="section-title">
              <small>✨ NUESTROS ESPACIOS</small>
              <h2>Conoce nuestras salas</h2>
              <p>
                Elige el espacio perfecto para que los pequeños disfruten de un
                día inolvidable.
              </p>
            </div>

            <div className="rooms-grid">
              <RoomCards
                image="/sala1.png"
                title="Sala Aventura"
                subtitle="Un espacio lleno de juegos para nuestros pequeños aventureros."
                features={[
                  "Hasta 20 niños",
                  "Zona de juegos",
                  "Ideal para niños de 2 a 6 años",
                ]}
              />

              <RoomCards
                image="/sala2.png"
                title="Sala Fantasía"
                subtitle="Un espacio mágico para hacer realidad cualquier celebración."
                features={[
                  "Hasta 25 niños",
                  "Decoración temática",
                  "Ideal para todas las edades",
                ]}
              />

              <RoomCards
                image="/sala3.png"
                title="Sala Fiesta"
                subtitle="El espacio perfecto para grandes celebraciones."
                features={[
                  "Hasta 35 niños",
                  "Pista de baile y luces",
                  "Ideal para grandes celebraciones",
                ]}
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            GALERÍA
        ========================================================= */}
        <section id="galeria" className="section gallery">
          <div className="container">
            <div className="section-title">
              <small>📸 GALERÍA</small>
              <h2>Momentos que nos encantan</h2>
              <p>
                Un pequeño vistazo a la diversión que os espera en PequeMundo.
              </p>
            </div>

            <div className="gallery-grid">
              {[
                "./gallery1.png",
                "./gallery2.png",
                "./gallery3.png",
                "./gallery4.png",
                "./gallery5.png",
                "./gallery6.png",
                "./gallery7.png",
              ].map((src, i) => (
                <div className="gallery-item" key={i}>
                  <img src={src} alt="Galería" />
                </div>
              ))}
            </div>

            <div className="gallery-button">
              <a href="#" className="btn btn-blue">
                📸 Ver más fotos
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRECIOS
        ========================================================= */}
        <section id="precios" className="section pricing">
          <div className="container">
            <div className="section-title">
              <small>🎂 PRECIOS Y PACKS</small>
              <h2>Elige el pack perfecto para tu celebración</h2>
              <p>
                Diferentes opciones para adaptarnos a cada tipo de celebración.
              </p>
            </div>

            <div className="pricing-grid">
              <PriceCards
                title="Básico"
                price="120€"
                description="Una opción sencilla para celebrar un cumpleaños especial."
                features={[
                  "2 horas de celebración",
                  "Sala privada",
                  "Zona de juegos",
                  "Hasta 15 niños",
                ]}
                className="btn btn-blue"
              />

              <PriceCards
                title="Fiesta"
                price="180€"
                description="Nuestro pack más popular para disfrutar de una celebración completa."
                features={[
                  "3 horas de celebración",
                  "Sala privada",
                  "Zona de juegos",
                  "Zona de merienda",
                  "Hasta 25 niños",
                ]}
                className="btn btn-pink"
                popular={true}
              />

              <PriceCards
                title="Premium"
                price="250€"
                description="Para quienes quieren disfrutar de una celebración todavía más especial."
                features={[
                  "4 horas de celebración",
                  "Sala privada",
                  "Zona de juegos",
                  "Zona de merienda",
                  "Decoración especial",
                  "Hasta 35 niños",
                ]}
                className="btn btn-green"
              />
            </div>
          </div>
        </section>
        <section id="nosotros" className="section why">
          <div className="container why-grid">
            <div className="why-image">
              <img
                src="./family.png"
                alt="Familia disfrutando de una celebración"
              />
            </div>

            <div className="why-content">
              <small>❤️ ¿POR QUÉ ELEGIRNOS?</small>

              <h2>Más que un local, una experiencia única</h2>

              <p>
                Queremos que tanto los niños como los adultos disfruten de la
                celebración. Por eso cuidamos cada detalle para que vosotros
                solo tengáis que preocuparos de pasarlo bien.
              </p>

              <div className="advantages">
                <BenefitCards
                  emoji="❤️"
                  title="Atención personalizada"
                  description="Estamos contigo durante todo el proceso."
                  className="advantage"
                />

                <BenefitCards
                  emoji="🎮"
                  title="Espacios modernos"
                  description="Salas preparadas para diferentes edades."
                  className="advantage"
                />

                <BenefitCards
                  emoji="🎉"
                  title="Actividades divertidas"
                  description="Juegos para que nadie tenga tiempo de aburrirse."
                  className="advantage"
                />

                <BenefitCards
                  emoji="🛡️"
                  title="Seguridad"
                  description="Espacios preparados pensando en los pequeños."
                  className="advantage"
                />
              </div>

              <a href="#reserva" className="btn btn-pink">
                🎈 Quiero celebrar aquí
              </a>
            </div>
          </div>
        </section>

        <section id="reserva" className="section reservation">
          <div className="container reservation-grid">
            {/* FORMULARIO */}
            <div className="reservation-form">
              <h2>¡Reserva ahora!</h2>

              <p>
                Completa el formulario y te confirmaremos la disponibilidad.
              </p>

              <form onSubmit={handleSubmit} method="POST">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="600 000 000"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Fecha del evento</label>
                    <input type="date" id="date" name="date" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Hora</label>
                    <select id="time" name="time" required>
                      <option value="">Selecciona una hora</option>
                      <option value="10:00">10:00</option>
                      <option value="12:00">12:00</option>
                      <option value="16:00">16:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="endTime">Hora de finalización</label>
                    <select id="endTime" name="endTime" required>
                      <option value="">Selecciona una hora</option>
                      <option value="12:00">12:00</option>
                      <option value="14:00">14:00</option>
                      <option value="16:00">16:00</option>
                      <option value="18:00">18:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="room">Sala</label>
                    <select id="room" name="room" required>
                      <option value="">Selecciona una sala</option>
                      <option value="1">Sala Aventura</option>
                      <option value="2">Sala Fantasía</option>
                      <option value="3">Sala Fiesta</option>
                    </select>
                   
                  </div>

                  <div className="form-group">
                    <label htmlFor="children">Número de niños</label>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min="1"
                      max="50"
                      placeholder="Ej. 15"
                      required
                    />
                  </div>

                  <div className="form-group full">
                    <label htmlFor="message">Mensaje adicional</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Cuéntanos cualquier detalle..."
                    />
                  </div>
                </div>

                <div className="privacy">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    Acepto la política de privacidad.
                  </label>
                </div>

                <button type="submit" className="btn btn-purple btn-full">
                  🎈 Solicitar reserva
                </button>
                            {errorReserva && (
  <div className="alert alert-danger">
    {Object.values(errorReserva).map((err, i) => (
      <p key={i}>{err}</p>
    ))}
  </div>
)}
                {reservaCreada && (
                  <p className="success-message">¡Reserva creada con éxito!</p>
                )}
   
              </form>
            </div>

            {/* PASOS */}
            <aside className="reservation-info">
              <h3>¿Cómo funciona?</h3>

              <div className="step">
                <div className="step-number">1</div>
                <div>
                  <h4>Elige tu fecha</h4>
                  <p>
                    Selecciona el día y la hora que prefieras para tu evento.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div>
                  <h4>Envíanos tu solicitud</h4>
                  <p>Completa el formulario con tus datos y preferencias.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div>
                  <h4>Confirmamos tu reserva</h4>
                  <p>Revisaremos la disponibilidad y contactaremos contigo.</p>
                </div>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "18px",
                  marginTop: "20px",
                }}
              >
                <strong>💌 ¿Tienes alguna duda?</strong>
                <p
                  style={{
                    color: "#68708a",
                    fontSize: "11px",
                    marginTop: "5px",
                  }}
                >
                  Escríbenos o llámanos y estaremos encantados de ayudarte.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-title">
              <small>📍 CONTACTO</small>
              <h2>Estamos aquí para ayudarte</h2>
            </div>

            <div className="contact-grid">
              <article className="contact-card">
                <span className="contact-icon">📍</span>
                <h3>Dirección</h3>
                <p>
                  Calle PequeMundo
                  <br />
                  28000 Madrid
                </p>
              </article>

              <article className="contact-card">
                <span className="contact-icon">📞</span>
                <h3>Teléfono</h3>
                <p>600 000 000</p>
              </article>

              <article className="contact-card">
                <span className="contact-icon">✉️</span>
                <h3>Email</h3>
                <p>info@pequemundo.es</p>
              </article>

              <article className="contact-card">
                <span className="contact-icon">🕐</span>
                <h3>Horario</h3>
                <p>
                  Lunes - Domingo
                  <br />
                  10:00 - 21:00
                </p>
              </article>
            </div>
          </div>
        </section>

        <footer>
          <div className="container footer-grid">
            <div>
              <div className="footer-logo">PequeMundo 🎈</div>
              <p>Creamos momentos que recordaréis durante mucho tiempo.</p>
            </div>

            <div>
              <h3>Enlaces</h3>
              <a href="#inicio">Inicio</a>
              <a href="#salas">Salas</a>
              <a href="#galeria">Galería</a>
              <a href="#precios">Precios</a>
            </div>

            <div>
              <h3>Información</h3>
              <a href="#">Aviso legal</a>
              <a href="#">Política de privacidad</a>
              <a href="#">Política de cookies</a>
            </div>

            <div>
              <h3>Síguenos</h3>
              <a href="#">📸 Instagram</a>
              <a href="#">👍 Facebook</a>
              <a href="#">🎵 TikTok</a>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 PequeMundo · Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
