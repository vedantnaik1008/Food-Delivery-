import useUserInfo from "../hooks/useUserInfo";

const Home = () => {
 const { userData } = useUserInfo()

 if (!userData) {
     return <div>Loading...</div>;
 }

  return (
      <>
          Home
          <div>
              <h1>User Profile</h1>
              {/* Render user data */}
              <p>Name: {userData.fullname}</p>
              <p>Email: {userData.email}</p>
              {/* Add more fields as necessary */}
          </div>
      </>
  );
}

export default Home
