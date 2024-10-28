import React from 'react';
import { Play, Clock3 } from 'lucide-react';

const recentlyPlayed = [
  {
    id: 1,
    title: "Night Drive",
    artist: "Synthwave Masters",
    duration: "4:23",
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    title: "Midnight City",
    artist: "Electronic Dreams",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    title: "Neon Lights",
    artist: "Future Sound",
    duration: "5:12",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    title: "Cyber Dreams",
    artist: "Digital Wave",
    duration: "4:18",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&h=150&fit=crop"
  }
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop"
            alt="Playlist cover"
            className="w-64 h-64 shadow-2xl"
          />
          <div>
            <p className="text-sm text-gray-300 uppercase">Playlist</p>
            <h1 className="text-7xl font-bold text-white mt-2 mb-6">Discover Weekly</h1>
            <p className="text-gray-300">Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you.</p>
            <div className="flex items-center space-x-2 mt-4">
              <button className="bg-green-500 text-black rounded-full px-8 py-3 font-semibold hover:bg-green-400 flex items-center">
                <Play size={20} className="mr-2" fill="black" />
                Play
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full text-gray-300">
            <thead>
              <tr className="border-b border-gray-800 text-sm">
                <th className="text-left pb-3 w-12">#</th>
                <th className="text-left pb-3">Title</th>
                <th className="text-left pb-3">Artist</th>
                <th className="text-left pb-3 w-12">
                  <Clock3 size={16} />
                </th>
              </tr>
            </thead>
            <tbody>
              {recentlyPlayed.map((track, index) => (
                <tr key={track.id} className="hover:bg-white/10 group">
                  <td className="py-4">{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-4">
                      <img src={track.image} alt={track.title} className="w-10 h-10" />
                      <span className="text-white">{track.title}</span>
                    </div>
                  </td>
                  <td>{track.artist}</td>
                  <td>{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}