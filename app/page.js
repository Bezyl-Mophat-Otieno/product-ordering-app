import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className={styles.main}>
    <NavBar/>
    <h1>Home</h1>
    </main>
  )
}
