
import { useEffect } from "react";

const WistiaScriptLoader = ({ mediaId = "k3jvq760qi" }) => {
  useEffect(() => {
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    
    const embedScript = document.createElement('script');
    embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    embedScript.async = true;
    embedScript.type = 'module';
    
    document.head.appendChild(playerScript);
    document.head.appendChild(embedScript);
    
    const style = document.createElement('style');
    style.innerHTML = `
      wistia-player[media-id='${mediaId}']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, [mediaId]);

  return null;
};

export default WistiaScriptLoader;
