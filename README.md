# Portfólio Profissional — Luiz Benevides

> Desenvolvedor de Software | Bacharelado em Sistemas de Informação (UFMS)  
> Hospedado em: [benevidesluiz.github.io](https://benevidesluiz.github.io/)

Este repositório contém o código-fonte do meu portfólio profissional pessoal, desenvolvido do zero com foco em elegância, performance, acessibilidade (WCAG) e fidelidade às minhas experiências acadêmicas e profissionais.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com marcos (landmarks), meta tags SEO, Open Graph e conformidade de contraste.
- **CSS3 Moderno**: Tema escuro minimalista (grafite neutro / carvão), variáveis de design (tokens), Flexbox, CSS Grid, tipografia fluida e suporte a `prefers-reduced-motion`.
- **JavaScript Puro (Vanilla JS)**: Internacionalização completa (PT-BR / EN) com persistência em `localStorage` e chaveamento automático do currículo.
- **GitHub Pages**: Hospedagem estática automatizada diretamente a partir do branch `main`.

---

## 📁 Estrutura de Arquivos

```text
benevidesluiz.github.io/
├── index.html                           # Página principal (HTML5 semântico)
├── README.md                            # Documentação do repositório
├── css/
│   └── style.css                        # Folha de estilos moderna (Dark Minimalista)
├── js/
│   └── script.js                        # Lógica Vanilla JS e dicionários i18n (PT/EN)
└── assets/
    ├── docs/                            # Currículos profissionais ATS (1 página A4 cada)
    │   ├── Luiz_Benevides_CV_PT.pdf     # Currículo em Português (ATS Friendly)
    │   ├── Luiz_Benevides_CV_EN.pdf     # Resume in English (ATS Friendly)
    │   ├── cv-pt.html                   # Fonte semântica da versão em português
    │   └── cv-en.html                   # Fonte semântica da versão em inglês
    ├── icons/                           # Ícones das tecnologias e Favicon em formato SVG
    │   ├── favicon.svg
    │   ├── java.svg, csharp.svg, javascript.svg, php.svg
    │   ├── mysql.svg, sqlite.svg
    │   ├── git.svg, github.svg, unity.svg, gamemaker.svg, laravel.svg
    │   └── ...
    └── images/
        ├── luiz-benevides.jpg             # Foto oficial de perfil
        └── projects/                      # Previews e capas dos projetos
            ├── player-musica.svg          # MusicPlayer (Java, Swing, JavaFX, yt-dlp)
            ├── clinica-psicologia.svg     # Sistema de Gestão UFMS (Java Desktop • Privado LGPD)
            ├── shadow-keep.svg            # The Shadow Keep (Unity / C#)
            ├── gravenfal.svg              # Gravenfal (Unity / C#)
            ├── not-alone.svg              # Posto 33 / Not Alone (Unity / C# 3D)
            └── super-arkanoid.svg         # Super-Arkanoid (GameMaker / Arcade)
```

---

## 📄 Currículo Profissional (ATS Friendly)

O site disponibiliza dois currículos independentes em formato PDF, ambos otimizados para sistemas de rastreamento de candidatos (ATS) e formatados em **uma única página A4**:

- **Português**: `assets/docs/Luiz_Benevides_CV_PT.pdf` (baixado automaticamente ao navegar em PT)
- **Inglês**: `assets/docs/Luiz_Benevides_CV_EN.pdf` (baixado automaticamente ao navegar em EN)

---

## 🚀 Como Executar Localmente

Como o projeto é 100% estático (sem dependências ou build steps):

1. **Diretamente pelo navegador**:  
   Basta dar um duplo clique no arquivo `index.html`.

2. **Com a extensão Live Server**:  
   Abra a pasta no VS Code, clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

3. **Com Python**:  
   ```bash
   python -m http.server 8000
   ```  
   Em seguida, acesse no navegador: `http://localhost:8000`

---

## 🌐 Publicação no GitHub Pages

```bash
git add .
git commit -m "feat: curriculos profissionais ats em pt e en com uma pagina a4"
git push origin main
```

Após o push, o site estará acessível em:  
👉 **[https://benevidesluiz.github.io/](https://benevidesluiz.github.io/)**

---

## 📬 Contato

- **E-mail**: [luizbenevidesvites@gmail.com](mailto:luizbenevidesvites@gmail.com)
- **GitHub**: [BenevidesLuiz](https://github.com/BenevidesLuiz)
- **LinkedIn**: [Luiz Felipe Quevedo Benevides](https://www.linkedin.com/in/luiz-felipe-quevedo-benevides-a26a342bb/)
- **Localidade**: Corumbá, Mato Grosso do Sul — Brasil (Remoto)
