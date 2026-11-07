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
      skillsCatLearning: "Estudando Atualmente",
      skillAI: "Inteligência Artificial",
      skillsNote: "• Tecnologias com experiência prática documentada ou projetos desenvolvidos.",
      expTag: "Trajetória",
      expTitle: "Experiência Profissional",
      expDesc: "Atuação profissional em desenvolvimento e suporte com responsabilidades documentadas.",
      expPsicoTitle: "Estagiário de Desenvolvimento de Software",
      expPsicoCompany: "Clínica de Psicologia da UFMS",
      expPsicoPeriod: "Março de 2025 – Abril de 2026",
      expPsicoBadge: "Remoto • Corumbá, MS",
      expPsicoDesc: "Desenvolvimento e manutenção da aplicação desktop em Java (Swing) usada na gestão da clínica-escola, com atividades registradas em relatório formal.",
      expPsicoTasksTitle: "Principais Entregas e Resultados:",
      expPsicoTask1: "Restaurei as funções de adicionar, editar e excluir registros, que estavam inoperantes quando assumi o sistema; no fluxo de edição, identifiquei e corrigi o erro na instrução SQL que impedia a atualização dos dados.",
      expPsicoTask2: "Corrigi um bug em que o botão de atualizar recriava os painéis Swing e desfazia o layout; criei uma classe reutilizável de botão personalizado que padronizou tamanho e estilo de todos os botões do sistema.",
      expPsicoTask3: "Implementei o mascaramento de dados sensíveis por perfil: pesquisadores com restrição da LGPD passaram a ver as informações pessoais ocultas na interface.",
      expPsicoTask4: "Melhorei a clareza para o usuário final, substituindo valores técnicos (true/false) por “Sim/Não” nas telas de status.",
      expPsicoTask5: "Implementei exclusão lógica (soft delete) para preservar a integridade do histórico clínico.",
      expPsicoTask6: "Desenvolvi busca de grupos com filtros vinculados ao usuário autenticado e aprimorei autenticação, níveis de acesso e seleção de perfis.",
      expEmbrapaTitle: "Suporte Técnico e Helpdesk",
      expEmbrapaCompany: "Embrapa — Núcleo de Tecnologia da Informação (NTI)",
      expEmbrapaPeriod: "Setembro de 2023 – Novembro de 2023",
      expEmbrapaBadge: "Presencial • Corumbá, MS",
      expEmbrapaDesc: "Apoio ao responsável pela equipe de TI em suporte a usuários, manutenção de equipamentos e infraestrutura.",
      expEmbrapaTasksTitle: "Atividades e Resultados:",
      expEmbrapaTask1: "Ajudei a resolver uma falha causada por atualização do Windows que impedia o login de usuário local: a atualização foi revertida e as novas atualizações adiadas para evitar que o problema voltasse.",
      expEmbrapaTask2: "Apoiei a manutenção de no-breaks (UPS) e de computadores da unidade.",
      expEmbrapaTask3: "Acompanhei o processo de atualização do sistema operacional de um servidor.",
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
      eduSubjectsTitle: "Disciplinas de destaque",
      eduSubDbName: "Banco de Dados",
      eduSubDbDesc: "Modelagem e análise de bancos relacionais, consultas SQL com INNER JOIN, GROUP BY e HAVING, e critérios para criar índices avaliando custo e benefício.",
      eduSubUmlName: "Modelagem de Sistemas (UML)",
      eduSubUmlDesc: "Fase de projeto do software: identificação de classes, classes abstratas, interfaces (contratos) e definição dos métodos antes da implementação.",
      eduSubPooName: "Linguagem de Programação Orientada a Objetos (LPOO)",
      eduSubPooDesc: "Encapsulamento, herança, polimorfismo e abstração aplicados em Java, base usada depois no estágio e nos projetos pessoais.",
      eduSubWebName: "Programação Web",
      eduSubWebDesc: "Consumo de APIs públicas, tratamento dos dados retornados e construção de uma aplicação web a partir deles (em andamento).",
      coursesTitle: "Cursos Complementares",
      courseJavaName: "Java — Programação Orientada a Objetos",
      courseJavaDesc: "Feito em paralelo à disciplina de LPOO, consolidando os fundamentos de Java e orientação a objetos.",
      course2dName: "Desenvolvimento de Jogos 2D",
      course2dDesc: "Base para os projetos de jogos desenvolvidos em Unity, GameMaker e Godot.",
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
      skillsCatLearning: "Currently Learning",
      skillAI: "Artificial Intelligence",
      skillsNote: "• Technologies with verified practical experience or documented implementations.",
      expTag: "Career",
      expTitle: "Work Experience",
      expDesc: "Professional background in software development and IT support with documented contributions.",
      expPsicoTitle: "Software Development Intern",
      expPsicoCompany: "UFMS Psychology Clinic",
      expPsicoPeriod: "March 2025 – April 2026",
      expPsicoBadge: "Remote • Corumbá, MS",
      expPsicoDesc: "Development and maintenance of the Java (Swing) desktop application used to manage the university clinic, with activities documented in a formal report.",
      expPsicoTasksTitle: "Key Deliverables & Results:",
      expPsicoTask1: "Restored the create, edit and delete features, which were broken when I joined the project; in the edit flow, I traced and fixed the faulty SQL statement that prevented records from being updated.",
      expPsicoTask2: "Fixed a bug where the refresh button rebuilt Swing panels and broke the layout; built a reusable custom button class that standardized size and style across every button in the system.",
      expPsicoTask3: "Implemented role-based masking of sensitive data: researchers under LGPD (Brazilian data protection law) restrictions now see personal information hidden in the UI.",
      expPsicoTask4: "Improved clarity for end users by replacing technical values (true/false) with “Yes/No” on status screens.",
      expPsicoTask5: "Implemented logical deletion (soft delete) to preserve the integrity of clinical history.",
      expPsicoTask6: "Built group search with filters tied to the authenticated user and improved authentication, access levels and profile selection.",
      expEmbrapaTitle: "Technical Support & Helpdesk",
      expEmbrapaCompany: "Embrapa — IT Center (NTI)",
      expEmbrapaPeriod: "September 2023 – November 2023",
      expEmbrapaBadge: "On-site • Corumbá, MS",
      expEmbrapaDesc: "Assisted the IT lead with user support, equipment maintenance and infrastructure.",
      expEmbrapaTasksTitle: "Activities & Results:",
      expEmbrapaTask1: "Helped fix an issue caused by a Windows update that blocked local user logins: the update was rolled back and further updates were deferred to prevent the problem from recurring.",
      expEmbrapaTask2: "Supported maintenance of UPS units (no-breaks) and workstations.",
      expEmbrapaTask3: "Observed and assisted with a server operating system upgrade.",
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
      eduSubjectsTitle: "Highlighted courses",
      eduSubDbName: "Databases",
      eduSubDbDesc: "Relational database modeling and analysis, SQL queries with INNER JOIN, GROUP BY and HAVING, and when an index is worth its cost.",
      eduSubUmlName: "Systems Modeling (UML)",
      eduSubUmlDesc: "Software design phase: identifying classes, abstract classes, interfaces (contracts) and method definitions before implementation.",
      eduSubPooName: "Object-Oriented Programming (OOP)",
      eduSubPooDesc: "Encapsulation, inheritance, polymorphism and abstraction in Java — the foundation later applied in my internship and personal projects.",
      eduSubWebName: "Web Programming",
      eduSubWebDesc: "Consuming public APIs, processing the returned data and building a web application on top of it (in progress).",
      coursesTitle: "Additional Courses",
      courseJavaName: "Java — Object-Oriented Programming",
      courseJavaDesc: "Taken alongside the university OOP course to strengthen Java and object-oriented fundamentals.",
      course2dName: "2D Game Development",
      course2dDesc: "Foundation for my game projects built with Unity, GameMaker and Godot.",
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
