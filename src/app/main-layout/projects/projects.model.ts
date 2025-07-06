export interface Project {
  image: string; // URL or path to the project image
  title: string;
  description: string;
  tags: string[]; // Array of technologies or skills used
  codeUrl?: string; // Optional URL to the project's codebase
  liveUrl?: string; // Optional URL to the live demo
}
