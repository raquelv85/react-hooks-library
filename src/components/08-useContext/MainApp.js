import React from "react";

import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  return (
    <UserContext.Provider value={}>
      <AppRouter />
    </UserContext.Provider>
  );
};
