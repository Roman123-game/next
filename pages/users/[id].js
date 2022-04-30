import { useRouter } from "next/router"
import Maincontainer from "../../components/Maincontainer";
import styles from "../../styles/user.module.scss"

export default function User({user}){
    const router = useRouter();
return(
    <Maincontainer  keywords={user.name}>
    <div className={styles.user}>
    <h1 >user ID: {router.query.id}</h1>
    <h1>userName: {user.name}</h1>
    </div>
    </Maincontainer>
)
};


  export async function getServerSideProps(context) {
      console.log(context.params)
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user = await responce.json();
    return {
        props: {user}, // will be passed to the page component as props
      }
    }