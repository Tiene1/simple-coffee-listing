import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Coffee Listing | devChallenges.io",
  description: "A beautiful coffee collection showcase built with Next.js, TypeScript, and Tailwind CSS. Challenge by devChallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative overflow-hidden">
          {/* Section image de fond - 25% hauteur */}
          <div 
            className="w-full h-1/4 absolute top-0"
            style={{
              backgroundImage: 'url(/assets/icons/bg-cafe.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Section couleur unie - 75% hauteur restante */}
          <div 
            className="w-full h-3/4 absolute bottom-0"
            style={{ backgroundColor: 'black' }}
          />
          
          {/* Content des pages */}
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
