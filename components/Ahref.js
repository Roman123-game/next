import Link from "next/link";
import styles from "../styles/Ahref.module.css"
export default function Ahref ({href,text}){
    return(
        <Link  href={href}>
        <a className={styles.link}>{text}</a>
        </Link>
    )
}