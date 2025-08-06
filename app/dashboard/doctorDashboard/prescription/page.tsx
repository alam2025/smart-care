import React from 'react'
import { Suspense } from 'react';
import Prescription from './__components/Prescription'

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Prescription />
    </Suspense>
  )
}

export default page