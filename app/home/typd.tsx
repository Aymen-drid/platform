"use client"
import React from 'react';
import Typed from 'typed.js';

export default function TypedNew({className}:{className:string}) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to Codini <br/>  Let’s  begin the adventure"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      // typed.destroy();
    };
  }, []);

  return (
    <div className={`${className} App font-bold`}>
      <span ref={el} />
    </div>
  );
}