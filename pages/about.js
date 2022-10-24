import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <p className={styles.blueBaby} >Hello, My name is Megan. Welcome to my portfolio</p>
            <h2>Skills:</h2>
            <ul>
                <li></li>
            </ul>

            <Image className={styles.image}
                src='/retouched_Megan.png'
                alt='Megan'
                width={350}
                height={300}
             />   
             
        </div>
    )
}