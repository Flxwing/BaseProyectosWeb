import type { ReactNode } from "react";

interface UsersListsEmptyStateProps {
  message: string;
}

export const UsersListsEmptyState = ({
  message,
}: UsersListsEmptyStateProps): ReactNode => {
  return (
    <li className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-500">
      {message}
    </li>
  );
};

export default UsersListsEmptyState;
