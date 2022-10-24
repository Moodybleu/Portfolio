import styles from '../styles/About.module.css'
import Image from "next/image"

export default function projects(){
    return(
        <div>
            <h1>My projects</h1>
            <p>Through-out the course of my Software Engineering journey, I made a handful of projects to practice and display my skills as a developer. These are the projects I worked hard to achieve, and  am proud to share with you today</p>
            <Image className={styles.image}
                src='/Heidi-Says.png'
                alt='Project 1: Heidi Say'
                width={1000}
                height={500}
                />   
            <h2>Heidi Says</h2>
                <p>
                Guess the correct order of colors as they glow on the screen. You have infinite chances to get them all right. Guess an order wrong and heidi will take her tennis balls away and the game will be over.
                </p>
            <Image className={styles.image}
                src='/P2.png'
                alt='Megan'
                width={1000}
                height={500}
             />   
            <h2>A Mile In her Mind</h2>
                <p>A Mile In Her Mind is a word prompt app for people who have experienced some type of trauma in their life. The word prompts will encourage the user to write about their trauma in a way that will help them to overcome the pain or negative emotions they feel towards the event.

                We have science to prove the positive effects of journaling about memories of a traumatic experience. It has been said to aid the healing process and promote serotonin. 
                </p>
            <Image className={styles.image}
                src='/Goal-Digger-wireframe.png'
                alt='Megan'
                width={1000}
                height={500}
             /> 

            <h2>Goal Digger</h2>
            <p>A one stop shop for all your bucket list ideas! Plan your future goals and keep track of those completed. Get inspired by a random bucket list idea or add your own item.</p>    
        </div>
    )
}