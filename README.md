# 🏠 Marcelo Imóveis — Landing Page

Casa de temporada exclusiva com piscina privativa, 3 quartos climatizados, berço para bebê e segurança completa.

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS** (estilização)
- **Lucide React** (ícones)
- Deploy: **Vercel** via GitHub

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push para a branch `main` no GitHub. A Vercel faz deploy automático.

## Estrutura

```
src/
├── components/landing/
│   ├── Navbar.tsx          # Navegação sticky
│   ├── Hero.tsx            # Seção hero com showcase de fotos
│   ├── Gallery.tsx         # Galeria com filtros (21 fotos)
│   ├── LightboxModal.tsx   # Visualizador fullscreen
│   ├── RoomCards.tsx       # Cards dos 3 quartos
│   ├── Amenities.tsx       # Comodidades e infraestrutura
│   ├── PriceSimulator.tsx  # CTA para consulta via WhatsApp
│   ├── FloatingWhatsApp.tsx# Botão flutuante WhatsApp
│   └── Footer.tsx          # Rodapé
├── data/
│   └── houseData.ts        # Dados do imóvel, imagens e amenidades
├── App.tsx                 # Componente raiz
├── main.tsx                # Entry point
└── index.css               # Estilos globais e animações
```
