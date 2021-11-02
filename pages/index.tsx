import Button from '@mui/material/Button'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Layout } from 'components'

const TestPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Button>{t('test')}</Button>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default TestPage
