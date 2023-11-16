export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container px-5 mx-auto max-w-5xl">{children}</div>;
}
