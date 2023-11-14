import Link from 'next/link'
import { Inter } from '@next/font/google'

import styles from '../page.module.css'
import secondaryStyles from './styles.module.css'
const inter = Inter({ subsets: ['latin'] })

const About = () => {
    // throw new Error('not Today')
    return (
        <div className={styles.main}>
            <div className={secondaryStyles.center}>
                <h1 className={inter.className}>About</h1>
            </div>
            <Link href={'/'}>Link to Home Page</Link>
        </div>
    )
}
export default About