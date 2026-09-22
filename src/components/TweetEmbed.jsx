import React, { useEffect, useRef } from 'react';

export default function TweetEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const callbackName = 'twitterCallback_' + Math.random().toString(36).substring(7);
    
    window[callbackName] = (data) => {
      if (isMounted && containerRef.current) {
        containerRef.current.innerHTML = data.html;
        if (window.twttr) {
          window.twttr.widgets.load(containerRef.current);
        } else {
          if (!document.getElementById('twitter-wjs')) {
            const script = document.createElement('script');
            script.id = 'twitter-wjs';
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.head.appendChild(script);
          }
        }
      }
      delete window[callbackName];
    };

    const script = document.createElement('script');
    script.src = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&callback=${callbackName}&omit_script=true`;
    script.onerror = () => {
      console.error("ツイートの読み込みに失敗しました: " + url);
      delete window[callbackName];
    };
    document.head.appendChild(script);

    return () => {
      isMounted = false;
      if (window[callbackName]) delete window[callbackName];
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [url]);

  return (
    <div ref={containerRef} className="w-full flex justify-center min-h-[200px] items-center">
      <div className="w-8 h-8 border-4 border-emerald-100 border-t-emerald-500 rounded-full animate-spin"></div>
    </div>
  );
}
