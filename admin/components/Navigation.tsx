import * as React from "react";
import {
  Menu,
  LogoutLink,
  DataBindingProvider,
  EntityListSubTree,
  FieldView,
  FeedbackRenderer,
  Link,
} from "@contember/admin";
import locale from "../locales";
import { UserBox } from "./userBox";
export const Navigation = () => (
  <Menu>
    <Menu.Item>
      <UserBox />
    </Menu.Item>
    <Menu.Item title={locale["Dashboard"]} to="index" />
    <Menu.Item title={locale["Pages"]}>
      <DataBindingProvider
        stateComponent={FeedbackRenderer}
        refreshOnEnvironmentChange={false}
      >
        <EntityListSubTree entities="Page" orderBy="title">
          <FieldView
            fields={["title", "id"]}
            render={({ value: title }, { value: id }) => (
              <Menu.Item
                title={title}
                to={{ pageName: "pageEdit", parameters: { id } }}
              />
            )}
          />
        </EntityListSubTree>
      </DataBindingProvider>
    </Menu.Item>
    <Menu.Item>
      <Menu.Item title={locale["Pages"]} to="pageList" />
      <Menu.Item title={locale["Create new page"]} to="pageCreate" />
    </Menu.Item>
    <Menu.Item>
      <Menu.Item title={locale["Notifications"]} to="notificationList" />
      <Menu.Item
        title={locale["Create notification"]}
        to="notificationCreate"
      />
    </Menu.Item>
    <Menu.Item title="Uživatel">
      <Menu.Item title="Změnit heslo" href="/_panel/security" />
      <Menu.Item title={locale["Settings"]} to="settings" />

      <Link to="index" title="Odhlásit se">
        <Menu.Item title="Odhlásit se" />
      </Link>
      {/* <LogoutLink>
        <Menu.Item title="Odhlásit se - neklikat" /> 
      </LogoutLink> */}
    </Menu.Item>
  </Menu>
);
