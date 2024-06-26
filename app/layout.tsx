import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { ModalProvider } from '@/components/providers/modal-provider';
import { SocketProvider } from '@/components/providers/socket-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sujcord',
	description: 'oh brother',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
					<SocketProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='dark'
							enableSystem={false}
							storageKey='discord-theme'>
							<ModalProvider />
							<QueryProvider>{children}</QueryProvider>
						</ThemeProvider>
					</SocketProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}

