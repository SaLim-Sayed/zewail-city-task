import React from 'react';
import "react-toastify/dist/ReactToastify.css";
 
import UserList from './Components/User/UserList';
import { users } from './data/data';
import Heading from './Components/UI/Heading';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <div >
      <Heading title="Users List"   />
      <UserList users={users} />
      <ToastContainer
        position={"bottom-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
