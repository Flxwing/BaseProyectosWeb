import { useState, type ChangeEvent } from "react";
import { STRING } from "@/app/constants";
import type { UsersListsViewModel } from "../models/UsersListsViewModel.interface";

export const useUsersListsViewModel = (): UsersListsViewModel => {
  const [username, setUsername] = useState<string>(STRING.Empty);
  const [users, setUsers] = useState<string[]>([]);

  const handleUsernameChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setUsername(event.currentTarget.value);
  };

  const handleAddUser = () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      return;
    }

    setUsers((currentUsers) => [...currentUsers, trimmedUsername]);
    setUsername(STRING.Empty);
  };

  const handleDeleteUser = (index: number) => {
    setUsers((currentUsers) =>
      currentUsers.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  return {
    username,
    users,
    isAddDisabled: username.trim().length === 0,
    handleUsernameChange,
    handleAddUser,
    handleDeleteUser,
  };
};
