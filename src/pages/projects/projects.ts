import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  image?: string;
  [key: string]: any;
}

// Función para obtener proyectos con datos de GitHub
export const getProjects = async (): Promise<Project[]> => {
  const [dataScience, videoQa, virtualFit, planiFitAbGym, muscleRpg, geoRuta] = await Promise.all([
    getRepositoryDetails('tiagomedi/plani-fit-ab_gym'),
    getRepositoryDetails('tiagomedi/DataScience-project'),
    getRepositoryDetails('tiagomedi/video-qa-automation'),
    getRepositoryDetails('tiagomedi/ASAI-VirtualFit'),
    getRepositoryDetails('tiagomedi/Muscle-RPG'),
    getRepositoryDetails('fase99/GeoRuta-Inmobiliaria'),
  ]);

  return [
    {
      name: 'Plantilla Rutina Entrenamiento Automatizadas | ABGYM',
      description: 'Aplicación web fullstack para la creación y gestión profesional de rutinas de entrenamiento en gimnasio.',
      postLink: 'https://github.com/tiagomedi/plani-fit-ab_gym',
      tags: ['Uvicorn', 'Python', 'FastAPI', 'Reportlab'],
      image: 'plani-abgym.png',
      demoLink: ""
    },
    {
      name: 'GeoRuta Inmobiliaria',
      description: 'GeoRuta Inmobiliaria es una plataforma resiliente basada en SIG diseñada para transformar la búsqueda de vivienda en un proceso logísticamente eficiente y centrado en el entorno.',
      postLink: 'https://github.com/fase99/GeoRuta-Inmobiliaria',
      tags: ['OpenStreetMap', 'Python', 'PostGIS', 'Docker'],
      image: 'georuta.png',
      demoLink: ""
      
    },
    {
      name: 'Muscle RPG | Maximiza tu Hipertrofia',
      description: 'Modelo planificación inteligente de rutinas de ejercicio maximizando hipertrofia muscular con enfoque matematico basado en programación dinamica.',
      postLink: 'https://github.com/tiagomedi/Muscle-RPG',
      tags: ['NestJS', 'Angular', 'MongoDB', 'Algorithms'],
      image: 'musclerpg.png',
      demoLink: ""
    },
    {
      name: 'Full Stack Developer | Web +Arq Consultores',
      description: 'Desarrollo e implementación del sitio web corporativo +Arq Consultores.',
      demoLink: 'https://masarq.cl/',
      tags: ['Landing Page', 'Corporativo'],
      image: 'masarq.png'
    },
    {
      name: 'Clasificación de Notebooks por Rango de Precio.',
      description: 'Desarrollo de un modelo de clasificación capaz de predecir y asignar automáticamente un rango de precio predefinido (Económico, Gama Media y Gama Alta) a Notebooks, basándose en sus características técnicas y de mercado extraídas de listados de productos de un retailer online (Falabella) para ayudar a la toma de desiciones a los usuarios.',
      postLink: 'https://github.com/tiagomedi/DataScience-project',
      tags: ['Data Science', 'ML', 'Python'],
      image: 'datascience.png',
      demoLink: ""
    },
    {
      name: 'Automatización de QA con LLMs: Generación de Casos de Prueba desde Videos de Interfaz',
      description: 'Generación automática de casos de prueba a partir de videos demostrativos, facilitando la creación y mantenimiento de pruebas automatizadas por medio de multimedia.',
      postLink: 'https://github.com/tiagomedi/video-qa-automation',
      tags: ['QA', 'Python', 'LLM', 'Automation'],
      image: 'qa video.png',
      demoLink: ""
    },
    {
      name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
      description: 'Interfaz web para el control y monitoreo de todos los servicios del sistema Virtual Fit. Esta aplicación proporciona una experiencia visual CLI y GUI (para servicios) y en tiempo real para gestionar los microservicios de la tienda virtual mediante una arquitectura SOA utilizando un BUS en alojado en Docker.',
      postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
      tags: ['SOA', 'Python', 'Docker'],
      image: 'asai.png',
      demoLink: ""
    }
  ];
};

// Exportar proyectos estáticos para fallback
export const projects: Project[] = [
  {
    name: 'Plantilla Rutina Entrenamiento Automatizadas | ABGYM',
    description: 'Aplicación web fullstack para la creación y gestión profesional de rutinas de entrenamiento en gimnasio.',
    postLink: 'https://github.com/tiagomedi/plani-fit-ab_gym',
    tags: ['Uvicorn', 'Python', 'FastAPI', 'Reportlab'],
    image: 'plani-abgym.png',
    demoLink: ""
  },
  {
    name: 'GeoRuta Inmobiliaria',
    description: 'GeoRuta Inmobiliaria es una plataforma resiliente basada en SIG diseñada para transformar la búsqueda de vivienda en un proceso logísticamente eficiente y centrado en el entorno.',
    postLink: 'https://github.com/fase99/GeoRuta-Inmobiliaria',
    tags: ['OpenStreetMap', 'Python', 'PostGIS', 'Docker'],
    image: 'georuta.png',
    demoLink: ""
  },
  {
    name: 'Muscle RPG | Maximiza tu Hipertrofia',
    description: 'Modelo planificación inteligente de rutinas de ejercicio maximizando hipertrofia muscular con enfoque matematico basado en programación dinamica.',
    postLink: 'https://github.com/tiagomedi/Muscle-RPG',
    tags: ['NestJS', 'Angular', 'MongoDB', 'Algorithms'],
    image: 'musclerpg.png',
    demoLink: ""
  },
  {
    name: 'Full Stack Developer | Web +Arq Consultores',
    description: 'Desarrollo e implementación del sitio web corporativo +Arq Consultores.',
    demoLink: 'https://masarq.cl/',
    tags: ['Landing Page', 'Corporativo'],
    image: 'masarq.png'
  },
  {
    name: 'Clasificación de Notebooks por Rango de Precio.',
    description: 'Desarrollo de un modelo de clasificación capaz de predecir y asignar automáticamente un rango de precio predefinido (Económico, Gama Media y Gama Alta) a Notebooks, basándose en sus características técnicas y de mercado extraídas de listados de productos de un retailer online (Falabella) para ayudar a la toma de desiciones a los usuarios.',
    postLink: 'https://github.com/tiagomedi/DataScience-project',
    tags: ['Data Science', 'ML', 'Python'],
    image: 'datascience.png',
    demoLink: ""
  },
  {
    name: 'Automatización de QA con LLMs: Generación de Casos de Prueba desde Videos de Interfaz',
    description: 'Generación automática de casos de prueba a partir de videos demostrativos, facilitando la creación y mantenimiento de pruebas automatizadas por medio de multimedia.',
    postLink: 'https://github.com/tiagomedi/video-qa-automation',
    tags: ['QA', 'Python', 'LLM', 'Automation'],
    image: 'qa video.png',
    demoLink: ""
  },
  {
    name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
    description: 'Interfaz web para el control y monitoreo de todos los servicios del sistema Virtual Fit. Esta aplicación proporciona una experiencia visual CLI y GUI (para servicios) y en tiempo real para gestionar los microservicios de la tienda virtual mediante una arquitectura SOA utilizando un BUS en alojado en Docker.',
    postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
    tags: ['SOA', 'Python', 'Docker'],
    image: 'asai.png',
    demoLink: ""
  }
];
