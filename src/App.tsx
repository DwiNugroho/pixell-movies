import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  useLocation,
} from 'react-router-dom';
import routes from '@/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};

const App: React.FC = () => {
  return (
    <section className="width--100">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <>
                  <ScrollToTop />
                  <React.Suspense fallback={<div></div>}>
                    {route.template ? (
                      <route.template>
                        <route.component {...props} {...(route.props || {})} />
                      </route.template>
                    ) : (
                      <route.component {...props} {...(route.props || {})} />
                    )}
                  </React.Suspense>
                </>
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default App;
