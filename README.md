# 🎬 CineTrack

> **Discover, search, and save your favorite movies — powered by real-time TMDB data.**

CineTrack is a cross-platform mobile application built with React Native (Expo) that lets users explore movies, dive into detailed info, save favorites, and discover what's trending across the entire user base.

---

## 📱 Screenshots

> ![WhatsApp Image 2026-03-07 at 2 18 17 AM](https://github.com/user-attachments/assets/1e6ba6d1-9011-4a15-a99f-b72a1fdc51b2)![WhatsApp Image 2026-03-07 at 2 18 18 AM](https://github.com/user-attachments/assets/a9e9753a-a7c8-49ef-8b4d-f6be3f7a6fc7)![WhatsApp Image 2026-03-07 at 2 18 18 AM2](https://github.com/user-attachments/assets/06103ddd-760f-4d14-8269-c8aaa15ffc05)
![WhatsApp Image 2026-03-07 at 2 18 18 AM3](https://github.com/user-attachments/assets/cf315f8c-63d5-4f22-a027-a3212f809d8a)




---

## ✨ Features

- **🎥 Popular Movies Feed** — Browse a curated list of currently popular movies fetched live from the TMDB API
- **🔍 Keyword Search** — Search any movie by title with instant results pulled from TMDB
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
![TMDB API](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- Expo CLI (`npm install -g expo-cli`)
- [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS emulator
- Appwrite account with a project set up
- TMDB API key — get one free at [themoviedb.org](https://www.themoviedb.org/settings/api)

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

**3. Configure environment variables**

Create a `.env` file in the root directory:

```env
# TMDB Configuration
EXPO_PUBLIC_API_KEY=

# Appwrite Configuration
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_TWO_ID=
```

**4. Start the development server**

```bash
npx expo start
```

Then open the app using one of:
- 📱 **Expo Go** — scan the QR code with the Expo Go app
- 🤖 **Android Emulator** — press `a` in the terminal
- 🍎 **iOS Simulator** — press `i` in the terminal

---


## 🔌 How It Works

### Movie Data — TMDB API
All movie content (popular lists, search results, detail pages) is fetched from the [TMDB API](https://www.themoviedb.org/documentation/api). Each movie detail page surfaces ratings, genres, cast members, runtime, synopsis, and more.

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
