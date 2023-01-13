import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en" prefix="og: http://ogp.me/ns#">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
