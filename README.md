# Nerine Harbor 🌸: Knowledge Creates Confidence

Nerine Harbor is a dedicated platform providing educational resources focused on empowering women through practical knowledge, safety planning, and trusted information. It aims to build confidence by offering approachable and well-organized content on essential safety and preparedness topics.

## Badges

[![License](https://img.shields.io/badge/license-No%20license-red)](https://github.com/tanyarenawork-hash/Nerine-Harbor/blob/main/LICENSE)
[![Primary Language](https://img.shields.io/badge/Primary%20Language-TypeScript-blue)]()
[![Stars](https://img.shields.io/github/stars/tanyarenawork-hash/Nerine-Harbor?style=social)](https://github.com/tanyarenawork-hash/Nerine-Harbor/stargazers)
[![Forks](https://img.shields.io/github/forks/tanyarenawork-hash/Nerine-Harbor?style=social)](https://github.com/tanyarenawork-hash/Nerine-Harbor/forks)

## Table of Contents

* [About Nerine Harbor](#about-nerine-harbor)
* [Key Features](#key-features) ✨
* [Tech Stack](#tech-stack) 💻
* [Installation](#installation) 🛠️
* [Usage](#usage) 🚀
* [Project Structure](#project-structure) 📁
* [Contributing](#contributing) 🤝
* [License](#license) 📄
* [Important Links](#important-links) 🔗
* [Footer](#footer) 🌐

## About Nerine Harbor 🌊

Nerine Harbor provides educational resources that empower women through safety education, preparedness, and awareness, focusing on building confidence rather than fostering fear. The name combines 'Nerine' (symbolizing resilience, hope, and beauty) with 'Harbor' (representing safety, refuge, and protection), signifying a calm and trustworthy space for learning practical knowledge.

## Key Features ✨

*   **Comprehensive Safety Guides:** Offers detailed guides on personal safety, home and apartment safety, campus safety, travel preparation, digital privacy, and healthy relationships.
*   **Preparedness Checklists:** Provides practical checklists for home, emergency planning, personal planning, and daily awareness.
*   **Resource Directory:** Curated links to trusted educational organizations, government resources (like Ready.gov), and non-profits focused on safety and support.
*   **Downloadable Content:** Offers printable PDFs of checklists and guides for offline use.
*   **User-Friendly Interface:** Built with a clean, modern UI using React and Tailwind CSS, ensuring an accessible and pleasant user experience.
*   **File-Based Routing:** Leverages TanStack Router for efficient and organized routing based on file structure.
*   **Error Handling:** Includes robust error capture and reporting mechanisms, particularly for SSR scenarios.

## Tech Stack 💻

*   **Languages:** TypeScript, JavaScript, CSS, Markdown, HTML
*   **Frameworks:** React, Next.js (implied by TanStack Start conventions), Node.js, Express
*   **State Management:** React Query (`@tanstack/react-query`)
*   **Routing:** TanStack Router (`@tanstack/react-router`)
*   **UI Components:** Radix UI (`@radix-ui/react-*`), Tailwind CSS, `class-variance-authority`, `clsx`, `tailwind-merge`
*   **Form Handling:** React Hook Form (`react-hook-form`)
*   **Utilities:** `date-fns`, `lucide-react`, `embla-carousel-react`, `cmdk`, `vaul`, `sonner`
*   **Build Tools:** Vite
*   **Linting/Formatting:** ESLint, Prettier

## Installation 🛠️

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tanyarenawork-hash/Nerine-Harbor.git
    cd Nerine-Harbor
    ```

2.  **Install dependencies:**
    The project uses `bun` for package management (as indicated by `bun.lock` and `bunfig.toml`).
    ```bash
    bun install
    ```
    *(If you prefer npm or yarn, you can typically run `npm install` or `yarn install` as well, though `bun` is specified.)*

3.  **Set up environment variables (if any):**
    Check for a `.env` file or environment variable requirements. (None explicitly found in analysis, but common practice).

4.  **Run the development server:**
    ```bash
    bun dev
    ```
    *(This command is derived from the `scripts.dev` entry in `package.json` which uses `vite dev`)*

## Usage 🚀

Nerine Harbor is a web application designed to provide educational safety resources. Users can navigate through various sections to learn about personal safety, emergency preparedness, digital security, travel safety, and more.

### Key Usage Flows:

*   **Exploring Safety Guides:** Users can access detailed guides on topics like home safety, campus life, travel, and digital privacy.
*   **Preparedness Planning:** Users can utilize checklists for home preparedness, emergency planning, and personal safety.
*   **Accessing Resources:** A curated directory provides links to reputable organizations and downloadable PDFs for further learning.
*   **Emergency Contacts:** A readily accessible list of important U.S. hotlines and emergency numbers is available.

### Development Commands

*   **Start Development Server:**
    ```bash
    bun dev
    ```
*   **Build for Production:**
    ```bash
    bun build
    ```
*   **Run Linters:**
    ```bash
    bun lint
    ```
*   **Format Code:**
    ```bash
    bun format
    ```

## Project Structure 📁

The project follows a typical modern React/Next.js-like structure, leveraging TanStack Router for file-based routing.

```
Nerine-Harbor/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── hero.jpg
│   ├── components/
│   │   ├── site.tsx          # Core site components (Header, Footer, Cards)
│   │   └── ui/               # Reusable UI components (Buttons, Inputs, Modals, etc.)
│   ├── hooks/
│   │   └── use-mobile.tsx    # Hook for mobile breakpoint detection
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts          # Utility functions (e.g., class name merging)
│   ├── routes/
│   │   ├── __root.tsx        # Root route component, handles layout and global context
│   │   ├── about.tsx
│   │   ├── accessibility.tsx
│   │   ├── campus-safety.tsx
│   │   ├── contact.tsx
│   │   ├── digital-safety.tsx
│   │   ├── disclaimer.tsx
│   │   ├── emergency-contacts.tsx
│   │   ├── index.tsx         # Homepage
│   │   ├── legal.tsx
│   │   ├── preparedness.tsx
│   │   ├── privacy.tsx
│   │   ├── resources.tsx
│   │   ├── safety-guides.tsx
│   │   ├── sitemap[.]xml.ts
│   │   ├── terms.tsx
│   │   └── travel-safety.tsx
│   ├── server.ts             # SSR server entry point
│   ├── router.tsx            # Router configuration
│   └── start.ts              # TanStack Start initialization
│   └── styles.css            # Global CSS and Tailwind imports
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build tool configuration
```

## Contributing 🤝

Contributions are welcome! Please feel free to:

*   Fork the repository.
*   Create a new branch for your feature or bug fix.
*   Commit your changes and push to the branch.
*   Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes relevant tests if applicable.

## License 📄

This project is currently not specified with a license. Please refer to the repository for details.

## Important Links 🔗

*   **Live Demo:** (No live demo URL provided in analysis)
*   **Repository:** [https://github.com/tanyarenawork-hash/Nerine-Harbor](https://github.com/tanyarenawork-hash/Nerine-Harbor)

## Footer 🌐

© 2024 Nerine Harbor. All rights reserved.

This project is maintained by the Nerine Harbor team.

[View on GitHub](https://github.com/tanyarenawork-hash/Nerine-Harbor)


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
