'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const DynamicHero = dynamic(() => import('./Hero'), { ssr: false })

export default function ClientHero() {
  return <DynamicHero />
}

