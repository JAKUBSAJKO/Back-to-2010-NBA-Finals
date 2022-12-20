import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Introduction from "./pages/Introduction";
import { Info } from "./pages/introduce/Info";
import { User } from "./pages/introduce/User";
import { Roles } from "./pages/introduce/Roles";
import { Start } from "./pages/introduce/Start";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Introduction />} />
          <Route path={routes.info} element={<Info />} />
          <Route path={routes.user} element={<User />} />
          <Route path={routes.roles} element={<Roles />} />
          <Route path={routes.start} element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
