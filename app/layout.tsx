import type { Metadata } from "next";

import "../src/index.css";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created using create-react-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
