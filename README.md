# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a beautiful UI and smooth animations. This portfolio showcases my skills, projects, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **RTL Support**: Built-in support for Right-to-Left languages
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Project Showcase**: Display GitHub repositories with detailed information
- **Skills Section**: Visual representation of technical skills
- **Contact Form**: Easy way for visitors to get in touch
- **Blog Section**: Share your thoughts and experiences
- **Multi-language Support**: Built-in language switching capability

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **API Integration**: GitHub API
- **Deployment**: Vercel



### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── templates/
│   │   └── ui/
│   ├── context/
│   ├── hooks/
│   └── page.js
├── data/
│   ├── data.js
│   └── skills.js
├── lib/
│   └── github.js
├── pages/
│   ├── About.js
│   ├── Blog.js
│   ├── Contact.js
│   ├── Projects.js
│   └── Skills.js
└── public/
    └── images/
```


### Customizing Content

1. Update personal information in `data/data.js`
2. Modify skills in `data/skills.js`
3. Customize GitHub repository fetching in `lib/github.js`

### Styling

The application uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 🌐 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!
