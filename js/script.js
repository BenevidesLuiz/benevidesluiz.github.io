/**
 * PORTFÓLIO PROFISSIONAL - LUIZ BENEVIDES
 * JavaScript Puro (Vanilla JS)
 * Recursos: i18n (PT/EN), Chaveamento Dinâmico de Currículo (PDF), Persistência no LocalStorage
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. Dicionário de Internacionalização (i18n: Português & Inglês)
     Fiel e rigoroso aos dados fornecidos. Não altera responsabilidades técnicas.
     ========================================================================== */
  const translations = {
    pt: {
      pageTitle: "Luiz Benevides | Desenvolvedor de Software | Sistemas de Informação",
      metaDesc: "Portfólio profissional de Luiz Benevides. Desenvolvedor de Software com preferência em Back-End e Engenharia de Software. Estudante de Sistemas de Informação (UFMS).",
      skipLink: "Pular para o conteúdo principal",
      heroGreeting: "Olá, me chamo",
      heroRole: "Desenvolvedor de Software | Estudante de Sistemas de Informação",
      heroBio: "Estudante de Sistemas de Informação na UFMS com formação técnica em Informática pelo IFMS. Foco em desenvolvimento back-end, engenharia de software e resolução de problemas estruturados.",
      chipLocation: "Corumbá, MS — Brasil",
      chipModality: "Remoto",
      btnViewProjects: "Ver Projetos",
      btnCV: "Currículo",
      avatarCaption: "Desenvolvedor de Software",
      aboutTag: "Sobre mim",
      aboutTitle: "Trajetória e foco profissional",
      aboutP1: "Sou estudante de Sistemas de Informação na Universidade Federal de Mato Grosso do Sul (UFMS), com formação técnica em Informática pelo Instituto Federal de Mato Grosso do Sul (IFMS).",
      aboutP2: "Tenho grande interesse em desenvolvimento de software, com ênfase na construção de aplicações, programação back-end e resolução de problemas técnicos e de arquitetura. Possuo experiência prática com Java através do desenvolvimento de sistema para a Clínica de Psicologia da UFMS.",
      aboutP3: "Também desenvolvo projetos pessoais e em colaboração utilizando Java, C#, Unity e outras tecnologias. Dedico-me a pesquisar soluções eficientes, aprender novas ferramentas e aprimorar continuamente a qualidade do código produzido.",
      pillar1Title: "Engenharia & Back-End",
      pillar1Desc: "Foco na lógica de negócios, integridade de dados e arquitetura de software.",
      pillar2Title: "Experiência Prática",
      pillar2Desc: "Atuação em sistema desktop Java com refatoração, validações e controle de acesso.",
      pillar3Title: "Jogos & IA",
      pillar3Desc: "Exploração contínua em mecânicas de gameplay, Unity, C# e Inteligência Artificial.",
      skillsTag: "Conhecimentos",
      skillsTitle: "Habilidades Técnicas",
      skillsDesc: "Apresentação honesta das tecnologias com as quais possuo estudo e experiência prática, sem métricas arbitrárias.",
      skillsCatLanguages: "Linguagens",
      skillsCatDatabases: "Bancos de Dados",
      skillsCatTools: "Ferramentas & Versionamento",
      skillsCatGameDev: "Desenvolvimento de Jogos",
      skillsCatAdditional: "Tecnologias Adicionais",
      skillsNote: "• Tecnologias com experiência prática documentada ou projetos desenvolvidos.",
      expTag: "Trajetória",
      expTitle: "Experiência Profissional",
      expDesc: "Atuação profissional em desenvolvimento e suporte com responsabilidades documentadas.",
      expPsicoTitle: "Estagiário de Desenvolvimento de Software",
      expPsicoCompany: "Clínica de Psicologia da UFMS",
      expPsicoPeriod: "Março de 2025 – Abril de 2026",
      expPsicoBadge: "Remoto • Corumbá, MS",
      expPsicoDesc: "Atuação no desenvolvimento e manutenção de aplicação desktop em Java, com relatório formal de atividades comprobatório.",
      expPsicoTasksTitle: "Principais Atividades Realizadas:",
      expPsicoTask1: "Refatoração de componentes de tabelas na interface da aplicação.",
      expPsicoTask2: "Implementação de validações de formulários com mensagens de erro claras para o usuário.",
      expPsicoTask3: "Melhorias nos fluxos de edição e atualização de registros cadastrais.",
      expPsicoTask4: "Implementação de exclusão lógica para preservação e integridade do histórico clínico.",
      expPsicoTask5: "Desenvolvimento de busca de grupos com filtros vinculados dinamicamente ao usuário autenticado.",
      expPsicoTask6: "Aprimoramentos em autenticação, controle de níveis de acesso e seleção de perfis.",
      expEmbrapaTitle: "Suporte Técnico e Helpdesk",
      expEmbrapaCompany: "Embrapa — Núcleo de Tecnologia da Informação (NTI)",
      expEmbrapaPeriod: "Setembro de 2023 – Novembro de 2023",
      expEmbrapaBadge: "Presencial • Corumbá, MS",
      expEmbrapaDesc: "Atuação em suporte técnico e helpdesk, prestando apoio à equipe de TI. Atividades relacionadas à manutenção de equipamentos de informática e infraestrutura de suporte elétrico (no-breaks / UPS).",
      expEmbrapaTasksTitle: "Atividades de Apoio:",
      expEmbrapaTask1: "Atendimento de suporte e helpdesk a usuários e equipe técnica.",
      expEmbrapaTask2: "Apoio na manutenção de equipamentos de informática.",
      expEmbrapaTask3: "Suporte na manutenção e checagem de sistemas de alimentação ininterrupta (no-breaks / UPS).",
      projectsTag: "Portfólio",
      projectsTitle: "Projetos em Destaque",
      projectsDesc: "Projetos práticos, colaborativos e acadêmicos desenvolvidos com diferentes tecnologias.",
      projectMusicTitle: "MusicPlayer (Player de Música)",
      projectMusicDesc: "Player de áudio e vídeo desktop moderno desenvolvido em Java (Swing + JavaFX). Suporta reprodução de arquivos .mp3 e .mp4, visualização dinâmica e integração de download e conversão com yt-dlp e ffmpeg. Desenvolvido em colaboração com Kaio Marques.",
      projectPsicoTitle: "Sistema de Gestão para Clínica de Psicologia",
      projectPsicoDesc: "Aplicação desktop desenvolvida em Java para gerenciamento de prontuários e consultas de clínica-escola. Inclui controle de registros, validações, autenticação, níveis de acesso e manutenção com exclusão lógica.",
      projectPsicoPrivate: "Repositório privado por sigilo de saúde e conformidade com a LGPD (UFMS)",
      projectSkTitle: "The Shadow Keep",
      projectSkDesc: "Projeto de desenvolvimento de jogo em Unity e C#, envolvendo programação orientada a objetos, mecânicas de gameplay, combate e conceitos fundamentais de Game Design.",
      projectGravenfalTitle: "Gravenfal",
      projectGravenfalDesc: "Projeto de desenvolvimento de jogo em Unity e C#, trabalhando arquitetura limpa de componentes, movimentação e lógica orientada a objetos.",
      projectNaTitle: "Posto 33 (Not Alone)",
      projectNaDesc: "Projeto de desenvolvimento de jogo 3D em Unity e C#, com ambientação de suspense/horror, exploração espacial, iluminação dinâmica e interação tridimensional.",
      projectArkTitle: "Super-Arkanoid",
      projectArkDesc: "Projeto de jogo inspirado no gênero clássico arcade, desenvolvido em GameMaker, trabalhando física de colisões, controle de pontuação e progressão de fases.",
      btnSourceCode: "GitHub",
      eduTag: "Educação",
      eduTitle: "Formação Acadêmica",
      eduBsiTitle: "Bacharelado em Sistemas de Informação",
      eduBsiInstitution: "Universidade Federal de Mato Grosso do Sul (UFMS)",
      eduBsiPeriod: "Previsão de conclusão: 2027",
      eduBsiDesc: "Formação superior abrangendo engenharia de software, modelagem de bancos de dados relacionais, estrutura de dados, redes e arquitetura de sistemas.",
      eduTecTitle: "Técnico em Informática",
      eduTecInstitution: "Instituto Federal de Mato Grosso do Sul (IFMS)",
      eduTecPeriod: "2021 – 2023",
      eduTecDesc: "Formação técnica profissionalizante com foco em lógica de programação, fundamentos de hardware, desenvolvimento web e suporte computacional.",
      contactTag: "Contato",
      contactTitle: "Vamos Conversar",
      contactDesc: "Aberto a oportunidades de estágio e início de carreira na área de tecnologia (remoto).",
      footerCopy: "© 2026 Luiz Benevides. Desenvolvido com HTML5, CSS3 e JavaScript puro."
    },
    en: {
      pageTitle: "Luiz Benevides | Software Developer | Information Systems",
      metaDesc: "Professional portfolio of Luiz Benevides. Software Developer focusing on Back-End and Software Engineering. Information Systems undergraduate (UFMS).",
      skipLink: "Skip to main content",
      heroGreeting: "Hello, I am",
      heroRole: "Software Developer | Information Systems Student",
      heroBio: "Information Systems student at UFMS with a vocational IT diploma from IFMS. Focused on back-end software engineering, reliable architectures, and structured problem-solving.",
      chipLocation: "Corumbá, MS — Brazil",
      chipModality: "Remote",
      btnViewProjects: "View Projects",
      btnCV: "Resume",
      avatarCaption: "Software Developer",
      aboutTag: "About me",
      aboutTitle: "Background and technical focus",
      aboutP1: "I am an Information Systems student at the Federal University of Mato Grosso do Sul (UFMS), with a vocational technical degree in Information Technology from the Federal Institute of Mato Grosso do Sul (IFMS).",
      aboutP2: "My primary technical interest lies in software engineering, back-end development, and solving architectural challenges. I hold practical experience with Java through the engineering of a desktop management system for the UFMS Psychology Clinic.",
      aboutP3: "I also build personal and collaborative software projects utilizing Java, C#, Unity, and related technologies. I am dedicated to researching efficient solutions, adopting new engineering tools, and continuously enhancing code maintainability.",
      pillar1Title: "Engineering & Back-End",
      pillar1Desc: "Focus on business logic, relational data integrity, and clean software architecture.",
      pillar2Title: "Practical Experience",
      pillar2Desc: "Hands-on work in a Java desktop system with refactoring, validations, and role-based access control.",
      pillar3Title: "Game Dev & AI",
      pillar3Desc: "Ongoing exploration of gameplay programming, Unity, C#, and Artificial Intelligence.",
      skillsTag: "Knowledge",
      skillsTitle: "Technical Skills",
      skillsDesc: "Honest overview of technologies with which I have studied and gathered practical project experience, free of arbitrary percentages.",
      skillsCatLanguages: "Languages",
      skillsCatDatabases: "Databases",
      skillsCatTools: "Tools & Version Control",
      skillsCatGameDev: "Game Development",
      skillsCatAdditional: "Additional Technologies",
      skillsNote: "• Technologies with verified practical experience or documented implementations.",
      expTag: "Career",
      expTitle: "Work Experience",
      expDesc: "Professional background in software development and IT support with documented contributions.",
      expPsicoTitle: "Software Development Intern",
      expPsicoCompany: "UFMS Psychology Clinic",
      expPsicoPeriod: "March 2025 – April 2026",
      expPsicoBadge: "Remote • Corumbá, MS",
      expPsicoDesc: "Development and continuous maintenance of a Java desktop application, formally documented by institutional signed activity reports.",
      expPsicoTasksTitle: "Key Technical Contributions:",
      expPsicoTask1: "Refactored UI table components for improved performance and data rendering.",
      expPsicoTask2: "Implemented strict form validation logic and user-friendly error handling.",
      expPsicoTask3: "Optimized record editing and update workflows across multiple clinical forms.",
      expPsicoTask4: "Implemented logical deletion (soft delete) to ensure clinical history auditability and data preservation.",
      expPsicoTask5: "Engineered group search functionality with dynamic filtering restricted to authenticated users.",
      expPsicoTask6: "Delivered security improvements in user authentication, permission levels, and profile selection.",
      expEmbrapaTitle: "Technical Support & Helpdesk",
      expEmbrapaCompany: "Embrapa — IT Center (NTI)",
      expEmbrapaPeriod: "September 2023 – November 2023",
      expEmbrapaBadge: "On-site • Corumbá, MS",
      expEmbrapaDesc: "Technical support and helpdesk assistance to the core IT staff, supporting hardware maintenance and uninterruptible power supplies (UPS).",
      expEmbrapaTasksTitle: "Support Responsibilities:",
      expEmbrapaTask1: "Tier-1 user support and incident routing for the IT department.",
      expEmbrapaTask2: "Assistance in preventive and corrective maintenance of computer workstations.",
      expEmbrapaTask3: "Routine support for uninterrupted power supply (UPS / no-break) diagnostics and equipment checks.",
      projectsTag: "Portfolio",
      projectsTitle: "Featured Projects",
      projectsDesc: "Practical, collaborative, and academic projects engineered with varied technologies.",
      projectMusicTitle: "MusicPlayer (Media Player)",
      projectMusicDesc: "Modern desktop audio and video player engineered in Java (Swing + JavaFX). Supports .mp3 and .mp4 playback, dynamic artwork rendering, and external media download and conversion via yt-dlp and ffmpeg. Developed in collaboration with Kaio Marques.",
      projectPsicoTitle: "Psychology Clinic Management System",
      projectPsicoDesc: "Java desktop application engineered for clinical record and patient management. Features access control, data validation, authentication, and soft-delete record preservation.",
      projectPsicoPrivate: "Private institutional repository for healthcare data privacy & LGPD compliance (UFMS)",
      projectSkTitle: "The Shadow Keep",
      projectSkDesc: "Game development project in Unity and C#, implementing object-oriented programming, gameplay mechanics, combat loops, and Game Design fundamentals.",
      projectGravenfalTitle: "Gravenfal",
      projectGravenfalDesc: "Game development project in Unity and C#, focusing on clean component architecture, player kinematics, and OOP logic.",
      projectNaTitle: "Posto 33 (Not Alone)",
      projectNaDesc: "3D suspense/horror game project in Unity and C#, exploring spatial navigation, dynamic lighting, atmospheric sound, and 3D interactions.",
      projectArkTitle: "Super-Arkanoid",
      projectArkDesc: "Arcade-inspired breakout game developed with GameMaker, exploring 2D collision mechanics, score tracking, and level progression.",
      btnSourceCode: "GitHub",
      eduTag: "Education",
      eduTitle: "Academic Background",
      eduBsiTitle: "Bachelor of Science in Information Systems (B.S.)",
      eduBsiInstitution: "Federal University of Mato Grosso do Sul (UFMS)",
      eduBsiPeriod: "Expected graduation: 2027",
      eduBsiDesc: "Higher education covering software engineering, relational database design, data structures, computer networks, and system architecture.",
      eduTecTitle: "Associate Degree in Information Technology",
      eduTecInstitution: "Federal Institute of Mato Grosso do Sul (IFMS)",
      eduTecPeriod: "2021 – 2023",
      eduTecDesc: "Rigorous technical training with emphasis on programming logic, hardware fundamentals, web technologies, and systems maintenance.",
      contactTag: "Contact",
      contactTitle: "Get In Touch",
      contactDesc: "Available for internships and entry-level positions in software development (remote).",
      footerCopy: "© 2026 Luiz Benevides. Built with HTML5, CSS3 and Vanilla JavaScript."
    }
  };

  /* ==========================================================================
     2. Gerenciador de Idioma (i18n Manager)
     ========================================================================== */
  let currentLanguage = localStorage.getItem("lb_portfolio_lang") || "pt";

  function applyLanguage(lang) {
    if (!translations[lang]) {
      lang = "pt";
    }
    currentLanguage = lang;
    localStorage.setItem("lb_portfolio_lang", lang);

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = translations[lang].pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", translations[lang].metaDesc);
    }

    // Atualiza todos os textos com data-i18n
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Atualização dinâmica do botão de Currículo conforme o idioma ativo
    const cvBtn = document.getElementById("download-cv-btn");
    if (cvBtn) {
      if (lang === "en") {
        cvBtn.setAttribute("href", "assets/docs/Luiz_Benevides_CV_EN.pdf");
        cvBtn.setAttribute("download", "Luiz_Benevides_CV_EN.pdf");
        cvBtn.setAttribute("aria-label", "Open and download Resume in PDF (English)");
      } else {
        cvBtn.setAttribute("href", "assets/docs/Luiz_Benevides_CV_PT.pdf");
        cvBtn.setAttribute("download", "Luiz_Benevides_CV_PT.pdf");
        cvBtn.setAttribute("aria-label", "Abrir e baixar Currículo em PDF (Português)");
      }
    }

    // Atualiza classes ativas dos botões de idioma
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });
  }

  function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        if (selectedLang !== currentLanguage) {
          applyLanguage(selectedLang);
        }
      });
    });

    applyLanguage(currentLanguage);
  }

  /* ==========================================================================
     3. Inicialização no Carregamento do DOM
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
  });
})();
