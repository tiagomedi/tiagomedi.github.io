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
    // demoLink: 'https://github.com/tiagomedi/DataScience-project',
    postLink: 'https://github.com/tiagomedi/DataScience-project',
    tags: ['Data Science', 'ML']
  },
  {
    ...(await getRepositoryDetails('tiagomedi/ASAI-VirtualFit')),
    name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
    // demoLink: 'https://github.com/tiagomedi/DataScience-project',
    postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
    tags: ['SOA', 'Python', 'Docker']
  }
  // },
  // {
  //   ...(await getRepositoryDetails('tiagomedi/ASAI-VirtualFit')),
  //   name: 'Interfaz Web de Monitoreo de Microservicios | Virtual Fit.',
  //   // demoLink: 'https://github.com/tiagomedi/DataScience-project',
  //   postLink: 'https://github.com/tiagomedi/ASAI-VirtualFit',
  //   tags: ['SOA', 'Python', 'Docker']
  // }
]
