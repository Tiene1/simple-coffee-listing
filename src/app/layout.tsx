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
        <div className="min-h-screen relative">
          {/* Section image de fond - 25% hauteur viewport */}
          <div 
            className="w-full h-[25vh] absolute top-0"
            style={{
              backgroundImage: 'url(/assets/icons/bg-cafe.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Section couleur unie - 75% hauteur restante */}
          <div 
            className="w-full absolute top-[25vh] bottom-0"
            style={{ backgroundColor: 'black' }}
          />
          
          {/* Content des pages */}
          <div className="relative z-10 pt-8 pb-8 min-h-screen flex items-center justify-center">
            <div className="w-full h-auto lg:w-[65vw] lg:h-[75vh] lg:flex lg:items-center lg:justify-center xl:w-[55vw] xl:h-[80vh] xl:flex xl:items-center xl:justify-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
