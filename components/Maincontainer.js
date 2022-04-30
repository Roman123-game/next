import Head from "next/dist/shared/lib/head"
import Ahref from "../components/Ahref"

const Maincontainer = ({children, keywords}) => {
  return (
      <div>
      <Head>
      <meta keyword={"rb, next.js"+keywords}></meta>
      <title>mainPage</title>
      </Head>
      <div className="navbar">
       <Ahref href="/" text={'MainPage'}></Ahref>
     <Ahref href="/users" text={'Users'}></Ahref>
        </div>
     <div>
     {children}
      </div>
      <style jsx>
      {`
      .navbar {
        display:  block;
        width: 100% ;
          background: lightgreen;
          padding:15px;
      }
     
      `}
      </style>
        </div>
  )
}

export default Maincontainer