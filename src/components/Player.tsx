import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
            alt="Current track"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="text-white text-sm font-medium">Summer Nights</h4>
            <p className="text-gray-400 text-xs">The Midnight</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={24} />
            </button>
            <button
              className="bg-white rounded-full p-2 hover:scale-105 transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} className="text-black" /> : <Play size={24} className="text-black" />}
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={24} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center space-x-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full hover:bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-32">
          <Volume2 size={20} className="text-gray-400" />
          <div className="h-1 flex-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full hover:bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}