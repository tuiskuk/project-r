import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar/TopBar";
import { ClerkProvider } from "@clerk/nextjs";
import { ProfileEnsurer } from "@/components/auth/ProfileEnsurer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project R",
  description: "Yhdistä kristittyjä Suomessa — tapahtumat ja yhteisöt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className="bg-slate-50 text-slate-900">
        <ClerkProvider
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/"
          afterSignUpUrl="/"
        >
          <TopBar />
          <ProfileEnsurer/>
          {children}

        </ClerkProvider>

      </body>
    </html>
  );
}
