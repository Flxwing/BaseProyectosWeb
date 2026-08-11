import type { ReactNode } from "react";

interface UsersListsHeaderProps {
  title: string;
  description: string;
}

export const UsersListsHeader = ({
  title,
  description,
}: UsersListsHeaderProps): ReactNode => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-slate-950">{title}</h1>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
};

export default UsersListsHeader;
