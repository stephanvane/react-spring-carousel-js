import React from 'react'
import { useFadingCarousel } from 'react-spring-carousel-js'

const App = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    getIsPrevItem
  } = useFadingCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div
            style={{
              background: 'red',
              padding: 8
            }}
          >
            Item 1
          </div>
        ),
        renderThumb: (
          <div
            style={{
              height: 200,
              padding: '8px 16px',
              background: 'blue',
              width: 160
            }}
          >
            THUMB 1
          </div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div
            style={{
              background: 'yellow',
              padding: 8
            }}
          >
            Item 2
          </div>
        ),
        renderThumb: (
          <div
            style={{
              height: 200,
              padding: '8px 16px',
              background: 'blue',
              width: 160
            }}
          >
            THUMB 2
          </div>
        )
      },
      {
        id: 'item-3',
        renderItem: (
          <div
            style={{
              background: 'green',
              padding: '8px 16px'
            }}
          >
            Item 3
          </div>
        ),
        renderThumb: (
          <div
            style={{
              height: 200,
              padding: '8px 16px',
              background: 'blue',
              width: 160
            }}
          >
            THUMB 3
          </div>
        )
      }
    ]
  })

  console.log(getIsPrevItem('item-2'))

  return (
    <div
      style={{
        display: 'flex',
        padding: 24,
        background: 'orange'
      }}
    >
      <button onClick={slideToPrevItem}>PREV</button>
      <div
        style={{
          width: '100%',
          height: 500
        }}
      >
        <div style={{ margin: '0 32px', flex: 1 }}>{carouselFragment}</div>
      </div>
      <button onClick={slideToNextItem}>NEXT</button>
    </div>
  )
}

export default App
