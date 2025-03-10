# Lyrics Finder

Lyrics Finder is a simple web application that allows users to search for song lyrics by providing the song title and artist name. The app fetches lyrics using the [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/).

## Features

- Search for lyrics by entering the song title and artist name
- Displays lyrics in a clean and readable format
- Provides error handling for missing input and unavailable lyrics
- Simple and responsive UI built with React and Tailwind CSS

## Technologies Used

- React.js
- Axios (for API requests)
- Tailwind CSS (for styling)
- React Icons (for the search button)
- Lyrics.ovh API (for fetching lyrics)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/BossNattawat/Lyrics-Finder.git
   cd Lyrics-Finder
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Usage

1. Enter the song title in the "Song Name" field.
2. Enter the artist name in the "Artist Name" field.
3. Click the **Search** button to fetch the lyrics.
4. The lyrics will be displayed below.

## License

This project is licensed under the MIT License.

