import type { ChangeEvent } from "react";

export interface UsersListsViewModel {
  username: string;
  users: string[];
  isAddDisabled: boolean;
  handleUsernameChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleAddUser: () => void;
  handleDeleteUser: (index: number) => void;
}
