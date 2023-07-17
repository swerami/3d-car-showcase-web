import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Menu = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col h-[600px] bg-black/20 w-[400px] p-6 select-none">
        {children}
      </div>
    </>
  );
};

export default Menu;
