import type {
  FooterLinkGroup,
  GalleryImage,
  HelpOption,
  NavLink,
  NewsArticle,
  Project,
  StatItem,
  Testimonial,
} from '@/types'

export const siteConfig = {
  name: 'Instituto Meimei',
  tagline: 'Educação transformadora e amparo à criança',
  description:
    'Instituição Espírita de Amparo à Criança. Educação infantil de qualidade, formação continuada e projetos sociais em Ribeirão das Neves, MG.',
  url: 'https://institutomeimei.com.br',
  email: 'contato@institutomeimei.com.br',
  phone: '(31) 3621-0000',
  address: 'Justinópolis, Ribeirão das Neves — MG',
}

export const navLinks: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como ajudar', href: '#ajudar' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Contato', href: '#contato' },
]

export const stats: StatItem[] = [
  { value: 15, suffix: '+', label: 'Anos de história' },
  { value: 120, suffix: '+', label: 'Crianças atendidas' },
  { value: 40, suffix: '+', label: 'Educadores capacitados' },
  { value: 12, label: 'Projetos sociais ativos' },
]

export const projects: Project[] = [
  {
    id: 'educacao-infantil',
    title: 'Educação Infantil',
    description:
      'Escola de educação infantil em chácara, com pedagogia fundamentada no amor, natureza e formação integral do ser.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    imageAlt: 'Crianças aprendendo em ambiente natural ao ar livre',
    tag: 'Educação',
  },
  {
    id: 'formacao-continuada',
    title: 'Formação Continuada',
    description:
      'Capacitação permanente de professores e educadores com base na pedagogia do amor e na transformação humana.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    imageAlt: 'Educadores em formação em sala de aula',
    tag: 'Capacitação',
  },
  {
    id: 'promocao-social',
    title: 'Promoção Social',
    description:
      'Amparo às famílias em situação de vulnerabilidade social, fortalecendo vínculos e oportunidades de transformação.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    imageAlt: 'Família e criança em atividade comunitária',
    tag: 'Social',
  },
  {
    id: 'educacao-natureza',
    title: 'Educação pela Natureza',
    description:
      'Aprendizagem vinculada ao ambiente natural da chácara, estimulando descoberta, respeito e conexão com a vida.',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
    imageAlt: 'Criança explorando plantas e natureza',
    tag: 'Natureza',
  },
]

export const helpOptions: HelpOption[] = [
  {
    id: 'doacao',
    title: 'Doação',
    description:
      'Contribua financeiramente e ajude a manter nossa escola, alimentação e materiais pedagógicos.',
    icon: 'heart',
    cta: 'Doar agora',
    href: '#contato',
  },
  {
    id: 'voluntario',
    title: 'Voluntariado',
    description:
      'Participe com seu tempo e talento em atividades educativas, eventos e projetos comunitários.',
    icon: 'hand',
    cta: 'Quero ser voluntário',
    href: '#contato',
  },
  {
    id: 'doacao-material',
    title: 'Doação de materiais',
    description:
      'Livros, brinquedos educativos, alimentos e itens escolares fazem a diferença no dia a dia das crianças.',
    icon: 'gift',
    cta: 'Ver lista de necessidades',
    href: '#contato',
  },
  {
    id: 'parcerias',
    title: 'Parcerias',
    description:
      'Empresas e organizações podem apoiar projetos específicos e ampliar nosso impacto social.',
    icon: 'users',
    cta: 'Fale conosco',
    href: '#contato',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'O Instituto Meimei transformou a vida da minha filha. A educação com amor e respeito fez dela uma criança mais confiante e feliz.',
    author: 'Maria Silva',
    role: 'Mãe de aluna',
  },
  {
    id: '2',
    quote:
      'Trabalhar aqui é vivenciar a pedagogia do amor todos os dias. A formação continuada nos prepara para educar com excelência e humanidade.',
    author: 'Ana Paula Costa',
    role: 'Educadora',
  },
  {
    id: '3',
    quote:
      'A chácara e o contato com a natureza criam um ambiente único. As crianças aprendem valores que vão além da sala de aula.',
    author: 'Carlos Mendes',
    role: 'Voluntário',
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    alt: 'Crianças em atividade artística na escola',
    caption: 'Atividades artísticas',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80',
    alt: 'Crianças lendo livros juntas',
    caption: 'Momento de leitura',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1560787474-b85dd786050a?w=600&q=80',
    alt: 'Crianças brincando ao ar livre',
    caption: 'Recreação na natureza',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80',
    alt: 'Grupo de crianças em atividade educativa',
    caption: 'Aprendizagem em grupo',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&q=80',
    alt: 'Espaço verde da chácara escolar',
    caption: 'Nosso espaço',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
    alt: 'Criança explorando a natureza',
    caption: 'Educação pela natureza',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Nova turma de formação para educadores',
    excerpt:
      'Iniciamos o ciclo 2025 de capacitação com foco em pedagogia do amor e educação pela natureza.',
    date: '2025-03-15',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
    imageAlt: 'Educadores em treinamento',
    href: '#',
  },
  {
    id: 'n2',
    title: 'Dia da família na chácara',
    excerpt:
      'Famílias participaram de um dia especial com atividades ao ar livre, música e integração comunitária.',
    date: '2025-02-28',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
    imageAlt: 'Famílias reunidas em evento ao ar livre',
    href: '#',
  },
  {
    id: 'n3',
    title: 'Campanha de doação de livros',
    excerpt:
      'Recebemos mais de 200 livros infantil na campanha de incentivo à leitura. Agradecemos a todos os doadores!',
    date: '2025-01-20',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
    imageAlt: 'Livros empilhados para doação',
    href: '#',
  },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Nossa história', href: '#sobre' },
      { label: 'Missão e valores', href: '#sobre' },
      { label: 'Nossa escola', href: '#projetos' },
      { label: 'Transparência', href: '#contato' },
    ],
  },
  {
    title: 'Participar',
    links: [
      { label: 'Como ajudar', href: '#ajudar' },
      { label: 'Voluntariado', href: '#ajudar' },
      { label: 'Doações', href: '#ajudar' },
      { label: 'Parcerias', href: '#contato' },
    ],
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Notícias', href: '#noticias' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Contato', href: '#contato' },
    ],
  },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
]
