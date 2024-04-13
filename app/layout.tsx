import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Next Dev Flow",
	description: "If you are a dev with a flow then this is the place to go!",
	icons: {
		icon: "/assets/images/site-logo.svg",
	},
};

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: "primary-gradient",
					footerActionLink: "primary-text-gradient hover:text-primary-500",
				},
			}}
		>
			<html lang="en">
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
					<h1 className="h1-bold">Next Dev Flow</h1>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
