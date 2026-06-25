# Instituto Meimei — Site Institucional

Site moderno do Instituto Meimei, desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    layout/     # Header, Footer
    sections/   # Hero, Stats, Projects, etc.
    ui/         # Componentes reutilizáveis
  data/         # Conteúdo e configurações
  hooks/        # useReducedMotion, useInView
  types/        # Tipos TypeScript
```

## Personalização

Edite `src/data/content.ts` para atualizar textos, estatísticas, projetos, notícias e links.

Substitua as imagens de placeholder (Unsplash) por fotos reais do instituto em `public/` ou URLs próprias.

## Acessibilidade e performance

- WCAG AA: skip link, landmarks, foco visível, `aria-*`, contraste
- `loading="lazy"` em imagens abaixo da fold
- `prefers-reduced-motion` respeitado nas animações
- Code splitting de Framer Motion
