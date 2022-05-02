import * as React from "react";
import {
  Menu,
  LogoutLink,
  DataBindingProvider,
  EntityListSubTree,
  FieldView,
  FeedbackRenderer,
} from "@contember/admin";
import locale from "../locales";
import { UserBox } from "./userBox";
export const Navigation = () => (
  <Menu>
    <Menu.Item>
      <UserBox />
    </Menu.Item>
    <Menu.Item title={locale["Pages"]}>
      <DataBindingProvider
        stateComponent={FeedbackRenderer}
        refreshOnEnvironmentChange={false}
        refreshOnPersist={true}
      >
        <EntityListSubTree entities="Page" orderBy="name">
          <FieldView
            fields={["name", "id"]}
            render={({ value: name }, { value: id }) => (
              <Menu.Item
                title={name}
                to={{ pageName: "pageEdit", parameters: { id } }}
              />
            )}
          />
        </EntityListSubTree>
      </DataBindingProvider>
    </Menu.Item>
    <Menu.Item>
      <Menu.Item title={locale["List of pages"]} to="pageList" />
      <Menu.Item title={locale["Create new page"]} to="pageCreate" />
    </Menu.Item>
    <Menu.Item title={locale["Notifications"]}>
      <Menu.Item title={locale["Notification list"]} to="notificationList" />
      <Menu.Item
        title={locale["Create notification"]}
        to="notificationCreate"
      />
    </Menu.Item>
    <Menu.Item title="Uživatel">
      <Menu.Item title="Změnit heslo" href="/_panel/security" />
      <Menu.Item title={locale["Settings"]} to="settings" />
      <LogoutLink>
        <Menu.Item title={locale["Log out"]} />
      </LogoutLink>
    </Menu.Item>
  </Menu>
);
