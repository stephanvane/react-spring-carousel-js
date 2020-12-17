import { SpringConfig, TransitionFrom, TransitionTo } from 'react-spring'
import { ListenToCustomEvent } from '../modules/useCustomEventsModule'

export type ReactSpringCarouselItem = {
  id: string
  renderItem: React.ReactNode
  renderThumb?: React.ReactNode
}

export type TransformCarouselProps<T extends ReactSpringCarouselItem> = {
  withLoop?: boolean
  items: T[]
  draggingSlideTreshold?: number
  springConfig?: SpringConfig
  shouldResizeOnWindowResize?: boolean
  withThumbs?: boolean
  enableThumbsWrapperScroll?: boolean
  carouselSlideAxis?: 'x' | 'y'
  thumbsSlideAxis?: 'x' | 'y'
  thumbsWrapperRef?: React.MutableRefObject<HTMLDivElement | null>
  thumbsMaxHeight?: number
  prepareThumbsData?(items: T[]): T[]
}

export type TransformCarouselContextProps = {
  getIsFullscreen(): boolean
  getIsPrevItem(id: string): boolean
  getIsNextItem(id: string): boolean
  slideToItem(item: string | number): void
  getIsAnimating(): boolean
  getIsDragging(): boolean
  getIsActiveItem(id: string): boolean
  enterFullscreen(elementRef?: HTMLElement): void
  exitFullscreen(): void
  slideToPrevItem(): void
  slideToNextItem(): void
  useListenToCustomEvent: ListenToCustomEvent
}

export type SlideToItemFnProps = {
  item: number
  newIndex?: number
  immediate?: boolean
  onRest?(): void
}

export type SpringAnimationProps<Item> = {
  initial: TransitionFrom<Item>
  from: TransitionFrom<Item>
  enter: TransitionTo<Item>
  leave: TransitionTo<Item>
}

export type TransitionCarouselProps<T extends ReactSpringCarouselItem> = {
  items: T[]
  withThumbs?: boolean
  springConfig?: SpringConfig
  springAnimationPops?: SpringAnimationProps<T>
  withLoop?: boolean
  thumbsSlideAxis?: 'x' | 'y'
  thumbsMaxHeight?: number
  enableThumbsWrapperScroll?: boolean
  draggingSlideTreshold?: number
  onLeftSwipe?(): void
  onRightSwipte?(): void
  prepareThumbsData?(): T[]
}

export type TransitionCarouselContextProps = {
  activeItem: number
  slideToNextItem(): void
  slideToPrevItem(): void
  enterFullscreen(elementRef?: HTMLElement): void
  exitFullscreen(): void
  slideToItem(item: string | number): void
  getIsAnimating(): boolean
  getIsPrevItem(id: string): boolean
  getIsNextItem(id: string): boolean
  useListenToCustomEvent: ListenToCustomEvent
}
