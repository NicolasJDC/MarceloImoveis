export interface PropertyImage {
  id: string;
  url: string;
  title: string;
  category: 'piscina' | 'quartos' | 'salas' | 'cozinha' | 'banheiros' | 'seguranca';
  description: string;
}

export const propertyImages: PropertyImage[] = [
  {
    id: 'pool_night',
    url: '/assets/762334d5-88fa-45bd-a00a-d05d714bf5c8.JPG',
    title: 'Piscina Iluminada com LED e Cascata',
    category: 'piscina',
    description: 'Iluminação noturna em LED azul com cascata, prainha com degraus e espreguiçadeiras ao redor.',
  },
  {
    id: 'pool_day',
    url: '/assets/d3b5402e-1508-4278-ac77-5645dd492010.JPG',
    title: 'Área da Piscina com Gradil de Proteção',
    category: 'piscina',
    description: 'Piscina privativa com gradil de segurança com vidro, guarda-sol e deck com mesas.',
  },
  {
    id: 'porch_lounge',
    url: '/assets/0c4e6ec0-5daf-4695-be9b-9b8d9cb83a6e.JPG',
    title: 'Varanda Gourmet & Área de Descanso',
    category: 'piscina',
    description: 'Varanda coberta com espreguiçadeiras, banco rústico de madeira e acesso à área gourmet.',
  },
  {
    id: 'living_room_1',
    url: '/assets/6c854b59-b3c0-47da-a64e-d64f774be5a6.JPG',
    title: 'Sala de Estar Ampla com Porcelanato',
    category: 'salas',
    description: 'Piso em porcelanato marmorizado, Smart TV, poltronas em fibra natural e janelas em arco.',
  },
  {
    id: 'living_room_2',
    url: '/assets/7cbc942a-5a45-410b-878b-a5cb9a4f3db4.JPG',
    title: 'Ambiente de Estar Acolhedor',
    category: 'salas',
    description: 'Sofás confortáveis, lustre colonial clássico e porta maciça de entrada em arco.',
  },
  {
    id: 'dining_room',
    url: '/assets/a57d47b6-46fc-4719-ae39-5831c81dac20.JPG',
    title: 'Sala de Jantar Completa',
    category: 'salas',
    description: 'Mesa maciça para 6 pessoas, geladeira duplex Inverse Frost-Free e cafeteira.',
  },
  {
    id: 'kitchen_1',
    url: '/assets/48dc6fb1-bb3b-457e-ae54-8190fa71bfd8.JPG',
    title: 'Cozinha Planejada com Eletros',
    category: 'cozinha',
    description: 'Fogão 5 bocas com mesa de vidro, micro-ondas, filtro de barro e armários com louças.',
  },
  {
    id: 'kitchen_2',
    url: '/assets/3cba1f54-e020-4af9-a8f5-960830fe7ece.JPG',
    title: 'Bancada em Granito & Fogão Moderno',
    category: 'cozinha',
    description: 'Pia com cuba inox, torneira dupla, gaveteiros e janela colonial com ótima ventilação.',
  },
  {
    id: 'bedroom_master',
    url: '/assets/deaa0c66-9fa8-4e26-a94f-85e948a83bce.JPG',
    title: 'Suíte Casal com Ar-Condicionado',
    category: 'quartos',
    description: 'Cama box de casal, ar-condicionado Split, ventilador de teto, guarda-roupa e janela colonial.',
  },
  {
    id: 'bedroom_crib',
    url: '/assets/f796f863-9eb2-48c9-bbf5-6787da7ce435.JPG',
    title: 'Quarto Família com Berço de Bebê',
    category: 'quartos',
    description: 'Cama box de casal e berço infantil com grade, ideal para famílias com crianças pequenas.',
  },
  {
    id: 'bedroom_bunk',
    url: '/assets/8643e717-ea7c-4fb3-975c-42da0dd33933.JPG',
    title: 'Quarto com Beliche e Cama Box',
    category: 'quartos',
    description: 'Cama box de casal e beliche de madeira reforçada, com ar-condicionado Split.',
  },
  {
    id: 'bedroom_security',
    url: '/assets/598ea712-0b04-4a59-9843-3e937778a24d.JPG',
    title: 'Quarto com Monitor de Câmeras',
    category: 'quartos',
    description: 'Beliche confortável e tela dedicada com imagens ao vivo das câmeras de segurança.',
  },
  {
    id: 'bedroom_extra',
    url: '/assets/cfe2154b-5eab-4876-b4cd-be7180bb4ae9.JPG',
    title: 'Quarto Arejado com Cama Box e Beliche',
    category: 'quartos',
    description: 'Cama box, beliche de madeira, colchões extras e janelas abertas para a varanda.',
  },
  {
    id: 'mattresses',
    url: '/assets/8d075aa6-6173-4e74-9a78-c74341f9ddb3.JPG',
    title: 'Colchões Avulsos Extras',
    category: 'quartos',
    description: 'Colchões extras disponíveis para acomodar confortavelmente grupos maiores.',
  },
  {
    id: 'hallway',
    url: '/assets/afafe969-3cd7-4478-bda7-3c8f682c1a06.JPG',
    title: 'Corredor Interno com Arcos Coloniais',
    category: 'salas',
    description: 'Circulação ampla entre os dormitórios com portas maciças em arco.',
  },
  {
    id: 'bathroom_1',
    url: '/assets/76718077-e79e-4a32-bf40-a1614f32a707.JPG',
    title: 'Banheiro com Box Blindex & Janela Escotilha',
    category: 'banheiros',
    description: 'Revestimento cerâmico até o teto, box de vidro, pia em granito e janela decorativa.',
  },
  {
    id: 'bathroom_2',
    url: '/assets/13d4b037-a503-4727-a856-3117cdc776c2.JPG',
    title: 'Banheiro Social Completo',
    category: 'banheiros',
    description: 'Ducha com aquecimento elétrico rápido, bidet, box e piso antiderrapante.',
  },
  {
    id: 'bathroom_3',
    url: '/assets/bdfee0f9-83bd-4217-b6f7-56db5ef02996.JPG',
    title: 'Banheiro Amplo com Gabinete',
    category: 'banheiros',
    description: 'Armário de madeira, tampo de granito trabalhado e espelho grande.',
  },
  {
    id: 'facade',
    url: '/assets/8ff22da6-25d9-43e7-850a-d0e52aaab717.JPG',
    title: 'Fachada Segura com Muros Altos',
    category: 'seguranca',
    description: 'Muros altos, acabamento em pedras naturais e portão eletrônico fechado para total privacidade.',
  },
  {
    id: 'garage_gate',
    url: '/assets/871ad0d8-0137-4e6c-894f-ba337862aeb0.JPG',
    title: 'Garagem Fechada com Portão Automatizado',
    category: 'seguranca',
    description: 'Vaga para múltiplos carros sob pergolado com cobertura e portão automático.',
  },
  {
    id: 'garage_walkway',
    url: '/assets/50cfb94b-763f-4f57-8dc0-9b0ad8ebb8d9.JPG',
    title: 'Entrada Coberta & Acesso à Piscina',
    category: 'seguranca',
    description: 'Acesso coberto entre a garagem e a casa com vista protegida para a piscina.',
  },
];

