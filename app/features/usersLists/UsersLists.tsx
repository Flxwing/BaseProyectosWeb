"use client";

import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import FormField from "@/app/components/form-field/FormField";
import { INPUT_TYPES, STRING } from "@/app/constants";
import UsersListsEmptyState from "./components/UsersListsEmptyState";
import UsersListsHeader from "./components/UsersListsHeader";
import { USERS_LISTS_TEXT } from "./constants/UsersLists.constants";
import { useUsersListsViewModel } from "./hooks/useUsersListsViewModel";

const UsersLists = (): ReactNode => {
  const {
    username,
    users,
    isAddDisabled,
    handleUsernameChange,
    handleAddUser,
    handleDeleteUser,
  } = useUsersListsViewModel();

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <UsersListsHeader
        title={USERS_LISTS_TEXT.TITLE}
        description={USERS_LISTS_TEXT.DESCRIPTION}
      />

      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <FormField
          id="usersListsUsername"
          name="usersListsUsername"
          label={USERS_LISTS_TEXT.USERNAME_LABEL}
          type={INPUT_TYPES.TEXT}
          value={username}
          placeholder={USERS_LISTS_TEXT.USERNAME_PLACEHOLDER}
          onChange={handleUsernameChange}
          labelSuffix={STRING.Empty}
        />
        <Button
          type="button"
          onClick={handleAddUser}
          disabled={isAddDisabled}
          className="h-12 whitespace-nowrap"
        >
          {USERS_LISTS_TEXT.ADD_BUTTON}
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">
          {USERS_LISTS_TEXT.USERS_TITLE}
        </h2>
        <ul className="mt-4 space-y-3">
          {users.length === 0 ? (
            <UsersListsEmptyState message={USERS_LISTS_TEXT.EMPTY_MESSAGE} />
          ) : (
            users.map((user, index) => (
              <li
                key={`${user}-${index}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span className="text-sm text-slate-900">{user}</span>
                <Button
                  type="button"
                  onClick={() => handleDeleteUser(index)}
                  className="h-10 px-4 text-sm"
                >
                  {USERS_LISTS_TEXT.DELETE_BUTTON}
                </Button>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default UsersLists;
