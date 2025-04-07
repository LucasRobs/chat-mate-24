
import React, { useState } from 'react';
import VideoPlayer from '../ui-custom/VideoPlayer';
import VideoThumbnail from '../ui-custom/VideoThumbnail';

const ChatDemo = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <section id="video-demo" className="py-16 md:py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Veja o Followop em ação</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Descubra como nossa IA pode transformar seu atendimento ao cliente e ajudar a escalar seu negócio.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto h-[225px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          {videoPlaying ? (
            <VideoPlayer videoId="123456789" hashedId="123456789" />
          ) : (
            <VideoThumbnail
              thumbnailSrc="/lovable-uploads/240e98ed-eab0-4c12-b92a-802196862efd.png"
              videoId="123456789"
              onPlay={handlePlayVideo}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
