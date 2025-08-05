# Avicii Tribute - Next.js

A tribute website dedicated to Avicii (Tim Bergling) built with Next.js, featuring his iconic music and legacy in electronic dance music.

## Features

- 🎵 **Spotify Integration**: Embedded Spotify playlist featuring Avicii's greatest hits
- 🎨 **Responsive Design**: Optimized for both desktop and mobile devices
- ⚡ **Performance**: Built with Next.js for optimal loading speeds
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- 🎭 **Smooth Animations**: Custom CSS animations for an immersive experience
- 🎵 **Background Music**: YouTube embed for ambient music
- 📱 **Mobile-First**: Responsive design that works on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter)
- **Analytics**: Google Analytics
- **Deployment**: Vercel-ready

## SEO Features

- ✅ Complete meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ Structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Google Analytics integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd avicii
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
avicii/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   ├── robots.ts            # Robots.txt generation
│   └── sitemap.ts           # Sitemap generation
├── img/                     # Static images
├── public/                  # Public assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Changing Images
- Replace images in the `img/` directory
- Update image paths in `app/page.tsx`

### Modifying Spotify Playlist
- Update the Spotify embed URL in `app/page.tsx`
- Find your playlist ID and replace in the iframe src

### Updating SEO
- Modify metadata in `app/layout.tsx`
- Update Open Graph images and descriptions

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- **Design & Development**: Kalash Vasaniya
- **Music**: Avicii (Tim Bergling)
- **Images**: Respective copyright holders

---

*In memory of Tim Bergling (Avicii) - Your music will live forever.*
