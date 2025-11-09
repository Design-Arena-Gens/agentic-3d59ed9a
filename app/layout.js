import './globals.css';

export const metadata = {
  title: 'Voyage | Travel & Hotel Booking',
  description: 'Modern travel planning and hotel booking experience'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
