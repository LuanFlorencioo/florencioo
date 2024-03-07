import { ElementType } from 'react';
import { FaCode, FaUserAstronaut } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { MdMobileScreenShare } from "react-icons/md";

export type Knowledge = {
  label: string;
  description: string;
  icon: ElementType;
}

export const knowledges: Knowledge[] = [
  {
    label: 'Desenvolvimento Web Full Stack',
    description: 'Tenho um sólido domínio em desenvolvimento web, abrangendo ambas as stacks: Front End e Back End. Possuo habilidades para trabalhar na construção de websites, lógica de operação de aplicações web, APIs e sistemas de banco de dados.',
    icon: FaCode,
  },
  {
    label: 'Boas Práticas',
    description: 'Adotar boas práticas é crucial, pois não apenas simplifica a manutenção, mas também proporciona eficiência ao código. Tenho o hábito de seguir princípios fundamentais, como Clean Code, POO e os princípios SOLID, na busca constante por criar aplicações web de elevada qualidade.',
    icon: FaUserAstronaut,
  },
  {
    label: 'Metodologias Ágeis',
    description: 'Possuo experiência em colaboração em equipe, aderindo a metodologias ágeis como Scrum e Kanban em projetos. Isso significa que estou habituado a lidar com adaptações, promovendo flexibilidade e autonomia da equipe, priorizando a entrega contínua de valor.',
    icon: DiScrum,
  },
  {
    label: 'Mobile First',
    description: 'No desenvolvimento web, é essencial priorizar a criação de uma experiência de usuário otimizada para dispositivos móveis, como celulares e tablets, antes de direcionar a atenção para dispositivos de tela maior, como desktops.',
    icon: MdMobileScreenShare,
  },
  {
    label: 'Noções UX/UI Design',
    description: 'Sempre busco proporcionar ao usuário uma experiência e usabilidade excepcionais em websites, páginas e aplicações web, considerando cuidadosamente elementos como coerência, estilo, psicologia das cores e escolha apropriada de tipografia.',
    icon: FaPenNib,
  },
]