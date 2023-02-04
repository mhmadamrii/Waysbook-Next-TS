import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Background from '../../components/background'
import NavbarUser from '../../components/navbar'
import styles from './auth.module.css'
import { useTranslation } from 'react-i18next'
import ModalLogin from '../../components/modal-login'
import { ModalLoginContext } from '../../context/modal-context'
import AppBarNavigation from '../../components/app-bar'
import ListBooks from '../../components/list-books'

const Auth: React.FC = () => {
  const [isLoginUser, setIsLoginUser] = useState<boolean>(true)
  const { open, toggleOpen } = useContext(ModalLoginContext)
  const { t, i18n } = useTranslation()

  return (
    <>
      <Head>
        <title>Waysbook | authentication</title>
      </Head>

      <main>
        <Background />
        {isLoginUser ? <NavbarUser /> : null}
        <AppBarNavigation />

        <div className={styles.container}>
          <div className={styles.texts}>
            <h1>{t('common_thumbnail_one')}</h1>
            <h1>{t('common_thumbnail_two')}</h1>
          </div>
        </div>

        <div className={styles.listBooks}>
          <div className={styles.containerLists}>
            <ListBooks />
          </div>
        </div>
      </main>

      <div>
        <ModalLogin />
      </div>
    </>
  )
}

export default Auth
