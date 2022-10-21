import React from 'react';
import ReactDOM from 'react-dom/client';

// Import components
import './index.css';
import { App } from 'components/PageTitle/App';
import { Profile } from './components/Profile/Profile';
import { UserStats } from './components/Profile/UserStats/UserStats';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

// import data
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <div>Ex-1</div>
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
      <div>Ex-2</div>
      <Statistics title="Upload stats" stats={data} />
      <div>Ex-3</div>
      <FriendList friends={friends} />
      <div>Ex-4</div>
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