export const houseHighlights = {
  nome: 'Casa das Palmeiras • Praia de Pernambuco',
  brandName: 'Marcelo Guarujá Temporada',
  subtitulo: 'Sua casa de temporada exclusiva no Guarujá com piscina privativa, cascata e LED, a apenas 500m da Praia de Pernambuco para até 20 pessoas.',
  endereco: 'Rua dos Ubás, 200',
  bairro: 'Balneário Praia de Pernambuco',
  cidade: 'Guarujá - SP',
  cep: '11444-140',
  localizacao: 'Rua dos Ubás, 200 • Praia de Pernambuco, Guarujá - SP',
  distanciaPraia: 'A 500 metros a pé da Praia de Pernambuco e Mar Casado (6 a 8 min de caminhada)',
  comercios: 'Próximo a padaria, supermercado, farmácia e Shopping Jequiti',
  capacidade: 'Até 20 pessoas',
  quartos: 3,
  banheiros: 3,
  vagas: 3,
  whatsappNumber: '5513988659092',
  whatsappDisplay: '(13) 98865-9092',
};

export const roomDetails = [
  {
    nome: 'Suíte Master Casal',
    descricao: 'Ampla e aconchegante, ideal para o casal que busca privacidade e conforto absoluto.',
    itens: ['Cama Box Casal', 'Ar-Condicionado Split', 'Ventilador de Teto', 'Guarda-Roupa Embutido', 'Banheiro Privativo'],
    imagem: '/assets/deaa0c66-9fa8-4e26-a94f-85e948a83bce.JPG',
  },
  {
    nome: 'Quarto Família com Berço',
    descricao: 'Pensado para quem viaja com bebês ou crianças de colo, garantindo noites tranquilas.',
    itens: ['Cama Box Casal', 'Berço Infantil com Grade', 'Ar-Condicionado Split', 'Cabideiro & Armário', 'Janela Arejada'],
    imagem: '/assets/f796f863-9eb2-48c9-bbf5-6787da7ce435.JPG',
  },
  {
    nome: 'Quarto Amigos & Crianças',
    descricao: 'Espaço generoso com acomodações versáteis e tela para monitoramento das câmeras externas.',
    itens: ['Cama Box Casal', 'Beliche de Madeira Maciça', 'Colchões Avulsos Extras', 'Ar-Condicionado Split', 'TV Monitor de Segurança'],
    imagem: '/assets/cfe2154b-5eab-4876-b4cd-be7180bb4ae9.JPG',
  },
];

