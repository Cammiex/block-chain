import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const LandingPage = React.lazy(() =>
  import('./components/pages/LandingPage/LandingPage.jsx')
);
const ListVotersPage = React.lazy(() =>
  import('./components/pages/ListVotersPage/ListVotersPage.jsx')
);
const VotingPage = React.lazy(() =>
  import('./components/pages/VotingPage/VotingPage.jsx')
);

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={'/home'} />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/list-voter" element={<ListVotersPage />} />
            <Route path="/vote" element={<VotingPage />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
