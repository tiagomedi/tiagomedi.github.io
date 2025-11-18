import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

// Función para obtener proyectos con datos de GitHub
export const getProjects = async (): Promise<Project[]> => {
  const [dataScience, videoQa, virtualFit] = await Promise.all([
    getRepositoryDetails('tiagomedi/DataScience-project'),
    getRepositoryDetails('tiagomedi/video-qa-automation'),
    getRepositoryDetails('tiagomedi/ASAI-VirtualFit')
  ]);

  return [
    {
      name: 'Full Stack Developer | Web +Arq Consultores',
      description: 'Desarrollo e implementación del sitio web corporativo +Arq Consultores.',
      demoLink: 'https://masarq.cl/',
      tags: ['Landing Page', 'Corporativo']
    },
    {
      ...dataScience,
      name: 'Clasificación de Notebooks por Rango de Precio.',
      postLink: 'https://github.com/tiagomedi/DataScience-project',
      tags: ['Data Science', 'ML', 'Python']
    },
    {
      ...videoQa,
      name: 'Automatización de QA con LLMs: Generación de Casos de Prueba desde Videos de Interfaz',
      postLink: 'https://github.com/tiagomedi/video-qa-automation',
      tags: ['QA', 'Python', 'LLM']
    },
    {
      ...virtualFit,
      name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
      postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
      tags: ['SOA', 'Python', 'Docker']
    }
  ];
};

// Exportar proyectos estáticos para fallback
export const projects: Project[] = [
  {
    name: 'Full Stack Developer | Web +Arq Consultores',
    description: 'Desarrollo e implementación del sitio web corporativo +Arq Consultores.',
    demoLink: 'https://masarq.cl/',
    tags: ['Landing Page', 'Corporativo']
  },
  {
    name: 'Clasificación de Notebooks por Rango de Precio.',
    description: 'Proyecto de ciencia de datos para clasificar notebooks según su rango de precio.',
    postLink: 'https://github.com/tiagomedi/DataScience-project',
    demoLink: 'https://github.com/tiagomedi/DataScience-project',
    tags: ['Data Science', 'ML', 'Python']
  },
  {
    name: 'Automatización de QA con LLMs: Generación de Casos de Prueba desde Videos de Interfaz',
    description: 'Herramienta de automatización para generar casos de prueba usando modelos de lenguaje.',
    postLink: 'https://github.com/tiagomedi/video-qa-automation',
    demoLink: 'https://github.com/tiagomedi/video-qa-automation',
    tags: ['QA', 'Python', 'LLM']
  },
  {
    name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
    description: 'Sistema de monitoreo para arquitectura de microservicios.',
    postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
    demoLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
    tags: ['SOA', 'Python', 'Docker']
  }
];
