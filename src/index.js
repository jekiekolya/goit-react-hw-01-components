import React from 'react';
import ReactDOM from 'react-dom/client';

// Import components
import { App } from 'components/PageTitle/App';
import { Profile } from './components/Profile/Profile';
import { UserStats } from './components/Profile/UserStats/UserStats';
import { Statistics } from './components/Statistics/Statistics';
import './index.css';

// import data
import user from './data/user.json';
import data from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      >
        <UserStats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Profile>
      <Statistics title="Upload stats" stats={data} />
    </App>
  </React.StrictMode>
);
