import { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
export const WithTitlePanel: FC<Props> = ({ title, children }) => {
  return (
    <div className="px-12">
      <h2 className=" font-bold border-b-4 border-red-400 ">{title}</h2>
      <div className=" bg-gray-50 mt-6 p-4">{children}</div>
    </div>
  );
};
