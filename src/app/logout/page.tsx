import React from "react";
import RootLayout from "../layout";

export default function page() {
  return (
    <RootLayout showNavbar={false}>
      <div>
        <iframe
          src="https://www.youtube.com/embed/gfU1iZnjRZM"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </RootLayout>
  );
}
