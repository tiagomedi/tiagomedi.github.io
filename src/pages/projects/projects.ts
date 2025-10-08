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

export const projects: Project[] = [
  {
    name: 'Full Stack Developer | Web +Arq Consultores',
    description: 'Desarrollo e implementación del sitio web corporativo +Arq Consultores.',
    demoLink: 'https://masarq.cl/',
    tags: ['Landing Page', 'Corporativo']
  },
  {
    ...(await getRepositoryDetails('tiagomedi/DataScience-project')),
    name: 'Clasificación de Notebooks por Rango de Precio.',
    postLink: 'https://github.com/tiagomedi/DataScience-project',
    tags: ['Data Science', 'ML']
  },
  {
    ...(await getRepositoryDetails('tiagomedi/video-qa-automation')),
    name: 'Automatización de QA con LLMs: Generación de Casos de Prueba desde Videos de Interfaz',
    postLink: 'https://github.com/tiagomedi/video-qa-automation',
    tags: ['QA', 'Python', 'IA']
  },
  {
    ...(await getRepositoryDetails('tiagomedi/ASAI-VirtualFit')),
    name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
    postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
    tags: ['SOA', 'Python', 'Docker']
  }
]
