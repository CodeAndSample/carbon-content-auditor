import React, { Children } from "react";
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
import {
  Chemistry16,
  TrafficCone16,
  Document16,
  Http16,
} from "@carbon/icons-react";
import SingleText from "./WebsiteAnalysis";

type DashboardLayoutProps = {
  children: React.ReactNode;
  linkActive: Number;
};

export default function Layout({ children, linkActive }: DashboardLayoutProps) {
  console.log(linkActive);
  console.log("test");
  let reactItem = (
    <SideNavItems>
      <SideNavLink renderIcon={Chemistry16} href="/" aria-current="page">
        Einen Text analysieren
      </SideNavLink>
      <SideNavLink renderIcon={Document16} href="/mehrere-texte">
        Mehrere Texte analysieren
      </SideNavLink>
      <SideNavLink renderIcon={Http16} href="/website-analysieren">
        Website analysieren
      </SideNavLink>
      <SideNavLink renderIcon={TrafficCone16} href="https://ibm.com">
        In Entwicklung
      </SideNavLink>
    </SideNavItems>
  );

  if (linkActive == 2) {
    console.log("Death");
    reactItem = (
      <SideNavItems>
        <SideNavLink renderIcon={Chemistry16} href="/">
          Einen Text analysieren
        </SideNavLink>
        <SideNavLink
          renderIcon={Document16}
          href="/mehrere-texte"
          aria-current="page"
        >
          Mehrere Texte analysieren
        </SideNavLink>
        <SideNavLink renderIcon={Http16} href="/website-analysieren">
          Website analysieren
        </SideNavLink>
        <SideNavLink renderIcon={TrafficCone16} href="https://ibm.com">
          In Entwicklung
        </SideNavLink>
      </SideNavItems>
    );
  }
  if (linkActive == 3) {
    console.log("Death");
    reactItem = (
      <SideNavItems>
        <SideNavLink renderIcon={Chemistry16} href="/">
          Einen Text analysieren
        </SideNavLink>
        <SideNavLink renderIcon={Document16} href="/mehrere-texte">
          Mehrere Texte analysieren
        </SideNavLink>
        <SideNavLink
          renderIcon={Http16}
          href="/website-analysieren"
          aria-current="page"
        >
          Website analysieren
        </SideNavLink>
        <SideNavLink renderIcon={TrafficCone16} href="https://ibm.com">
          In Entwicklung
        </SideNavLink>
      </SideNavItems>
    );
  }
  return (
    <div className="container">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Carbon Content Auditor">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Carbon">
                Content Auditor
              </HeaderName>
              <HeaderGlobalBar></HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
              >
                {reactItem}
              </SideNav>
            </Header>
            <main>{children}</main>
          </>
        )}
      />
    </div>
  );
}
