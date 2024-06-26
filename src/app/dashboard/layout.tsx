import { Sidebar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-slate-900">{children}</div>
      </div>
    </div>
  );
}
