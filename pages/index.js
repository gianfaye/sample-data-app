import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

/*
* Placeholder API for this project:
* https://jsonplaceholder.typicode.com/
* */

export default function Home() {
  const router = useRouter()

  const goToRouteUsers = () => {
    router.push('/users')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Data App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sample Data App
        </h1>
        <button onClick={goToRouteUsers}>View all Users</button>
      </main>
    </div>
  )
}
