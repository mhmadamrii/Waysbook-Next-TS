import React, { useState } from 'react'
import Head from 'next/head'
import Background from '../../components/background'
import NavbarUser from '../../components/navbar'
import styles from "./auth.module.css"
import { useTranslation } from "react-i18next";


const Auth: React.FC = () => {
  const [isLoginUser, setIsLoginUser] = useState<boolean>(true)
  const { t, i18n } = useTranslation();

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
            <h1>{t("common_thumbnail_one")}</h1>
            <h1>{t("common_thumbnail_two")}</h1>
          </div>
        </div>
      </main>
      <div></div>
    </>
  )
}

export default Auth
