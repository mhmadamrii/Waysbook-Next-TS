import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Background from '../../components/background'
import NavbarUser from '../../components/navbar'
import styles from './auth.module.css'
import { useTranslation } from 'react-i18next'
import ModalLogin from '../../components/modal-login'
import { ModalLoginContext } from '../../context/modal-context'

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

        <div className={styles.container}>
          <div className={styles.texts}>
            <h1>{t('common_thumbnail_one')}</h1>
            <h1>{t('common_thumbnail_two')}</h1>
          </div>
        </div>
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
          <h1>Do ut eu exercitation in labore duis fugiat. Enim nulla ex ad non fugiat. Reprehenderit cillum nisi nisi incididunt adipisicing in culpa. Deserunt sunt aute minim nulla aute elit adipisicing eu deserunt.</h1>
          <h1>Do ut eu exercitation in labore duis fugiat. Enim nulla ex ad non fugiat. Reprehenderit cillum nisi nisi incididunt adipisicing in culpa. Deserunt sunt aute minim nulla aute elit adipisicing eu deserunt.</h1>
        </div>
      </main>
      <div>
        <ModalLogin />
      </div>
    </>
  )
}

export default Auth
