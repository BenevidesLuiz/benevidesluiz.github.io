# Portfólio Profissional — Luiz Benevides

> Desenvolvedor de Software | Bacharelado em Sistemas de Informação (UFMS)  
> Hospedado em: [benevidesluiz.github.io](https://benevidesluiz.github.io/)

Este repositório contém o código-fonte do meu portfólio profissional pessoal, desenvolvido do zero com foco em elegância, performance, acessibilidade (WCAG) e fidelidade às minhas experiências acadêmicas e profissionais.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com marcos (landmarks), meta tags SEO, Open Graph e conformidade de contraste.
- **CSS3 Moderno**: Tema escuro minimalista (azul-marinho / grafite), variáveis de design (tokens), Flexbox, CSS Grid, tipografia fluida e suporte a `prefers-reduced-motion`.
- **JavaScript Puro (Vanilla JS)**: Internacionalização completa (PT-BR / EN) com persistência em `localStorage`, navegação suave (Scroll Spy), revelação ao rolar (IntersectionObserver) e menu responsivo com gestão de foco.
- **GitHub Pages**: Hospedagem estática automatizada diretamente a partir do branch `main`.

---

## 📁 Estrutura de Arquivos

```text
benevidesluiz.github.io/
├── index.html                   # Página principal (HTML5 semântico)
├── README.md                    # Documentação do repositório
├── css/
│   └── style.css                # Folha de estilos completa e responsiva
├── js/
│   └── script.js                # Lógica Vanilla JS e dicionários i18n
└── assets/
    ├── docs/                    # Documentos (ex: curriculo-luiz-benevides.pdf)
    │   └── README.md
    ├── icons/                   # Ícones e Favicon em formato SVG
    │   ├── favicon.svg
    │   ├── github.svg
    │   ├── linkedin.svg
    │   ├── mail.svg
    │   └── ...
    └── images/                  # Imagens e capas
        ├── avatar-placeholder.svg
        └── projects/            # Previews ilustrativos e capturas de tela
            ├── clinica-psicologia.svg
            ├── shadow-keep.svg
            ├── not-alone.svg
            ├── patrick-exe.svg
            └── super-arkanoid.svg
```

---

## 🚀 Como Executar Localmente

Como o projeto é 100% estático (sem dependências ou build steps), você pode visualizá-lo de qualquer uma das seguintes formas:

1. **Diretamente pelo navegador**:  
   Basta dar um duplo clique no arquivo `index.html`.

2. **Com a extensão Live Server (VS Code / Cursor / IDE)**:  
   Abra a pasta no editor, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

3. **Com Python**:  
   ```bash
   python -m http.server 8000
   ```  
   Em seguida, acesse no navegador: `http://localhost:8000`

---

## 🌐 Publicação no GitHub Pages

O GitHub Pages publica automaticamente o conteúdo do branch `main`. Para enviar as alterações:

```bash
git add .
git commit -m "feat: implementacao completa do portfolio profissional"
git push origin main
```

Após o push, o site estará acessível em:  
👉 **[https://benevidesluiz.github.io/](https://benevidesluiz.github.io/)**

---

## 📬 Contato

- **GitHub**: [BenevidesLuiz](https://github.com/BenevidesLuiz)
- **LinkedIn**: [Luiz Felipe Quevedo Benevides](https://www.linkedin.com/in/luiz-felipe-quevedo-benevides-a26a342bb/)
- **Localidade**: Corumbá, Mato Grosso do Sul — Brasil
