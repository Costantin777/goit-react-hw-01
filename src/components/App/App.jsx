import "modern-normalize";
import "/src/components/index.css";
import userData from "/src/components/userData.json";
import friendsData from "/src/components/friends.json";
import transactionsData from "/src/components/transactions.json";
import Profile from "/src/components/Profile/Profile";
import FriendList from "/src/components/FriendsList/FriendsList";
import TransactionHistory from "/src/components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </>
  );
}
