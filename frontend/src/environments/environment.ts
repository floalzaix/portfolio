import { Project, ProjectSchema } from "../app/shared/models/project";

export const environment = {
  PROJECTS: ProjectSchema.array().parse([
    {
      title: "MINE INTO THE DEEP (MID)",
      goal:
        "Reproduced the game of a coding " +
        "competition from the previous year. " +
        "The purpose was to provide my team " +
        "with training matter. The 24H is a " +
        "challenge that lasts 24 hours :) which " +
        "has two steps: first, an AI battle on " +
        "a game. Second, a web design test. " +
        "Our team won silver on web design!",
      techs: [
        "Built with C#.",
        "Relies on ASP.NET for web design.",
        "Used Ngrok for local games.",
        "Based on an MVC architecture."
      ],
      note:
        "Designed the game in a week while " +
        "studying. Be gentle: it was made to " +
        "train my team.",
      image: "images/mid.png",
    },
    {
      title: "ACCOUNT MANAGER",
      goal:
        "This project was made to ease " +
        "tracking my and my girlfriend's " +
        "transactions. Like Excel, it lists " +
        "transactions, adds categories, gives " +
        "per-category details and monthly " +
        "summaries.",
      techs: [
        "PHP for the backend.",
        "HTML + CSS + JS for the frontend.",
        "Monolithic + MVC architecture.",
        "Uses blade to serve HTML.",
        "Docker for deployment."
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
        "For my mother to watermark some " +
        "pictures for fun. Let me try Angular " +
        "and a new type of modern, faster " +
        "design!",
      techs: [
        "FastAPI (Python) backend.",
        "Angular frontend.",
        "Docker for deployment.",
        "MVC for backend.",
        "Feature-based frontend."
      ],
      note:
        "My first try at more professional " +
        "designs.",
      link: "https://img.floalz.fr",
      image: "images/watermark.png"
    },
    {
      title: "FLAPPY BIRD AI",
      goal:
        "Fun! Recreated the flappy bird game " +
        "with squares. Two versions; the second " +
        "for easier AI integration. Trained a " +
        "Q-Learning model to play. After a week, " +
        "the AI averaged 50. Q-Learning wasn't " +
        "enough to go further - maybe with more " +
        "power it could improve.",
      techs: [
        "Mostly Python.",
        "Q-Learning for AI.",
        "Tkinter for window.",
        "MVC architecture."
      ],
      note:
        "The AI is playing in the video!",
      video: "videos/flappy-bird.mp4"
    },
    {
      title: "TETRIS",
      goal:
        "School project: guided Tetris. Trained " +
        "an AI (like Flappy bird). Q-Learning at " +
        "first, but results were not great. Then " +
        "Q-Networks, Dueling Q-Network, Double " +
        "Q-Network. Some progress but still weak. " +
        "Combined (D2QN) but no real gain. My " +
        "inexperience and little compute power " +
        "limited the AI. Tetris matched the " +
        "original, with multiplayer, ghost pieces, " +
        "and keyboard controls.",
      techs: [
        "Java for frontend and backend.",
        "Monolithic/MVC architecture.",
        "Used DL4J for AI.",
        "Ngrok, WebSocket for local play."
      ],
      note:
        "This time, I play—AI didn't do well.",
      video: "videos/tetris.mp4"
    },
    {
      title: "SPEECH-TO-TEXT (STT)",
      goal:
        "First week of my Cechas internship: " +
        "tasked to use Kyutai's STT model and " +
        "build an API. After a week, the backend " +
        "was ready, frontend not done. The project " +
        "was dropped when Kyutai released their " +
        "Unmute product, which met all needs.",
      techs: [
        "FastAPI (Python) backend.",
        "Tkinter demo frontend.",
        "Kyutai STT model.",
        "Hugging Face transformers.",
        "Pydantic for validation.",
      ],
      note:
        "Response time with GPU avg. 4 seconds.",
      image: "images/stt.png"
    },
    {
      title: "LLM HOSTING",
      goal:
        "Second Cechas internship project. " +
        "Lets users host any LLM (Large Language " +
        "Model) on a GPU node (Kubernetes). " +
        "Privatizes data access, cuts OpenAI API " +
        "costs. Includes LoRA finetuning and " +
        "structured output features.",
      techs: [
        "FastAPI for API layer.",
        "Transformers for model/tokenizer.",
        "Datasets to load data.",
        "LangChain connects to vLLM API.",
        "LangGraph for structured output.",
        "Redis stores API state.",
        "vLLM to deploy LLM server.",
        "LoRA for finetuning.",
        "Docker for APIs.",
        "Kubernetes for deployment.",
        "MVC architecture."
      ],
      note:
        "No images/demo—needs huge compute.",
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
        "FastAPI backend.",
        "Alembic for migrations.",
        "SQLAlchemy for ORM.",
        "Pydantic for validation.",
        "Angular frontend.",
        "Angular Material UI.",
        "Docker for deployment.",
        "Docker Compose orchestration.",
        "Nginx for serving.",
        "Based on a clean + DDD architecture.",
        "Uses repository pattern."
      ],
      note:
        "The focus was on rapid and functional features rather than UI.",
      link: "https://publisher.floalz.fr",
      image: "images/publisher.png"
    },
  ]) as Project[],
};
