interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center w-full bg-purple-600 h-[80px]">
        <h1 className="font-semibold text-white text-[30px]">{title}</h1>
      </div>
      {children}
    </div>
  );
};
