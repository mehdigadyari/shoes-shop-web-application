import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Q1 from '../../assets/images/q1.jpg'
import Q2 from '../../assets/images/q2.jpg'
import Q3 from '../../assets/images/q3.jpg'
import Q4 from '../../assets/images/q4.jpg'
import Item from './Item'

export default function Index() {
  const data = [
    {
      id: 1,
      title: 'اوریجینال',
      image: Q1,
      price: '500,000',
      subTitle: 'توضیحات',
      discount: 15
    },
    {
      id: 2,
      title: 'فیک',
      image: Q2,
      price: '600,000',
      subTitle: 'توضیحات',
      discount: 15
    },
    {
      id: 3,
      title: 'اشغال',
      image: Q3,
      price: '700,000',
      subTitle: 'توضیحات',
      discount: 15
    },
    {
      id: 3,
      title: 'خوبه',
      image: Q4,
      price: '800,000',
      subTitle: 'توضیحات',
      discount: 15
    }
  ]
  return (
    <Carousel>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  )
}
