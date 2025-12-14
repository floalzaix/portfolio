import { Project, ProjectSchema } from "../app/shared/models/project";

export const environment = {
  PROJECTS: ProjectSchema.array().parse([
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
      image: "images/mid.png",
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
      image: "images/accounts.png"
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
        "designs.",
      link: "https://img.floalz.fr",
      image: "images/watermark.png"
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
      video: "videos/flappy-bird.mp4"
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
      video: "videos/tetris.mp4"
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
      image: "images/stt.png"
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
      note: "This project requires a significant amount of computing power, which is why no public demonstration is available. Furthermore, there is no dedicated frontend, as it is mostly backend. Nevertheless, it provided accurate results with response times proportional to the length of the answer. For answers of around 100 tokens, the latency was under 1 second with 10 simultaneous users. With additional time, I could have implemented streaming outputs for real-time answers, similar to current LLM designs."
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
      image: "images/publisher.png"
    },
  ]) as Project[],
};
