import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const isLoggedIn = {
    firstName: 'Kirby',
    lastName: 'Craft',
    email: 'kirdua@test.com',
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={isLoggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        {/*RECENT TRANSACTIONS*/}
      </div>
      <RightSidebar
        user={isLoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
      />
    </section>
  )
}

export default Home
