# 🎬 MovieApp

> **Discover, search, and save your favorite movies — powered by real-time IMDB data.**

MovieApp is a cross-platform mobile application built with React Native (Expo) that lets users explore movies, dive into detailed info, save favorites, and discover what's trending across the entire user base.

---

## 📱 Screenshots

> *Add your app screenshots here*

---

## ✨ Features

- **🎥 Popular Movies Feed** — Browse a curated list of currently popular movies fetched live from the IMDB API
- **🔍 Keyword Search** — Search any movie by title with instant results pulled from IMDB
- **📋 Movie Detail Page** — Full movie profile including rating, genres, cast, synopsis, and more
- **❤️ Favorites** — Save movies locally and revisit them anytime from your personal favorites screen
- **🔥 Trending / Hottest Movies** — Tracks the most-searched movies across all users in real time, surfacing what everyone is watching
- **📱 Cross-Platform** — Runs on both Android and iOS from a single codebase via Expo

---

## 🛠️ Tech Stack

### Mobile
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend & Data
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![IMDB API](https://img.shields.io/badge/IMDB_API-F5C518?style=for-the-badge&logo=imdb&logoColor=black)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- Expo CLI (`npm install -g expo-cli`)
- [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS emulator
- Appwrite account with a project set up
- IMDB API key (via [RapidAPI](https://rapidapi.com/apidojo/api/imdb8))

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/cinetrack.git
cd cinetrack
```

**2. Install dependencies**

```bash
npm install
npm install --save @react-native-masked-view/masked-view
npm install react-native-appwrite
```

**3. Start the development server**

```bash
npx expo start
```

Then open the app using one of:
- 📱 **Expo Go** — scan the QR code with the Expo Go app
- 🤖 **Android Emulator** — press `a` in the terminal
- 🍎 **iOS Simulator** — press `i` in the terminal

---

## 🔌 How It Works

### Movie Data — IMDB API
All movie content (popular lists, search results, detail pages) is fetched from the IMDB API via RapidAPI. Each movie detail page surfaces ratings, genres, cast members, runtime, synopsis, and more.

### Favorites — Local + Appwrite
Users can save any movie to their favorites list. Saved movies are persisted through Appwrite's database, making them available across sessions.

### 🔥 Trending Algorithm — Appwrite
Every time a user searches for and opens a movie, a search count is incremented in Appwrite for that movie. The **Hottest Movies** screen queries the top N most-counted movies across all users — surfacing real, crowd-sourced trending content.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Talha Rehan**  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

---

> *Built for movie lovers, powered by data.* 🍿
