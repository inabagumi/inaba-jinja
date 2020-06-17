import Link from 'next/link'
import React, { FC } from 'react'

import Logo from '@/components/atoms/Logo'

const Header: FC = () => (
  <>
    <header className="header">
      <Link href="/" prefetch={false}>
        <a className="brand" href="/">
          <Logo aria-label="因幡神社" />
        </a>
      </Link>
    </header>

    <style jsx>{`
      .brand {
        color: inherit;
        font-size: 2rem;
      }

      .brand:hover {
        color: inherit;
      }

      .header {
        margin: 0 auto;
        max-width: 100%;
        width: 800px;
      }
    `}</style>
  </>
)

export default Header
