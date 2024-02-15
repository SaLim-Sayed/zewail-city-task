import React, { Suspense } from 'react';
import "react-toastify/dist/ReactToastify.css";
 
import UserList from './Components/User/UserList';
import  users  from './data/user.json';
import Heading from './Components/UI/Heading';
import { ToastContainer } from 'react-toastify';
import Navbar from "./Components/Layouts/Navbar";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar  />
        <div className="mt-24">
          <Heading title="Users List" />
          <UserList users={users} />
        </div>
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
    </Suspense>
  );
};

export default App;
