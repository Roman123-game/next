import Link from "next/link"
import Maincontainer from "../components/Maincontainer";
const Users = ({users}) => {

  return (
    <Maincontainer  keywords={'users'}>
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a> {user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Maincontainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}