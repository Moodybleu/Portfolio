import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <p className={styles.blueBaby} >Hello, My name is Megan. Welcome to my portfolio</p>
            <Image className={styles.image}
                src='/retouched_Megan.png'
                alt='Megan'
                width={350}
                height={300}
             />   
            <h2>Skills:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Git</li>
                <li>Github</li>
                <li>Postman</li>
                <li>React Native</li>
                <li>MERN stack</li>
                <li>Python</li>
                <li>MongoDB</li>
            </ul>

            
             
        </div>
    )
}