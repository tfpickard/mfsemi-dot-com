import React from "react";

export default function AboutLayout({ children }) {
  return (
    <div>
      <header>
        <h1>MFSemi LLC</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 MFSemi LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
