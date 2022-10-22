import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <p className={styles.blueBaby} >Hi I am Megan, I make neat things with code now and I love it!</p>

            <Image 
                src='/retouched_Megan.png'
                alt='Megan'
                width={350}
                height={300}
             />   
             
        </div>
    )
}