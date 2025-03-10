import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function findLyrics(e) {
    e.preventDefault();

    setLyrics("");

    if (!song || !artist) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setLoading(true);
    axios
      .get(
        `https://api.lyrics.ovh/v1/${artist.toLowerCase().trim()}/${song
          .toLowerCase()
          .trim()}`
      )
      .then((res) => {
        setLyrics(res.data.lyrics);
        setLoading(false);
      })
      .catch((err) => {
        setLyrics("Lyrics not found!");
        setLoading(false);
        console.error(err);
      });
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100">
        <div className="container mx-auto p-4 flex-grow">
          <header className="items-center flex flex-col gap-y-3">
            <h1 className="text-4xl font-bold my-5 text-base-content">
              Lyrics Finder
            </h1>
            <form
              onSubmit={findLyrics}
              className="gap-4 flex flex-col sm:flex-row items-center"
            >
              <input
                className="input input-lg"
                type="text"
                placeholder="Song Name..."
                onChange={(e) => setSong(e.target.value)}
                value={song}
              />
              <input
                className="input input-lg"
                type="text"
                placeholder="Artist Name..."
                onChange={(e) => setArtist(e.target.value)}
                value={artist}
              />
              <button
                type="submit"
                className="btn btn-success text-base-content btn-lg"
              >
                <FaSearch size={20} /> Search
              </button>
            </form>
          </header>

          <div className="flex flex-col gap-y-4 items-center my-5">
            {error && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Please provide song name and artist name!</span>
              </div>
            )}
            {loading && (
              <span className="loading loading-spinner loading-xl"></span>
            )}
            <div className="text-base-content text-center text-xl mt-8 w-full sm:w-3/4 lg:w-1/2 mx-auto p-4 whitespace-pre-wrap">
              {lyrics}
            </div>
          </div>
        </div>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-8">
          <aside>
            <p className="text-xl font-semibold">
              Build by{" "}
              <a className="text-accent" href="https://github.com/BossNattawat">
                BossNattawat
              </a>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default App;
