import { Header, Sidebar } from "common/components";

export const MainLayout: React.FCC = ({ children }) => {
  return (
    <div className="grid h-screen w-screen grid-cols-[80px,1fr] grid-rows-[70px,1fr]">
      <Sidebar />
      <Header />
      {children}
    </div>
  );
};