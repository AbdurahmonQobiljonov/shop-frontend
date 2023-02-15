/// <reference types="react-scripts" />

declare module 'react-lazy-load'
declare module '*.md'
declare module '*.jpg' {
  const value: string
  export = value
}

declare interface XPayStationWidget {
  init: (options) => void
  open: () => void
  on: (events, handler) => void
  off: (events, handler) => void
  eventTypes: {
    CLOSE: 'close'
    CLOSE_LIGHTBOX: 'close-lightbox'
    CLOSE_WINDOW: 'close-window'
    INIT: 'init'
    LOAD: 'load'
    OPEN: 'open'
    OPEN_LIGHTBOX: 'open-lightbox'
    OPEN_WINDOW: 'open-window'
    STATUS: 'status'
    STATUS_DELIVERING: 'status-delivering'
    STATUS_DONE: 'status-done'
    STATUS_INVOICE: 'status-invoice'
    STATUS_TROUBLED: 'status-troubled'
  }
}

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'

  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}