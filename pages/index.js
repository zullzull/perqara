import ProductItem from '@/components/commerce/ProductItem';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import LayoutDefaults from '@/layouts/default'
import { useEffect, useState } from 'react';

export default function Home() {
  const [ order, setOrder ] = useState('Popularity')
  const [loading, setLoading] = useState(true)

  const buttons = [
    {
      name: 'Popularity',
      slug: 'popularity'
    },
    {
      name: 'Release Date',
      slug: 'release-date'
    }
  ]

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])
  
  const doOrder = (name)=> {
    setOrder(name)
  }

  return (
    <div className=''>
      <Hero />
      <section className='DiscoverMovie bg-primary-gradient'>
          <div className='wrapper-fluid pt-[89px]'>
            <div className='OrderDiscover flex items-center justify-between'>
              <Title name="Discover Movie" />
              <div className='flex space-x-4'>
                {
                  buttons.map((item, i) => (
                    <button key={i} onClick={()=>doOrder(item.name)} className={`capitalize px-4 py-2 rounded-[32px] text-pq-gray text-sm leading-4 font-semibold transition duration-200 ease-in-out ${item.name == order ? 'bg-pq-red' : 'bg-pq-primary'}`}>{item.name}</button>
                  ))
                }
              </div>
            </div>
            <div className='ListDiscover grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 py-11'>
              {
                loading ? 
                Array(5).fill('zull').map((item, i)=>(
                  <div key={i} className='flex flex-col space-y-2 animate-pulse'>
                    <div className='w-full h-64 rounded-sm bg-pq-footer'></div>
                    <div className='w-1/2 h-8 rounded-sm bg-pq-footer'></div>
                    <div className='w-1/4 h-4 rounded-sm bg-pq-footer'></div>
                  </div>
                )) :
                Array(10).fill('zull').map((item, i)=>(
                  <ProductItem key={i} />
                ))
              }
            </div>
          </div>
      </section>
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <LayoutDefaults>
      {page}
    </LayoutDefaults>
  );
};