import type { Metadata } from ‘next’
import ‘./globals.css’
export const metadata: Metadata = {
title: ‘СВЕТ ВНУТРИ / Light Within’,
description: ‘Честный разговор про тело, удовольствие и свободу’,
keywords: [‘self-discovery’, ‘game’, ‘manifesto’, ‘freedom’, ‘body’],
authors: [{ name: ‘ARVEN’ }],
openGraph: {
title: ‘СВЕТ ВНУТРИ / Light Within’,
description: ‘Честный разговор про тело, удовольствие и свободу’,
url: ‘https://svet-vnutri.com’,
siteName: ‘СВЕТ ВНУТРИ’,
locale: ‘ru_RU’,
type: ‘website’,
},
twitter: {
card: ‘summary_large_image’,
title: ‘СВЕТ ВНУТРИ / Light Within’,
description: ‘Честный разговор про тело, удовольствие и свободу’,
},
}
export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="ru">
<head>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
{children}
</body>
</html>
)
}
