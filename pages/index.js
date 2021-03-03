import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import clockActions from '../redux/clockModule/index'
import Examples from '../components/examples'


const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clockActions.startClock())
  }, [dispatch])

  return (
    <>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  )
}

export default Index
