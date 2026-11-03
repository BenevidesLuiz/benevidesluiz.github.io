/**
 * PORTFÓLIO PROFISSIONAL - LUIZ BENEVIDES
 * JavaScript Puro (Vanilla JS)
 * Recursos: i18n (PT/EN), Menu Mobile Acessível, Scroll Spy, Reveal on Scroll, Copiar E-mail
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
      navHome: "Início",
      navAbout: "Sobre mim",
      navSkills: "Habilidades",
      navExperience: "Experiência",
      navProjects: "Projetos",
      navEducation: "Formação",
      navContact: "Contato",
      heroStatus: "Disponível para oportunidades de estágio e início de carreira",
      heroGreeting: "Olá, me chamo",
      heroRole: "Desenvolvedor de Software | Estudante de Sistemas de Informação",
      heroBio: "Estudante de Sistemas de Informação na UFMS com formação técnica em Informática pelo IFMS. Foco em desenvolvimento back-end, engenharia de software e resolução de problemas estruturados.",
      chipLocation: "Corumbá, MS — Brasil",
      chipModality: "Presencial & Remoto",
      btnViewProjects: "Ver Projetos",
      btnDownloadCV: "Baixar Currículo (PDF)",
      avatarCaption: "Desenvolvedor de Software",
      aboutTag: "Sobre mim",
      aboutTitle: "Trajetória e foco profissional",
      aboutP1: "Sou estudante de Sistemas de Informação na Universidade Federal de Mato Grosso do Sul (UFMS), com formação técnica em Informática pelo Instituto Federal de Mato Grosso do Sul (IFMS).",
      aboutP2: "Tenho grande interesse em desenvolvimento de software, com ênfase na construção de aplicações, programação back-end e resolução de problemas técnicos e de arquitetura. Possuo experiência prática com Java através do desenvolvimento de sistema para a Clínica de Psicologia da UFMS.",
      aboutP3: "Também desenvolvo projetos pessoais e acadêmicos utilizando C#, Unity e outras tecnologias para jogos e aplicações interativas. Tenho perfil dedicado a pesquisar soluções eficientes, aprender novas ferramentas e aprimorar continuamente a qualidade do código produzido.",
      pillar1Title: "Engenharia & Back-End",
      pillar1Desc: "Foco na lógica de negócios, integridade de dados e arquitetura limpa de software.",
      pillar2Title: "Experiência Prática",
      pillar2Desc: "Atuação em sistema desktop Java com refatoração, validações e controle de acesso.",
      pillar3Title: "Jogos & IA",
      pillar3Desc: "Interesse e exploração contínua em mecânicas de gameplay, Unity, C# e Inteligência Artificial.",
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
      expPsicoDesc: "Atuação no desenvolvimento e manutenção contínua de uma aplicação desktop em Java, com relatório formal de atividades comprobatório.",
      expPsicoTasksTitle: "Principais Atividades Realizadas:",
      expPsicoTask1: "Refatoração de componentes de tabelas na interface da aplicação.",
      expPsicoTask2: "Implementação de validações de formulários com mensagens de erro claras para o usuário.",
      expPsicoTask3: "Melhorias nos fluxos de edição e atualização de registros cadastrais.",
      expPsicoTask4: "Implementação de exclusão lógica para preservação e integridade do histórico clínico.",
      expPsicoTask5: "Desenvolvimento de busca de grupos com filtros vinculados dinamicamente ao usuário autenticado.",
      expPsicoTask6: "Aprimoramentos em autenticação, controle de níveis de acesso e seleção de perfis.",
      expEmbrapaTitle: "Suporte Técnico e Helpdesk",
      expEmbrapaCompany: "Embrapa — Núcleo de Tecnologia da Informação (NTI)",
      expEmbrapaPeriod: "Período a confirmar",
      expEmbrapaBadge: "Presencial • Corumbá, MS",
      expEmbrapaDesc: "Atuação em suporte técnico e helpdesk, prestando apoio direto à equipe de TI. Realização de atividades relacionadas à manutenção de equipamentos de informática e infraestrutura de suporte elétrico (no-breaks / UPS).",
      expEmbrapaTasksTitle: "Atividades de Apoio:",
      expEmbrapaTask1: "Atendimento de suporte e helpdesk a usuários e equipe técnica.",
      expEmbrapaTask2: "Apoio na manutenção preventiva e corretiva de equipamentos de informática.",
      expEmbrapaTask3: "Suporte na checagem e manutenção de sistemas de alimentação ininterrupta (no-breaks / UPS).",
      projectsTag: "Portfólio",
      projectsTitle: "Projetos em Destaque",
      projectsDesc: "Projetos práticos, acadêmicos e pessoais desenvolvidos com diferentes tecnologias.",
      projectPsicoTitle: "Sistema de Gestão para Clínica de Psicologia",
      projectPsicoDesc: "Aplicação desktop desenvolvida em Java para gerenciamento de informações clínicas. Inclui controle de registros, validações, autenticação, níveis de acesso e manutenção com exclusão lógica.",
      projectSkTitle: "The Shadow Keep",
      projectSkDesc: "Projeto de desenvolvimento de jogo em Unity e C#, envolvendo programação orientada a objetos, mecânicas de gameplay, combate e conceitos fundamentais de Game Design.",
      projectNaTitle: "Not Alone",
      projectNaDesc: "Projeto de desenvolvimento de jogo 3D em Unity e C#, focado em navegação espacial, iluminação, atmosfera e interação tridimensional.",
      projectPatTitle: "Patrick.exe",
      projectPatDesc: "Projeto acadêmico de jogo 2D com desafios de lógica, resolução de problemas estruturados, controle de estados e física básica bidimensional.",
      projectArkTitle: "Super-Arkanoid",
      projectArkDesc: "Projeto de jogo inspirado no gênero clássico arcade, desenvolvido em GameMaker, trabalhando física de colisões, controle de pontuação e progressão de fases.",
      btnSourceCode: "GitHub",
      btnDemo: "Demonstração",
      btnDetails: "Detalhes",
      btnPendingLink: "Em breve",
      eduTag: "Educação",
      eduTitle: "Formação Acadêmica",
      eduDesc: "Bases sólidas em computação, algoritmos, desenvolvimento e sistemas.",
      eduBsiTitle: "Bacharelado em Sistemas de Informação",
      eduBsiInstitution: "Universidade Federal de Mato Grosso do Sul (UFMS)",
      eduBsiPeriod: "Previsão de conclusão: 2027",
      eduBsiDesc: "Formação superior abrangendo engenharia de software, modelagem de bancos de dados relacionais, estrutura de dados, redes e arquitetura de sistemas.",
      eduTecTitle: "Técnico em Informática",
      eduTecInstitution: "Instituto Federal de Mato Grosso do Sul (IFMS)",
      eduTecPeriod: "2021 – 2023",
      eduTecDesc: "Formação técnica profissionalizante sólida com foco em lógica de programação, fundamentos de hardware, desenvolvimento web e suporte computacional.",
      contactTag: "Comunicação",
      contactTitle: "Entre em Contato",
      contactDesc: "Estou aberto a oportunidades de estágio e posições de entrada em desenvolvimento de software (remoto ou presencial).",
      contactEmailLabel: "E-mail Profissional",
      contactEmailNote: "Clique para copiar ou abrir e-mail",
      contactGithubLabel: "GitHub",
      contactLinkedinLabel: "LinkedIn",
      contactLocationLabel: "Localização",
      contactLocationVal: "Corumbá, Mato Grosso do Sul — Brasil",
      contactFootnote: "Telefone e e-mail direto serão atualizados conforme abertura de processos seletivos.",
      btnCopy: "Copiar",
      btnCopied: "Copiado!",
      footerTechStack: "Construído exclusivamente com HTML5, CSS3 e JavaScript Puro • Hospedado no GitHub Pages",
      footerBackToTop: "Voltar ao topo"
    },
    en: {
      pageTitle: "Luiz Benevides | Software Developer | Information Systems",
      metaDesc: "Professional portfolio of Luiz Benevides. Software Developer focusing on Back-End and Software Engineering. Information Systems undergraduate (UFMS).",
      skipLink: "Skip to main content",
      navHome: "Home",
      navAbout: "About me",
      navSkills: "Skills",
      navExperience: "Experience",
      navProjects: "Projects",
      navEducation: "Education",
      navContact: "Contact",
      heroStatus: "Available for internships and entry-level software opportunities",
      heroGreeting: "Hello, I am",
      heroRole: "Software Developer | Information Systems Student",
      heroBio: "Information Systems student at UFMS with a vocational IT diploma from IFMS. Focused on back-end software engineering, reliable architectures, and structured problem-solving.",
      chipLocation: "Corumbá, MS — Brazil",
      chipModality: "On-site & Remote",
      btnViewProjects: "View Projects",
      btnDownloadCV: "Download Resume (PDF)",
      avatarCaption: "Software Developer",
      aboutTag: "About me",
      aboutTitle: "Background and technical focus",
      aboutP1: "I am an Information Systems student at the Federal University of Mato Grosso do Sul (UFMS), with a vocational technical degree in Information Technology from the Federal Institute of Mato Grosso do Sul (IFMS).",
      aboutP2: "My primary technical interest lies in software engineering, back-end development, and solving architectural challenges. I hold practical experience with Java through the engineering of a desktop management system for the UFMS Psychology Clinic.",
      aboutP3: "I also build personal and academic software projects utilizing C#, Unity, and related technologies for game development and interactive systems. I am dedicated to researching efficient solutions, adopting new engineering tools, and continuously enhancing code maintainability.",
      pillar1Title: "Engineering & Back-End",
      pillar1Desc: "Focus on business logic, relational data integrity, and clean software architecture.",
      pillar2Title: "Practical Experience",
      pillar2Desc: "Hands-on work in a Java desktop system with refactoring, validations, and role-based access control.",
      pillar3Title: "Game Dev & AI",
      pillar3Desc: "Ongoing interest and exploration of gameplay programming, Unity, C#, and Artificial Intelligence.",
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
      expEmbrapaPeriod: "Dates to be confirmed",
      expEmbrapaBadge: "On-site • Corumbá, MS",
      expEmbrapaDesc: "Technical support and helpdesk assistance to the core IT staff, supporting hardware maintenance and uninterruptible power supplies (UPS).",
      expEmbrapaTasksTitle: "Support Responsibilities:",
      expEmbrapaTask1: "Tier-1 user support and incident routing for the IT department.",
      expEmbrapaTask2: "Assistance in preventive and corrective maintenance of computer workstations.",
      expEmbrapaTask3: "Routine support for uninterrupted power supply (UPS / no-break) diagnostics and equipment checks.",
      projectsTag: "Portfolio",
      projectsTitle: "Featured Projects",
      projectsDesc: "Practical, academic, and personal projects engineered with varied technologies.",
      projectPsicoTitle: "Psychology Clinic Management System",
      projectPsicoDesc: "Java desktop application engineered for clinical record and patient management. Features access control, data validation, authentication, and soft-delete record preservation.",
      projectSkTitle: "The Shadow Keep",
      projectSkDesc: "Game development project in Unity and C#, implementing object-oriented programming, gameplay mechanics, combat loops, and Game Design fundamentals.",
      projectNaTitle: "Not Alone",
      projectNaDesc: "3D game development project in Unity and C#, focusing on spatial exploration, dynamic lighting, atmospheric design, and 3D interactions.",
      projectPatTitle: "patrick.exe",
      projectPatDesc: "Academic 2D game project tackling logic challenges, structured problem solving, state management, and 2D collision physics.",
      projectArkTitle: "Super-Arkanoid",
      projectArkDesc: "Arcade-inspired breakout game developed with GameMaker, exploring 2D collision mechanics, score tracking, and level progression.",
      btnSourceCode: "GitHub",
      btnDemo: "Live Demo",
      btnDetails: "Details",
      btnPendingLink: "Coming soon",
      eduTag: "Education",
      eduTitle: "Academic Background",
      eduDesc: "Solid foundations in computing, software engineering, and systems analysis.",
      eduBsiTitle: "Bachelor of Information Systems (B.S.)",
      eduBsiInstitution: "Federal University of Mato Grosso do Sul (UFMS)",
      eduBsiPeriod: "Expected graduation: 2027",
      eduBsiDesc: "Higher education covering software engineering, relational database design, data structures, computer networks, and system architecture.",
      eduTecTitle: "Associate Degree in Information Technology",
      eduTecInstitution: "Federal Institute of Mato Grosso do Sul (IFMS)",
      eduTecPeriod: "2021 – 2023",
      eduTecDesc: "Rigorous technical training with emphasis on programming logic, hardware fundamentals, web technologies, and systems maintenance.",
      contactTag: "Get In Touch",
      contactTitle: "Contact Information",
      contactDesc: "Available for internships and entry-level positions in software development (remote or on-site).",
      contactEmailLabel: "Professional Email",
      contactEmailNote: "Click to copy or open your mail client",
      contactGithubLabel: "GitHub",
      contactLinkedinLabel: "LinkedIn",
      contactLocationLabel: "Location",
      contactLocationVal: "Corumbá, Mato Grosso do Sul — Brazil",
      contactFootnote: "Direct phone number and primary email will be provided during formal recruitment stages.",
      btnCopy: "Copy",
      btnCopied: "Copied!",
      footerTechStack: "Built purely with HTML5, CSS3 & Vanilla JavaScript • Hosted on GitHub Pages",
      footerBackToTop: "Back to top"
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

    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    // Atualiza title e meta description
    document.title = translations[lang].pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", translations[lang].metaDesc);
    }

    // Atualiza todos os elementos marcados com data-i18n
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Atualiza botões seletores no header
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

  // Inicializa botões de idioma
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

    // Aplica o idioma inicial
    applyLanguage(currentLanguage);
  }

  /* ==========================================================================
     3. Menu Mobile Acessível (Com Toggle & Trap / Escape)
     ========================================================================== */
  function initMobileMenu() {
    const toggleBtn = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!toggleBtn || !navMenu) return;

    function openMenu() {
      toggleBtn.setAttribute("aria-expanded", "true");
      navMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      toggleBtn.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
      document.body.style.overflow = "";
    }

    toggleBtn.addEventListener("click", () => {
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fecha ao clicar em qualquer link de navegação
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Fecha ao clicar fora do menu
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("open") &&
        !navMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ==========================================================================
     4. Scroll Spy (Destaque do Item Ativo no Menu)
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
  }

  /* ==========================================================================
     5. Efeito Suave de Revelação ao Rolar (Scroll Reveal)
     ========================================================================== */
  function initScrollReveal() {
    // Respeita preferência do usuário por movimento reduzido
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ==========================================================================
     6. Copiar E-mail para a Área de Transferência
     ========================================================================== */
  function initCopyEmail() {
    const copyBtn = document.getElementById("copy-email-btn");
    const emailTarget = document.getElementById("contact-email-text");

    if (!copyBtn || !emailTarget) return;

    copyBtn.addEventListener("click", () => {
      const email = emailTarget.textContent.trim();
      if (!email) return;

      navigator.clipboard
        .writeText(email)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = translations[currentLanguage].btnCopied;
          copyBtn.classList.add("btn-copied");

          setTimeout(() => {
            copyBtn.textContent = translations[currentLanguage].btnCopy;
            copyBtn.classList.remove("btn-copied");
          }, 2000);
        })
        .catch(() => {
          // Fallback silencioso caso clipboard seja bloqueado
          window.location.href = `mailto:${email}`;
        });
    });
  }

  /* ==========================================================================
     7. Inicialização no Carregamento do DOM
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initCopyEmail();
  });
})();
