import React, { FC } from 'react'
import Background from '../../molecules/Background'
import Footer from '../../organisms/Footer'
import styles from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>

        <Footer />
      </div>

      <Background />
    </>
  )
}

export default Layout
