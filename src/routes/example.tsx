import { Link } from 'react-router'

import { Button } from '@/components/ui/button'

export default function BPage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='font-medium'>Hello World B</div>
      <Button asChild>
        <Link to='/'>Click me</Link>
      </Button>
    </div>
  )
}
