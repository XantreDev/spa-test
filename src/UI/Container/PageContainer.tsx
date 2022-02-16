import React from 'react'
import Container from './Container';
import styles from './PageContainer.module.scss'

const PageContainer: React.FC<{}> = ({children}) => {
  return (
    <Container className={styles.container}>{children}</Container>
  )
}

export default PageContainer