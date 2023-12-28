import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { RootState } from '@/features/store'
import { UserData } from '@/features/types/types'
import clsx from 'clsx'

import s from './user-card.module.scss'

export const UserCard = () => {
  const userData = useSelector<RootState, UserData>(state => state.card.userData)
  const classNames = {
    container: clsx(s.container),
    containerData: clsx(s.containerData),
    containerLink: clsx(s.containerLink),
    link: clsx(s.link),
    title: clsx(s.title),
  }

  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>Ваш заказ оформлен успешно!</h1>
      <div className={classNames.containerData}>
        <h2>{userData.userName}</h2>
        <p>
          <b>Адресс доставки:</b> {userData.address}
        </p>
        <p>
          <b>Ваш номер для связи:</b> {userData.telephone}
        </p>
        <p>
          <b>Чек отправлен на</b> {userData.email}
        </p>
      </div>
      <div className={classNames.containerLink}>
        <NavLink className={classNames.link} to={'/'}>
          В каталог
        </NavLink>
      </div>
    </div>
  )
}
