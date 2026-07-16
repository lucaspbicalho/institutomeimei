import type {
  FooterLinkGroup,
  GalleryImage,
  HelpOption,
  NavLink,
  Project,
  StatItem,
  Testimonial,
} from '@/types'

export const siteConfig = {
  name: 'Instituto Meimei',
  tagline:
    'Somos uma instituição beneficente sem fins lucrativos dedicada à educação infantil e ao desenvolvimento social em Ribeirão das Neves, MG.',
  description:
    'Instituição Espírita de Amparo à Criança. Educação infantil de qualidade e desenvolvimento social em Ribeirão das Neves, MG.',
  url: 'https://institutomeimei.com.br',
  email: 'institutomeimeibh@gmail.com',
  phone: '(31) 3191-5367',
  whatsapp: '553188645299',
  address: 'Av. Gávea, 1092 — Urca, Justinópolis, Ribeirão das Neves — MG',
}

export const pixConfig = {
  title: 'Doação via PIX',
  subtitle:
    'Copie a chave PIX abaixo e ajude a transformar vidas através da nossa missão.',
  keyLabel: 'Chave CNPJ',
  key: '11220114000163',
  keyFormatted: '11.220.114/0001-63',
  legalName: 'Instituto Meimei — Instituição Espírita de Amparo à Criança',
  instructions:
    'Abra o seu banco, escolha "Pagar com PIX" e cole a chave copiada.',
  copiedMessage:
    'Código copiado com sucesso! Agora, abra o seu banco, escolha "Pagar com PIX" e cole a chave copiada.',
}

export const whatWeDoIntro = [
  'O Instituto Meimei oferece atendimento em tempo integral a crianças da primeira infância, proporcionando um ambiente acolhedor, seguro e estimulante, onde educação, cuidado e afeto caminham juntos.',
  'Nossa escola cuida do desenvolvimento integral das crianças, contemplando os aspectos cognitivos, emocionais, sociais, físicos e espirituais. Durante sua permanência na instituição, as crianças recebem alimentação balanceada, participam de atividades pedagógicas, culturais, esportivas e recreativas.',
  'O trabalho também se estende às famílias, fortalecendo vínculos, promovendo orientação, acolhimento e ações de apoio social, reconhecendo que a transformação da realidade acontece quando escola, família e comunidade caminham juntas.',
]

export const navLinks: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'O que fazemos', href: '#o-que-fazemos' },
  { label: 'Como ajudar', href: '#ajudar' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export const stats: StatItem[] = [
  { value: 18, suffix: '+', label: 'Anos de história' },
  { value: 50, suffix: '+', label: 'Crianças atendidas' },
  { value: 300, suffix: '+', label: 'Pessoas beneficiadas' },
  { value: 11500, suffix: '+', label: 'Refeições por ano', formatLocale: true },
]

export const projects: Project[] = [
  {
    id: 'educacao-infantil',
    title: 'Educação Infantil',
    description:
      'Escola de educação infantil em chácara, com pedagogia fundamentada no amor, natureza e formação integral do ser.',
    image:
      '/projetos/eduinfatil.jpeg',
    imageAlt: 'Crianças aprendendo em ambiente natural ao ar livre',
    tag: 'Educação',
  },
  {
    id: 'evangelizacao',
    title: 'Evangelização',
    description:
      'Promovemos encontros de evangelização e convivência cristã com as famílias, oferecendo momentos de reflexão, fortalecimento da fé, estudo do Evangelho e construção de valores.',
    image:
      '/projetos/evan.jpeg',
    imageAlt: 'Famílias em momento de convivência e reflexão',
    tag: 'Evangelização',
  },
  {
    id: 'promocao-social',
    title: 'Promoção Social',
    description:
      'Apoio às famílias em situação de vulnerabilidade social, por meio da distribuição de cestas básicas, orientação, acolhimento e acompanhamento.',
    image:
      '/projetos/promosocial.jpeg',
    imageAlt: 'Família e criança em atividade comunitária',
    tag: 'Social',
  },
  {
    id: 'educacao-natureza',
    title: 'Educação pela Natureza',
    description:
      'Aprendizagem vinculada ao ambiente natural da chácara, estimulando descoberta, respeito e conexão com a vida.',
    image:
      '/projetos/promo.jpeg',
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
    cta: 'Doar com PIX',
    href: '/pix',
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
    src: '/galeria/galeria1.jpeg',
    alt: 'Crianças em atividade artística na escola',
    caption: 'Atividades artísticas',
  },
  {
    id: 'g2',
    src: '/galeria/galeria2.jpeg',
    alt: 'Crianças lendo livros juntas',
    caption: 'Momento de leitura',
  },
  {
    id: 'g3',
    src: '/galeria/galeria5.jpeg',
    alt: 'Crianças brincando ao ar livre',
    caption: 'Recreação na natureza',
  },
  {
    id: 'g4',
    src: '/galeria/galeria6.jpeg',
    alt: 'Grupo de crianças em atividade educativa',
    caption: 'Aprendizagem em grupo',
  },
  {
    id: 'g5',
    src: '/galeria/galeria7.jpeg',
    alt: 'Grupo de crianças em atividade educativa',
    caption: 'Aprendizagem em grupo',
  },
  {
    id: 'g6',
    src: '/galeria/galeria8.jpeg',
    alt: 'Grupo de crianças em atividade educativa',
    caption: 'Aprendizagem em grupo',
  },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Nossa história', href: '#sobre' },
      { label: 'Missão e valores', href: '#sobre' },
      { label: 'Nossa escola', href: '#o-que-fazemos' },
    ],
  },
  {
    title: 'Participar',
    links: [
      { label: 'Como ajudar', href: '#ajudar' },
      { label: 'Voluntariado', href: '#ajudar' },
      { label: 'Doações', href: '/pix' },
      { label: 'Parcerias', href: '#contato' },
    ],
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Galeria', href: '#galeria' },
      { label: 'O que fazemos', href: '#o-que-fazemos' },
      { label: 'Contato', href: '#contato' },
    ],
  },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/institutomeimei/?locale=pt_BR', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/institutomeimeibh/', icon: 'instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@InstitutoMeimei', icon: 'youtube' },
]

export const heroImages = {
  primary: {
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
    alt: 'Criança em atividade educativa ao ar livre no Instituto Meimei',
  },
  alternate: {
    src: 'heroImage.jpeg',
    alt: 'Grupo de crianças em atividade educativa na comunidade',
  },
  secundary: {
    src: 'project4.jpeg',
    alt: 'Grupo de crianças em atividade educativa na comunidade',
  },
}
