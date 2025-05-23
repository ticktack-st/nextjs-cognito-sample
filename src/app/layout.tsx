import Link from 'next/link'

import { Button } from '@/components/ui/button'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>提出サイト的なもの</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* <!-- ヘッダ --> */}
        <header className="bg-gray-300 w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* <!-- ロゴ部分 --> */}
              <div className="flex-shrink-0">
                <Link className="text-xl font-semibold text-gray-900" href="#">
                  弊社
                </Link>
              </div>

              {/* <!-- アクションボタン --> */}
              <div className="flex items-center space-x-4">
                <Button className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-600">
                  ログイン
                </Button>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