export const amenitiesList = [
  {
    categoria: 'Lazer & Bem-estar',
    itens: [
      { titulo: 'Piscina Privativa com Cascata', desc: 'Com iluminação noturna em LED azul e degraus de acesso' },
      { titulo: 'Deck com Guarda-sol', desc: 'Mesas, cadeiras e espreguiçadeiras confortáveis' },
      { titulo: 'Gradil de Proteção com Vidro', desc: 'Segurança essencial para crianças pequenas e pets' },
      { titulo: 'Varanda Coberta & Gourmet', desc: 'Espaço integrado para churrasco e confraternização' },
    ],
  },
  {
    categoria: 'Conforto & Tecnologia',
    itens: [
      { titulo: '100% Climatizada', desc: 'Ar-condicionado Split em todos os dormitórios' },
      { titulo: 'Wi-Fi Rápido', desc: 'Conexão estável para home-office ou streaming' },
      { titulo: 'Smart TV na Sala', desc: 'Painel completo para assistir filmes e séries' },
      { titulo: 'Salas Integradas', desc: 'Piso nobre em porcelanato e sofás aconchegantes' },
    ],
  },
  {
    categoria: 'Cozinha Completa',
    itens: [
      { titulo: 'Fogão Moderno 5 Bocas', desc: 'Mesa de vidro temperado preto com forno potente' },
      { titulo: 'Refrigerador Frost-Free Duplex', desc: 'Geladeira espaçosa com freezer inferior Inverse' },
      { titulo: 'Micro-ondas & Eletros', desc: 'Cafeteira, liquidificador e processador' },
      { titulo: 'Utensílios & Louças', desc: 'Pratos, copos, talheres e panelas para todo o grupo' },
    ],
  },
  {
    categoria: 'Segurança & Privacidade',
    itens: [
      { titulo: 'Muros Altos & Fechados', desc: 'Total privacidade visual da rua e dos vizinhos' },
      { titulo: 'Portão Eletrônico Automatizado', desc: 'Entrada e saída rápida com controle remoto' },
      { titulo: 'Câmeras Externas com Monitor', desc: 'Acompanhe as câmeras na TV dentro do quarto' },
      { titulo: 'Garagem Coberta', desc: 'Espaço seguro para guardar até 3 veículos' },
    ],
  },
];

