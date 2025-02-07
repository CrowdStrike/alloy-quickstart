import { ReactElement } from "react";

import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  Title,
} from "@patternfly/react-core";
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PatternflyShim from "./PatternflyShim";

interface ConsolePageProps {
  title: string;
  routes: ConsolePageRoute[];
}

interface ConsolePageRoute {
  path: string;
  title: string;
  element: ReactElement;
}

export default function ConsolePage({ title, routes }: ConsolePageProps) {
  return (
    <PatternflyShim>
      <HashRouter>
        <PageLayout title={title} routes={routes} />
      </HashRouter>
    </PatternflyShim>
  );
}

function PageLayout({ title, routes }: ConsolePageProps) {
  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadBrand>
          <Title headingLevel="h2">{title}</Title>
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  // useLocation can only be used inside of a Router, so we created this separate PageLayout component
  const location = useLocation();
  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>
        <Nav>
          <NavList>
            {routes.map((r) => {
              return (
                <NavItem isActive={r.path === location.pathname}>
                  <NavLink to={r.path}>{r.title}</NavLink>
                </NavItem>
              );
            })}
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar}>
      <Routes>
        {routes.map((r) => {
          return <Route path={r.path} element={r.element} />;
        })}
      </Routes>
    </Page>
  );
}
