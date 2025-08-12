import "./globals.css";

export const metadata = {
  title: "ToDoList App",
  description: "A simple and beautiful ToDo List application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}