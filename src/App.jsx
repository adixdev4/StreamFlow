
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { VideoProvider } from "./context/VideoContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home1";
import Watch from "./pages/Watch";
import Explore from "./pages/Explore";
import History from "./pages/History";

import LikedVideos from "./pages/LikedVideos";
import WatchLater from "./pages/WatchLater";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <VideoProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar search={search} setSearch={setSearch} />

          <div className="main-layout">
            <Sidebar />

            <main className="page-content">
              <Routes>
                <Route path="/" element={<Home search={search} />} />
                <Route path="/watch/:id" element={<Watch />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/history" element={<History />} />

                <Route path="/liked" element={<LikedVideos />} />
                <Route path="/watch-later" element={<WatchLater />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}

export default App;