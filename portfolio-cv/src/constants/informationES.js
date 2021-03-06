import {
  faAngular,
  faReact,
  faSass,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShoppingCart,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

export default {
  menu: {
    page1: 'Sobre Mí',
    page2: 'Resumen',
    page3: 'Experiencia',
    page4: 'Educación',
    page5: 'Proyectos',
    page6: 'Contacto',
    title1: 'Hola, soy',
    title2: 'Ver CV',
    title3: '¿Qué hago?',
    title4: 'Linkedln',
    title5: '¿Cómo te puedo ayudar?',
    title6: 'Enviar mensaje',
    title7: 'Habilidades',
    title8: 'Conocimientos',
    title9: 'Recomendaciones',
    input1: 'Nombre completo',
    input2: 'Dirección de email',
    input3: 'Asunto',
    input4: 'Mensaje',
    message1s: 'Enviado correctamente',
    message2: 'Error al enviar',
    formMessage1: 'Debe contener de 1 a 40 carácteres y sólo letras',
    formMessage2: 'Email no válido',
    formMessage3: 'Debe contener de 1 a 50 carácteres',
    formMessage4: 'Debe contener de 1 a 500 carácteres',
  },

  personal: {
    profession: 'Desarrollador web',
    name: 'Jose Cárcamo',
    phone: '+34 620-664-432',
    email: 'jocalu87@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-carcamo-lucena-web-developer/',
    github: 'https://github.com/Jocalu',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/profile_photo-removebg-preview.png?alt=media&token=67001054-a95d-4fc5-b5c3-87d432e57605',
    photoCoverURL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/photo_cover.png?alt=media&token=1a1fac86-11ce-478a-9d8f-e766e8030d54',
  },
  resume: {
    info: [
      'Apasionado de la tecnología y entendiendo que es el presente y futuro, he decidido adentrarme en el mundo de la programación y del desarrollo web.',
      'Y... me encanta! Cada proyecto es una nueva aventura y cada problema en el camino, es un desafío a superar.',
      '¿Qué podéis encontrar en mí? Un líder, una persona apasionada con lo que hace, que no pierde los nervios ante ninguna situación. Dispuesto a ayudar a los demás, paciente, comprensivo. En mis trabajos siempre he intentado transmitir la pasión que siento por la profesión y un alto grado de implicación y perfeccionismo para conseguir siempre el mejor resultado.',
      'Si deseas charlar conmigo acerca de cómo podría ayudar, colaborar o simplemente solicitar información sobre mí, por favor, contacta conmigo, estaré encantado de atenderte.'],
  },
  experience: [
    {
      place: 'MidDay restaurant',
      position: 'Diseño, maquetación y programación web',
      date: '04/2021 - Actualmente',
      description: ['Programación de la app web con Angular.',
        'Diseño propio de toda la web.',
        'Buena relación con el cliente.'],

    },
    {
      place: 'Skylab Coders Academy',
      position: 'Desarrollador web Junior',
      date: '01/2021 - 04/2021',
      description: ['Habilidad para escribir código documentado, para mejor entendimiento en un ambiente de trabajo.',
        'Experiencia en ambientes de prueba y desarrollo',
        'Experiencia con consumo de apis desde el frontend.',
        'Familiarizado con el desarrollo Agile.',
        'Grandes habilidades para la resolución de problemas',
        'Motivación por la innovación.'],
    }],
  education: [
    {
      place: 'Skylab Coders Academy',
      studies: 'Desarrollador web',
      date: '01/2021 - 04/2021',
      description: ['Mejor Bootcamp de programación del mundo según SwitchUp.', 'Más de 1200 horas de programación.', 'Enfocado especialmente en buenas prácticas y unit-testing (Jest, Jasmine).',
        'Conocimientos en programación web: HTML, CSS, Javascript, Typescript, SASS, Angular, React.',
        'Utilización de Herramientas de Control de versiones: Git'],
    },
    {
      place: 'EHTB',
      studies: 'Grado superior en Dirección de cocina',
      date: '09/2013 - 09/2015',
      description: ['Nota media de 9,0 - Graduado con honores',
        'Responsable en elaboración de menús en el restaurante de la escuela EHTB durante el curso del Ciclo Formativo.'],
    },
    {
      place: 'EPSEB',
      studies: 'Grado en Ingeniería de edificación',
      date: '09/2005 - 09/2010',
      description: ['Nota media de 7,0.',
        'Mención especial en Rehabilitación de Edificaciones.'],
    },
  ],
  softskills: [
    {
      name: 'Liderazgo',
      ability: 100,
    },
    {
      name: 'Colaboración',
      ability: 75,
    },
    {
      name: 'Comunicación',
      ability: 70,
    },
    {
      name: 'Creatividad',
      ability: 75,
    },
    {
      name: 'Organización',
      ability: 90,
    },
    {
      name: 'Entusiasmo',
      ability: 80,
    },
    {
      name: 'Iniciativa',
      ability: 90,
    },
    {
      name: 'Ética de trabajo',
      ability: 75,
    },
    {
      name: 'Resolución de problemas',
      ability: 100,
    },
    {
      name: 'Pensamiento crítico',
      ability: 90,
    }],
  hardskills: [
    {
      name: 'HTML',
      icon: faHtml5,
    },
    {
      name: 'Javascript',
      icon: faJsSquare,
    },
    {
      name: 'CSS',
      icon: faCss3Alt,
    },
    {
      name: 'SCRUM',
      icon: null,
    },
    {
      name: 'Agile',
      icon: null,
    },
    {
      name: 'Unit Testing',
      icon: null,
    },
    {
      name: 'Sass',
      icon: faSass,
    },

    {
      name: 'Node JS',
      icon: faNodeJs,
    },
    {
      name: 'Flux',
      icon: null,
    },
    {
      name: 'MongoDB',
      icon: null,
    },
    {
      name: 'Redux',
      icon: null,
    },
    {
      name: 'Typescript',
      icon: null,
    },
    {
      name: 'Angular',
      icon: faAngular,
    },
    {
      name: 'Git',
      icon: null,
    },
    {
      name: 'TDD',
      icon: null,
    },
    {
      name: 'React',
      icon: faReact,
    },
    {
      name: 'React Native',
      icon: faReact,
    },

    {
      name: 'Jest',
      icon: null,
    },
    {
      name: 'Jasmine',
      icon: null,
    },
    {
      name: 'Vue',
      icon: faVuejs,
    },
  ],

  recommendations: {
    diana: {
      name: 'Diana Expósito',
      position: 'Directora en Skylab Academy',
      description: 'Jose es liderazgo, transparencia, foco, trabajo, planificación, compañerismo y sobre todo CONFIANZA. Dale un reto y le motivarás. Encontrará la solución y además hará partícipe al equipo y lo alineará para que la experiencia sea el mejor de los aprendizajes. Es un facilitador con una trayectoría como developer que hay que seguir de cerca.',
      photoURL: 'https://i.postimg.cc/fTxYJ9Zr/Diana.jpg',
    },

    alvaro: {
      name: 'Álvaro Valladares',
      position: 'Compañero en Skylab Academy',
      description: 'Entusiasta de la programación que contagia a su entorno. En el tiempo que pude trabajar con él nunca le vi rendirse ante un problema, es una persona resolutiva que sabe trabajar en equipo y va un paso más allá del mero trabajo, implicándose con su entorno. Siempre aprendiendo, de naturaleza curiosa. No hace falta trabajar mucho tiempo a su lado para darse cuenta que la programación le apasiona.',
      photoURL: 'https://i.postimg.cc/CxwJYVXX/alvaro.jpg',
    },
  },
  projects: [
    {
      name: 'Moodsic',
      description: 'Moodsic es una aplicación web que te permite escuchar listas de música según tu estado de ánimo, seleccionando la canción o artista que prefieras.',
      image: 'https://i.postimg.cc/13mysPdV/Captura-de-pantalla-2021-04-07-a-las-9-07-55.png',
      github: 'https://github.com/Jocalu/Moodsic',
      url: '',
      video: 'https://vimeo.com/534338172',
      technology: {
        name: 'React',
        icon: faReact,

      },
    },
    {
      name: 'MidDay Restaurant',
      description: 'MidDay es una aplicación que permite la gestión de reservas de menús de mediodía en restaurantes. Además permite al usuario crear una base de datos propia para cada restaurante, desde donde gestionar sus platos y menús.',
      image: 'https://i.postimg.cc/DfGvcxs0/Captura-de-pantalla-2021-04-07-a-las-9-08-13.png',
      github: 'https://github.com/Jocalu/MidDay-Project',
      url: 'https://midday-restaurant.web.app/home',
      video: 'https://vimeo.com/534334719',
      technology: {
        name: 'Angular',
        icon: faAngular,
      },
    },
    {
      name: 'Porfolio',
      description: 'Éste mismo portfolio. Hecho con React, Typescript y usando react material.',
      image: 'https://i.postimg.cc/Jnd4SY8g/Captura-de-pantalla-2021-04-07-a-las-18-42-28.png',
      github: 'https://github.com/Jocalu/Portfolio',
      url: 'https://portfolio-jose-carcamo.web.app/',
      video: '',
      technology: {
        name: 'React',
        icon: faReact,
      },
    },
    {
      name: 'Listado "To Do"',
      description: 'Un listado de tareas donde puedes añadir, borrar, marcar o buscar tareas. Hecho con Vue y typescript.',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/ToDo-Vue.png?alt=media&token=93a35970-ac4d-4201-bccd-a5c8866e987a',
      github: 'https://github.com/Jocalu/ToDo-Vue-TS',
      url: '',
      video: '',
      technology: {
        name: 'Vue',
        icon: faVuejs,
      },
    },
    {
      name: 'CRUD Usuarios',
      description: 'CRUD (create, read, update, delete). Realizado en React Native con DB en Firebase.',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/CRUD-react-native.png?alt=media&token=97824035-f523-48f1-9fde-ba998a373de1',
      github: 'https://github.com/Jocalu/CRUD-react-native',
      url: '',
      video: 'https://vimeo.com/541541606',
      technology: {
        name: 'React Native',
        icon: faReact,
      },
    },
    {
      name: 'Juego Piedra, Papel y Tijeras',
      description: 'Mi primer proyecto de programación, el empuje que necesitaba para estudiar programación. Hecho un tutorial, es un juego de piedra, papel, tijeras hecho con Javascript Vanilla',
      image: 'https://i.postimg.cc/xTGnSMkj/Captura-de-pantalla-2021-04-08-a-las-10-00-33.png',
      github: 'https://github.com/Jocalu/Juego_PPT',
      url: '',
      video: '',
      technology: {
        name: 'Javascript',
        icon: faJsSquare,
      },
    },
  ],
  services: [{
    name: 'Comercio electrónico',
    icon: faShoppingCart,
    description: 'Como operador de un sitio web, se enfrenta permanentemente al desafío de monitorear el mercado y generar contenido único con valor agregado para el usuario. Al hacerlo, crea ventajas competitivas y permanece visible en los motores de búsqueda para el usuario.',
  },
  {
    name: 'Diseño web',
    icon: faLaptopCode,
    description: 'Incluye diseño y soluciones de comercio electrónico centradas en la usabilidad, marcas creativas que inyectan personalidad a su negocio y programación personalizada para hacer realidad las ideas en las que necesita ayuda.',
  }],
};
