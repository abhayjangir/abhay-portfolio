import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: "#2A2A2A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhay Jangir | Software Development Engineer & Full-Stack Developer",
  description:
    "Explore Abhay Jangir's software engineering portfolio, featuring React.js, TypeScript, Next.js, Python, Django, REST APIs, production application development, and selected projects.",
  keywords: [
    "Abhay Jangir",
    "Software Development Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Python Developer",
    "Django REST Framework",
    "Next.js",
    "TypeScript",
    "Gurugram Software Engineer",
  ],
  authors: [{ name: "Abhay Jangir", url: "https://abhayjangir.dev" }],
  creator: "Abhay Jangir",
  metadataBase: new URL("https://abhayjangir.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhayjangir.dev",
    title: "Abhay Jangir | Software Development Engineer & Full-Stack Developer",
    description:
      "Explore Abhay Jangir's software engineering portfolio, featuring React.js, TypeScript, Next.js, Python, Django, REST APIs, production application development, and selected projects.",
    siteName: "Abhay Jangir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Jangir | Software Development Engineer & Full-Stack Developer",
    description:
      "Explore Abhay Jangir's software engineering portfolio, featuring React.js, TypeScript, Next.js, Python, Django, REST APIs, and production application development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { personal } = PORTFOLIO_DATA;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://abhayjangir.dev/#person",
        name: personal.name,
        jobTitle: personal.title,
        email: personal.email,
        telephone: personal.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressCountry: "India",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Chandigarh University",
        },
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Python",
          "Django",
          "REST APIs",
          "Full-Stack Development",
          "DICOM / PACS Workflows",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://abhayjangir.dev/#website",
        url: "https://abhayjangir.dev",
        name: "Abhay Jangir Portfolio",
        publisher: {
          "@id": "https://abhayjangir.dev/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-content-primary min-h-screen flex flex-col">
        <Navbar
          resumeUrl={personal.resumeUrl}
          resumeFilename={personal.resumeFilename}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
