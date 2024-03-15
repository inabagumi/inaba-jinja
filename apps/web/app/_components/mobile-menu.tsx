'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger
} from '@radix-ui/react-dialog'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from '@/components/logo.svg'

type Props = {
  className?: string
}

export default function MobileMenu({ className }: Props) {
  return (
    <Dialog>
      <DialogTrigger
        className={twMerge(
          'm-2 w-10 space-y-1.5 p-2 text-slate-100',
          className
        )}
      >
        <span
          aria-hidden
          className="block h-0.5 w-full rounded-full bg-current"
        />
        <span
          aria-hidden
          className="block h-0.5 w-full rounded-full bg-current"
        />
        <span
          aria-hidden
          className="block h-0.5 w-full rounded-full bg-current"
        />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-20 bg-black/50 transition-opacity" />
        <DialogContent asChild>
          <nav className="fixed inset-y-0 right-0 z-30 grid w-72 max-w-full grid-rows-[1fr_auto] border-l border-slate-400 bg-white">
            <div className="flex flex-col items-center py-2">
              <DialogClose asChild>
                <Link aria-label="因幡神社" className="block" href="/">
                  <Logo aria-hidden className="block h-8 w-auto fill-current" />
                </Link>
              </DialogClose>
            </div>
            <ul
              className="supports-[padding-bottom:env(safe-area-inset-bottom)]:pb-[env(safe-area-inset-bottom,0)]"
              role="menu"
            >
              <li className="border-t border-slate-400" role="menuitem">
                <DialogClose asChild>
                  <Link className="block px-4 py-3 text-right" href="/about">
                    因幡神社とは
                  </Link>
                </DialogClose>
              </li>
              <li className="border-t border-slate-400" role="menuitem">
                <DialogClose asChild>
                  <Link className="block px-4 py-3 text-right" href="/privacy">
                    プライバシーポリシー
                  </Link>
                </DialogClose>
              </li>
              <li className="border-t border-slate-400" role="menuitem">
                <DialogClose asChild>
                  <a
                    className="block px-4 py-3 text-right"
                    href="https://haneru.dev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    運営者情報
                  </a>
                </DialogClose>
              </li>
            </ul>
          </nav>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
