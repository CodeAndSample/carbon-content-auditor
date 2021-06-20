import React from "react";
import { render } from "react-dom";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react/lib/components/UIShell";
import Lesbarkeit from "./Lesbarkeit/Lesbarkeit";
import { Chemistry16, TrafficCone16 } from "@carbon/icons-react";

export interface IAppProps {}

export default function HeaderBaseWNavigationActionsAndSideNav(
  props: IAppProps
) {
  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Carbon Content-Auditor">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Carbon">
                Content-Auditor
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={() => {}}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                <SideNavItems>
                  <SideNavLink
                    renderIcon={Chemistry16}
                    href="/"
                    aria-current="page"
                  >
                    Lesbarkeits-Index
                  </SideNavLink>
                  <SideNavMenu
                    renderIcon={TrafficCone16}
                    title="Under Construction"
                  >
                    <SideNavMenuItem href="https://ibm.com">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://ibm.com">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="https://ibm.com">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                </SideNavItems>
              </SideNav>
            </Header>
            <Lesbarkeit></Lesbarkeit>
          </>
        )}
      />
    </div>
  );
}
