import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img src={`img/blog/blog1.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">27/ABR/2023 - DIANA RIOS </div>
              <h6>
                <a>
                Mi experiencia aprendiendo a programar desde cero
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={`img/blog/blog2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">26/AGO/2022 - POR FRANKLIN</div>
              <h6>
                <a>
                Usando Zustand con React JS! 🚀
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/blog3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">09/MAY/2022 - MIGUEL ÁNGEL</div>
              <h6>
                <a>
                Scrum: qué es y cómo funciona este marco de trabajo
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <img src={`img/blog/blog4.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">01/FEB/2020 - ED TEAM</div>
              <h6>
                <a>
                ¿Qué es BACKEND y FRONTEND?
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog1.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Mi experiencia aprendiendo a programar desde cero
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer1.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>DIANA RIOS</label>
                        <span>27 ABRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    Cuando decidí aprender a programar, no tenía idea de por 
                    dónde empezar. Como ingeniera en alimentos, estaba acostumbrada
                    a trabajar con fórmulas y estructuras moleculares, pero nunca 
                    había escrito una sola línea de código en mi vida. Sin embargo, 
                    sabía que quería aprender y estaba dispuesta a hacer todo lo 
                    posible para lograrlo.
                    </p>
                    <h4>¿Cómo empezar?</h4>
                    <p>
                    Lo primero que hice fue buscar recursos en línea. Encontré muchos 
                    tutoriales y cursos gratuitos, y comencé a leer y ver videos para 
                    entender los conceptos básicos de la programación. Aprendí sobre 
                    variables, bucles, condicionales, funciones y mucho más. Al principio, 
                    todo parecía abrumador, pero poco a poco fui comprendiendo cómo se 
                    conectaban las diferentes partes de un programa.
                    </p>
                    <p>
                    Después de varios días de aprendizaje autodidacta, me di cuenta de que 
                    necesitaba más estructura en mi proceso de aprendizaje. Así que me 
                    matriculé en un curso en línea sobre programación web y comencé a seguirlo 
                    paso a paso. El curso me ayudó a entender mejor cómo se aplicaban los 
                    conceptos de programación a la construcción de sitios web.
                    </p>
                    <h4>A lo largo del tiempo</h4>
                    <p>
                    Con el tiempo, comencé a construir pequeños proyectos por mi cuenta. 
                    Empecé con proyectos simples, como una lista de compras o una calculadora 
                    básica. Pero a medida que mi confianza crecía, empecé a trabajar en 
                    proyectos más complicados. Un proyecto que me resultó especialmente 
                    gratificante fue la creación de una aplicación web para la detección 
                    de rostros en imágenes pues use herramientas como REACT que me permitían 
                    crear aplicaciones web con mayor facilidad.
                    </p>
                    <p>
                    En resumen, aprender a programar ha sido un viaje emocionante y desafiante 
                    para mí. Al principio, parecía un camino difícil de recorrer, pero poco a 
                    poco fui comprendiendo los conceptos y aplicando lo que aprendía. A medida 
                    que ganaba experiencia, me sentía más segura y capaz de construir cosas nuevas. 
                    Si tú también estás empezando en el mundo de la programación, mi consejo es que 
                    te tomes tu tiempo para comprender los conceptos básicos, busques una estructura 
                    de aprendizaje que se adapte a tu estilo y que practiques tanto como puedas.
                    </p>
                    <blockquote>
                      <p>
                      ¡Verás que, con esfuerzo y dedicación, puedes llegar muy lejos!
                      </p>
                    </blockquote>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Development</li>
                    <li href="#">Programming</li>
                    <li href="#">Begginer</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Comentario</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Usando Zustand con React JS! 🚀
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer2.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>FRANKLIN MARTINEZ</label>
                        <span>26 AGO 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    Gestionar el estado es algo necesario en aplicaciones 
                    modernas con React JS. Es por eso que hoy te dare una 
                    introducción a "Zustand" una alternativa popular para 
                    gestionar tu estado en tus aplicaciones.
                    </p>
                    <h4>🚀 ¿Qué es Zustand?</h4>
                    <p>
                    Zustand es una solución de gestión de estados pequeña, 
                    rápida y escalable. Su gestión de estado es centralizada 
                    y basada en acciones.
                    Zustand fue desarrollado por los creadores de Jotai y React-spring's.
                    Puedes usar Zustand tanto en React como en alguna otra tecnología 
                    como Angular, Vue JS o incluso en JavaScript vanilla.
                    Zustand es una alternativa a otros gestores de estado como Redux, 
                    Jotai Recoil, etc.
                    </p>
                    <h4>⭕ Ventajas de usar Zustand.</h4>
                    <ul>
                      <li>
                        Menos código repetido (comparado con Redux).
                      </li>
                      <li>
                        Documentación fácil de entender.
                      </li>
                      <li>
                        Flexibilidad
                        <li>
                          Puedes usar Zustand de la forma simple, con TypeScript, 
                          puedes integrar immer para la inmutabilidad o incluso 
                          puedes escribir código parecido al patron Redux (reducers 
                          y dispatch).
                        </li>
                      </li>
                      <li>
                        No envuelve la aplicación en un proveedor como comúnmente 
                        se hace en Redux.
                      </li>
                      <li>
                        Vuelve a renderizar los componentes solo cuando hay cambios.
                      </li>
                    </ul>
                    <p>
                      Zustand proporciona un fácil acceso y actualización del estado, 
                      lo que lo convierte en una alternativa amigable a otros gestores 
                      de estado.
                      En opinion personal, Zustand me ha agradado bastante por sus 
                      características antes mencionadas, es una de mis librerías favoritas 
                      para gestionar el estado, así como Redux Toolkit.
                    </p>
                    <blockquote>
                      <p>
                      Sin duda deberías de darle una oportunidad para usarla en 
                      algún proyecto 😉.
                      </p>
                    </blockquote>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Zustand</li>
                    <li href="#">Development</li>
                    <li href="#">React</li>
                    <li href="#">Redux</li>

                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Comentario</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    Scrum: qué es y cómo funciona este marco de trabajo
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer3.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>MIGUEL ANGEL DE DIOS</label>
                        <span>09 MAY 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>
                        A la hora de poner en marcha un proyecto, toda empresa 
                        debe asegurar que el equipo implicado conoce sus tareas 
                        y plazos de tiempo de entrega. Scrum es un marco de 
                        trabajo que nos ayuda a conseguirlo y que, además, 
                        permite agilizar la entrega de valor al cliente en 
                        iteraciones cortas de tiempo.
                      </p>
                    </blockquote>
                    <p>
                      Scrum es un framework que se utiliza dentro de equipos 
                      que manejan proyectos de alta incertidumbre. Se trata 
                      de un marco de trabajo por el cual las personas pueden 
                      abordar problemas complejos adaptativos, a la vez que 
                      entregar productos del máximo valor posible productiva 
                      y creativamente. Scrum es liviano y fácil de entender 
                      pero, a la vez, difícil de dominar del todo. Este 
                      framework favorece el time to market y la entrega 
                      rápida de MVP (mínimos productos viables).
                    </p>
                    <h4>¿Cuál es el origen de Scrum?</h4>
                    <p>
                      En el año 2001, en Salt Lake City, un grupo de 
                      desarrolladores capitaneados por el ingeniero de 
                      software Kent Beck se reunieron para compartir sus 
                      frustraciones sobre las metodologías de entrega de 
                      software y los marcos de trabajo que existían hasta 
                      entonces (PMI, CMMI o SPICE). De este encuentro salió 
                      el Manifiesto Ágil, que resume sus intenciones en los 
                      siguientes 4 valores:
                    </p>
                    <ul>
                      <li>
                        Valorar a los individuos y su interacción por encima 
                        de los procesos y herramientas.
                      </li>
                      <li>
                        Valorar el software que funciona por encima de la 
                        documentación exhaustiva.
                      </li>
                      <li>
                        Valorar la colaboración con el cliente por encima 
                        de la negociación contractual
                      </li>
                      <li>
                        Valorar la respuesta al cambio por encima del 
                        seguimiento de un plan.
                      </li>
                    </ul>

                    <h4>Los 5 valores Scrum</h4>
                    <p>
                      El Manifiesto Ágil y Scrum van de la mano para ofrecer 
                      una guía clara a los equipos de desarrollo a la hora 
                      de afrontar un nuevo proyecto. En este sentido, hay 
                      una serie de valores que se asocian al framework Scrum 
                      y que vale la pena tener en consideración:
                    </p>
                    <ol>
                      <li>
                        Coraje. Tener la valentía para hacer lo correcto y 
                        resolver problemas complejos.
                      </li>
                      <li>
                        Foco. La organización del trabajo en sprints da 
                        certidumbre y permite centrar los esfuerzos en 
                        objetivos alcanzables. 
                      </li>
                      <li>
                        Compromiso. Para que el framework Scrum funcione 
                        necesita el compromiso de todos los miembros involucrados.
                      </li>
                      <li>
                        Sinceridad. El equipo Scrum debe de ser transparente en 
                        cuanto al trabajo y los obstáculos que encuentra en el camino.
                      </li>
                      <li>
                        Respeto. Tratarse de forma adecuada entre compañeros y valorar 
                        las ideas y esfuerzos de cada uno es imprescindible. 
                      </li>
                    </ol>
                    <h4>¿En qué se basa el marco de trabajo Scrum?</h4>
                    <p>
                      Al estar enmarcada dentro de las metodologías agile, 
                      Scrum se basa en aspectos como:
                    </p>
                    <ul>
                      <li>
                        La flexibilidad en la adopción de cambios y nuevos 
                        requisitos durante un proyecto complejo.
                      </li>
                      <li>
                        El factor humano.
                      </li>
                      <li>
                        La colaboración e interacción con el cliente.
                      </li>
                      <li>
                        El desarrollo iteractivo como forma de asegurar 
                        buenos resultados.
                      </li>
                    </ul>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Scrum</li>
                    <li href="#">Development</li>
                    <li href="#">Work</li>
                    <li href="#">Organization</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Comentario</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog4.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      ¿Qué es BACKEND y FRONTEND?
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/blog/writersBlog/writer4.png" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>ED TEAM</label>
                        <span>01 FEB 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    Seguramente has escuchado los términos Frontend y Backend 
                    debido a que son muy utilizados entre los desarrolladores, 
                    sin embargo, ¿En realidad sabes qué significan? En este 
                    artículo te explicaré en qué consiste cada uno y algunos 
                    conceptos erróneos que las personas tienen.
                    </p>
                    <p>
                    En el desarrollo web actual existen 3 conceptos claves a 
                    tener en cuenta: Frontend, API y Backend. Decimos que son 
                    conceptos "actuales" debido a qué anteriormente todo se 
                    hacía con PHP, increíble ¿cierto? pero todo empezó así, 
                    la estructura de las webs y la comunicación con el servidor 
                    se hacía con PHP, no era necesario utilizar JavaScript lo 
                    cual hoy en día es casi impensable para el desarrollo de 
                    una Web.
                    </p>
                    <h4>Desarrollo web moderno</h4>
                    <p>
                      El desarrollo web moderno surge alrededor del 2008 cuando 
                      empieza el auge de HTML5, es en este momento dónde 
                      empezamos a hablar de Frontend y Backend, debido a que la 
                      tecnología web crece enormemente gracias a las APIs que 
                      vinieron con HTML5, estas APIs hacen posible una comunicación 
                      entre Backend y Frontend, de esta manera cualquier Frontend 
                      se puede comunicar con cualquier Backend. 
                    </p>
                    <h4>Frontend</h4>
                    <p>
                      El frontend cómo ya dijimos es el cliente y es el que se encarga 
                      de toda la lógica de este cuando desea realizar alguna petición, 
                      podemos decir que este concepto surge en el 2008 debido a las 
                      herramientas que surgieron a partir de ese momento: HTML5, 
                      CSS3 (2008), JSON (2013 - 2015), AngularJS (2010), Ember, 
                      Backbone, Rest (2000) y Nodejs, estas tecnologías hicieron 
                      posible el Frontend.
                    </p>
                    <p>
                      El Frontend ha ido evolucionando con nuevas tecnológicas 
                      como lo son: ES6 (2015), React (2013), Vue (2014), Angular 
                      (2016), GraphQL (2015), las cuales por lo menos ya deben 
                      haber escuchado; en el panorama actual entra en el juego
                      WebAssembly que es un nuevo tipo de código que se ejecuta 
                      en los navegadores web modernos y proporciona nuevas 
                      funciones y grandes ganancias en el rendimiento.
                    </p>
                    <h4>Backend</h4>
                    <p>
                      Llega el momento del Backend y cómo ya dijimos es quien esta 
                      del lado del servidor, este se encarga de la lógica de negocio, 
                      es decir, todas las funciones que requiere el cliente.
                    </p>
                    <p>
                      Un desarrollador Backend debe ser capas de crear una API para 
                      que el Frontend pueda consumirla y así poder realizar peticiones, 
                      en el desarrollo de esta API hay que conectarse a una base de datos 
                      y definir que le es permitido mostrar al frontend (un desarrollador 
                      backend no necesariamente debe saber bases de datos, puede hacerlo 
                      a través de una ORM).
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Development</li>
                    <li href="#">Frontend</li>
                    <li href="#">Web Design</li>
                    <li href="#">Backend</li>
                    <li href="#">Web</li>
                    <li href="#">API</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Comentario</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default News;
