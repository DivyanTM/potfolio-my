
https://roadmap.sh/projects/portfolio-website
# Portfolio Website

This is my personal portfolio website showcasing my skills, projects, and experiences. The website is built using HTML, Tailwind CSS, and JavaScript for a modern and responsive design.

## Features

- Fully responsive design
- Interactive sections for projects, skills, and contact
- Clean and minimalistic layout
- Uses Tailwind CSS for fast and efficient styling

## Folder Structure

```
project/
│
├── build/
│   ├── output.css   # Compiled Tailwind CSS file
│   ├── index.html   # Main HTML file
│   ├── about.html   # About page HTML
│   ├── contact.html # Contact page HTML
│
├── src/
│   ├── input.css    # Tailwind CSS input file
│   ├── assets/      # Images and other assets
│   ├── js/          # JavaScript files
│
├── package.json     # Project dependencies
├── tailwind.config.js # Tailwind configuration
```

## Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (LTS recommended)
- **NPM** or **Yarn**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Build CSS with Tailwind

1. Make changes to the `src/input.css` file to update styles.
2. Run the Tailwind CSS compiler in watch mode:
   ```bash
   npx tailwindcss -i ./src/build/input.css -o ./src/build/output.css --watch
   ```
   > **Note**: The `output.css` file will be saved in the `build/` folder.

## Run the Website

1. Open the `build/index.html` file in your browser.
   - Alternatively, use a lightweight HTTP server (e.g., `http-server` or `live-server`) for better development experience.

   Example with `live-server`:
   ```bash
   npx live-server build
   ```

## Customization

- Update Tailwind's configuration in `tailwind.config.js` to add custom styles, fonts, or colors.
- Modify HTML files in the `build/` folder to make changes to content.



