import React from 'react'
import styles from './styles.module.css'
import MyApp from './upload-video'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Component: {text}
    <div>
      <MyApp />
    </div>
  </div>
}
