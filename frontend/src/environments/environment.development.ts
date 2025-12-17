import { Project, ProjectSchema } from "../app/shared/models/project";

export const environment = {
  PROJECTS_EN: ProjectSchema.array().parse([
    {
      title: "MINE INTO THE DEEP (MID)",
      goal:
        "Reproduced the game of a coding " +
        "competition from the previous year. " +
        "The purpose was to provide my team " +
        "with training material. The 24H is a " +
        "challenge that lasts 24 hours :) which " +
        "has two steps: first, an AI battle on " +
        "a game. Second, a web design test. " +
        "Our team won silver on web design!",
      techs: [
        "C# backend",
        "Relies on ASP.NET for web design",
        "Used Ngrok for local games",
        "MVC "
      ],
      note:
        "I designed the game in a week while " +
        "studying. Therefore, be gentle: it was made to " +
        "train with my teammates.",
      video: "videos/mid.mp4",
      smallAnimation: "<i class='pi pi-spin pi-cog'></i>"
    },
    {
      title: "ACCOUNT MANAGER",
      goal:
        "This project was made to ease " +
        "the tracking of mine and my girlfriend's " +
        "transactions. Like Excel, it lists " +
        "transactions, adds categories, gives " +
        "per-category details and monthly " +
        "summaries.",
      techs: [
        "PHP backend",
        "HTML CSS JS frontend",
        "Monolithic and MVC",
        "Uses blade to serve HTML",
        "Docker for deployment"
      ],
      note:
        "Demo available. Use (id, pwd)=(test, " +
        "test). It's in French and the forgotten " +
        "password button is only for style.",
      link: "https://accounts-demo.floalz.fr",
      image: "images/accounts.png",
      smallAnimation: "<i class='pi pi-euro'></i>"
    },
    {
      title: "WATERMARKING TOOL",
      goal:
        "Intended for my mother to watermark some " +
        "pictures for fun. It gave me the chance to try Angular " +
        "and a new type of more modern and faster design! ",
      techs: [
        "FastAPI (Python) backend",
        "Angular frontend",
        "Docker for deployment",
        "MVC for the backend",
        "Feature-based frontend"
      ],
      note:
        "It was my first try at a little bit more professional " +
        "designs. The watermarking is a way to hide an " +
        "image under another.",
      link: "https://img.floalz.fr",
      image: "images/watermark.png",
    },
    {
      title: "FLAPPY BIRD AI",
      goal:
        "Fun! Recreated the flappy bird game " +
        "with squares. Two versions: the first to try and the second " +
        "for easier AI integration. I trained a " +
        "Q-Learning model to play on it. After a week, " +
        "the AI average score was 50. Q-Learning wasn't " +
        "enough to go further, maybe with more " +
        "training time it could still improve.",
      techs: [
        "Mostly Python",
        "Q-Learning for AI",
        "Tkinter for the window",
        "MVC"
      ],
      note:
        "It is the AI which is playing in the video!",
      video: "videos/flappy-bird.mp4",
    },
    {
      title: "TETRIS",
      goal:
        "School project: guided Tetris. I trained " +
        "an AI (like Flappy bird). I tried Q-Learning at " +
        "first, but the results were not great. Then " +
        "Q-Networks, Dueling Q-Network, Double " +
        "Q-Network. Some progress was made, but still a bit weak. " +
        "Combined (D2QN) but no real gain. My " +
        "inexperience and lack of computing power " +
        "limited the AI. However, Tetris matched the " +
        "original and I added some small extras: with multiplayer, " +
        "ghost pieces, " +
        "and keyboard controls (not included in the school's project, "+
        "though it is in the original game).",
      techs: [
        "Java for frontend and backend",
        "Monolithic and MVC",
        "Used DL4J for AI",
        "Ngrok, WebSocket for local play"
      ],
      note:
        "This time for the demonstration, " +
        "I played since the AI did not perform too well.",
      video: "videos/tetris.mp4",
      smallAnimation: "<i class='pi pi-spin pi-th-large'></i>"
    },
    {
      title: "SPEECH-TO-TEXT (STT)",
      goal:
        "First week of my Cechas internship: " +
        "I was tasked to use Kyutai's STT model and " +
        "build a transcription API. After a week, the backend " +
        "was ready, frontend not fully completed. The project " +
        "was dropped when Kyutai released their " +
        "Unmute product, which was the same as I had done but " +
        "including the TTS (Text-to-speech) and production ready.",
      techs: [
        "FastAPI (Python) backend",
        "Tkinter demo frontend",
        "Kyutai's STT model",
        "HuggingFace's transformers",
        "Pydantic for validation",
      ],
      note:
        "The average response time with GPU on Google Colab was 4 seconds.",
      image: "images/stt.png",
      smallAnimation: "<i class='pi pi-microphone'></i>"
    },
    {
      title: "LLM HOSTING",
      goal:
        "Second Cechas internship project. " +
        "Enables its users to host any LLM (Large Language " +
        "Model) on a GPU cluster (Kubernetes). " +
        "It aimed at privatizing data access and cutting OpenAI API " +
        "costs. Includes LoRA finetuning and " +
        "structured output features.",
      techs: [
        "FastAPI for API layer",
        "Transformers for model and tokenizer",
        "Datasets to load training material",
        "LangChain to connect to vLLM API",
        "LangGraph for structured output",
        "Redis to store the API state",
        "vLLM to deploy LLM server",
        "LoRA for finetuning",
        "Docker for the APIs containers",
        "Kubernetes for deployment and orchestrating",
        "MVC architecture"
      ],
      note: "This project requires a significant amount of computing power, which is why no public demonstration is available. Furthermore, there is no dedicated frontend, as it is mostly backend. Nevertheless, it provided accurate results with response times proportional to the length of the answer. For answers of around 100 tokens, the latency was under 1 second with 10 simultaneous users. With additional time, I could have implemented streaming outputs for real-time answers, similar to current LLM designs.",
    },
    {
      title: "PUBLISHER V2",
      goal:
        "Third project at Cechas. Tool for " +
        "publishing on 70+ Facebook pages weekly. " +
        "Supports organic posts/reels, downloads " +
        "CSV data, has ad features, adset " +
        "duplication, usage history. " +
        "Touched many Meta APIs, from posting " +
        "to ads.",
      techs: [
        "FastAPI backend",
        "Alembic for migrations",
        "SQLAlchemy for ORM",
        "Pydantic for validation",
        "Angular frontend",
        "Angular Material UI",
        "Docker for deployment",
        "Docker Compose orchestration",
        "Nginx for serving",
        "Based on a clean + DDD architecture",
        "Uses repository pattern"
      ],
      note:
        "The focus was on rapid and functional features rather than UI.",
      link: "https://publisher.floalz.fr",
      image: "images/publisher.png",
      smallAnimation: "<i class='pi pi-facebook'></i>"
    },
  ]) as Project[],

  PROJECTS_FR: ProjectSchema.array().parse([
    {
      title: "MINE INTO THE DEEP (MID)",
      goal:
        "Reproduction du jeu d'un concours de programmation " +
        "de l'année précédente. " +
        "L'objectif était de fournir à mon équipe " +
        "un support d'entraînement. \" Les 24H\" est un " +
        "défi qui dure 24 heures :) et qui " +
        "se déroule en deux étapes : d'abord une bataille d'IA sur " +
        "un jeu, ensuite un test de web design. " +
        "Notre équipe a obtenu une médaille d'argent en web design !",
      techs: [
        "Backend en C#",
        "S'appuie sur ASP.NET pour le web design",
        "Utilisation de Ngrok pour les parties en local",
        "MVC "
      ],
      note:
        "Le jeu a été conçu en une semaine et avait " +
        "pour but de nous entraîner entre coéquipiers.",
      video: "videos/mid.mp4",
      smallAnimation: "<i class='pi pi-spin pi-cog'></i>"
    },
    {
      title: "GESTIONNAIRE DE COMPTE",
      goal:
        "Ce projet a été réalisé pour faciliter " +
        "le suivi de mes transactions et de celles de ma petite amie. " +
        "Comme Excel, il liste " +
        "les transactions, ajoute des catégories, fournit " +
        "des détails par catégorie et des " +
        "récapitulatifs mensuels.",
      techs: [
        "Backend en PHP",
        "Frontend HTML CSS JS",
        "Architecture monolithique et MVC",
        "Utilise Blade pour servir le HTML",
        "Docker pour le déploiement"
      ],
      note:
        "Démo disponible. Utilisez (id, pwd) = (test, " +
        "test). L'interface est en français et le bouton " +
        "mot de passe oublié est purement décoratif.",
      link: "https://accounts-demo.floalz.fr",
      image: "images/accounts.png",
      smallAnimation: "<i class='pi pi-euro'></i>"
    },
    {
      title: "WATERMARKING TOOL",
      goal:
        "Pensé pour ma mère afin de mettre des watermarks sur " +
        "des photos pour le plaisir. Cela m'a donné l'occasion d'essayer Angular " +
        "et un type de design plus moderne et plus rapide ! ",
      techs: [
        "Backend FastAPI (Python)",
        "Frontend Angular",
        "Docker pour le déploiement",
        "MVC pour le backend",
        "Frontend organisé par fonctionnalités"
      ],
      note:
        "C'était ma première tentative vers des designs un peu plus " +
        "professionnels. Le watermarking est une manière de cacher une " +
        "image sous une autre.",
      link: "https://img.floalz.fr",
      image: "images/watermark.png",
    },
    {
      title: "FLAPPY BIRD IA",
      goal:
        "Juste pour le fun ! Recréation du jeu Flappy Bird " +
        "avec des carrés. Deux versions : la première pour tester et la seconde " +
        "pour une intégration IA plus simple. J'ai entraîné un " +
        "modèle de Q-Learning pour y jouer. Après une semaine, " +
        "le score moyen de l'IA était de 50. Le Q-Learning n'était " +
        "pas suffisant pour aller plus loin, peut-être qu'avec plus de " +
        "temps d'entraînement il aurait encore pu progresser.",
      techs: [
        "Principalement Python",
        "Q-Learning pour l'IA",
        "Tkinter pour la fenêtre",
        "MVC"
      ],
      note:
        "C'est l'IA qui joue dans la vidéo !",
      video: "videos/flappy-bird.mp4",
    },
    {
      title: "TETRIS",
      goal:
        "Projet scolaire : Tetris guidé. Entrainement d'une " +
        "IA (comme pour Flappy Bird). J'ai d'abord essayé le Q-Learning, " +
        "mais les résultats n'étaient pas fameux. Puis " +
        "des Q-Networks, Dueling Q-Network, Double " +
        "Q-Network. Quelques progrès ont été faits, mais l'IA restait un peu faible. " +
        "En combinant (D2QN), pas de réel gain. Mon " +
        "manque d'expérience et de puissance de calcul " +
        "a limité l'IA. En revanche, le Tetris correspondait " +
        "bien à l'original avec quelques petits bonus : multijoueur, " +
        "pièces fantômes, " +
        "et contrôles clavier (non inclus dans le projet scolaire, " +
        "mais présents dans le jeu original).",
      techs: [
        "Java pour frontend et backend",
        "Monolithique et MVC",
        "DL4J pour l'IA",
        "Ngrok, WebSocket pour le jeu en local"
      ],
      note:
        "Pour la démonstration cette fois, " +
        "c'est moi qui ai joué puisque l'IA ne se débrouillait pas très bien.",
      video: "videos/tetris.mp4",
      smallAnimation: "<i class='pi pi-spin pi-th-large'></i>"
    },
    {
      title: "SPEECH-TO-TEXT (STT)",
      goal:
        "Première semaine de mon stage chez Cechas." +
        "Ma mission : utiliser le modèle STT de Kyutai et " +
        "construire une API de transcription. Au bout d'une semaine, le backend " +
        "était prêt, le frontend pas totalement terminé. Le projet " +
        "a été abandonné quand Kyutai a sorti son " +
        "produit Unmute, qui faisait la même chose que mon travail mais " +
        "en incluant la synthèse vocale (TTS) et prêt pour la production.",
      techs: [
        "Backend FastAPI (Python)",
        "Frontend de démo Tkinter",
        "Modèle STT de Kyutai",
        "Transformers de HuggingFace",
        "Pydantic pour la validation",
      ],
      note:
        "Le temps de réponse moyen avec GPU sur Google Colab était de 4 secondes.",
      image: "images/stt.png",
      smallAnimation: "<i class='pi pi-microphone'></i>"
    },
    {
      title: "HEBERGEMENT LLM ",
      goal:
        "Deuxième projet de stage chez Cechas. " +
        "Permet à ses utilisateurs d'héberger n'importe quel LLM (Large Language " +
        "Model) sur un cluster GPU (Kubernetes). " +
        "L'objectif était de privatiser l'accès aux données et de réduire les coûts " +
        "liés à l'API OpenAI. Comprend du finetuning LoRA et " +
        "des fonctionnalités de sortie structurée.",
      techs: [
        "FastAPI pour la couche API",
        "Transformers pour le modèle et le tokenizer",
        "Datasets pour charger les données d'entraînement",
        "LangChain pour se connecter à l'API vLLM",
        "LangGraph pour les sorties structurées",
        "Redis pour stocker l'état de l'API",
        "vLLM pour déployer le serveur LLM",
        "LoRA pour le finetuning",
        "Docker pour les conteneurs d'API",
        "Kubernetes pour le déploiement et l'orchestration",
        "Architecture MVC"
      ],
      note:
        "Ce projet demande une quantité importante de puissance de calcul, " +
        "c'est pourquoi aucune démonstration publique n'est disponible. " +
        "De plus, il n'a pas de véritable frontend dédié, car il est surtout côté backend. " +
        "Néanmoins, il fournissait des résultats précis avec des temps de réponse " +
        "proportionnels à la longueur de la réponse. Pour des réponses d'environ " +
        "100 tokens, la latence restait sous la seconde avec 10 utilisateurs " +
        "simultanés. Avec plus de temps, j'aurais pu implémenter un flux sortant " +
        "en streaming pour des réponses en temps réel, comme sur les LLM actuels.",
    },
    {
      title: "PUBLISHER V2",
      goal:
        "Troisième projet chez Cechas. Outil pour " +
        "publier chaque semaine sur plus de 70 pages Facebook. " +
        "Gère les posts/réels organiques, télécharge " +
        "des données CSV, propose des fonctionnalités de publicité, la " +
        "duplication d'adsets et un historique d'utilisation. " +
        "M'a fait toucher à de nombreuses APIs Meta, de la " +
        "publication aux publicités.",
      techs: [
        "Backend FastAPI",
        "Alembic pour les migrations",
        "SQLAlchemy comme ORM",
        "Pydantic pour la validation",
        "Frontend Angular",
        "UI Angular Material",
        "Docker pour le déploiement",
        "Docker Compose pour l'orchestration",
        "Nginx pour servir l'application",
        "Basé sur une architecture Clean + DDD",
        "Utilise le pattern Repository"
      ],
      note:
        "L'accent était mis sur des fonctionnalités rapides et opérationnelles plutôt que sur l'UI.",
      link: "https://publisher.floalz.fr",
      image: "images/publisher.png",
      smallAnimation: "<i class='pi pi-facebook'></i>"
    },
  ]) as Project[],
};
