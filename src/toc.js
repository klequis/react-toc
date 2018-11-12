import ChapterOne from './ChapterOne'
import ChapterTwo from './ChapterTwo'
import ChapterOne01 from './ChapterOne01'
import ChapterOne02 from './ChapterOne02'
// import ChapterThree from './ChapterThree'
import Home from './Home'
import { merge } from 'ramda'

const meta = {
  home: {
    title: 'Home',
    path: '/home',
  },
  'ch-1': {
    title: 'Chapter-1',
    path: '/ch-1',
  },
  'ch-1-1': {
    title: 'Chapter-1-1',
    path: '/ch-1-1',
  },
  'ch-1-2': {
    title: 'Chapter-1-2',
    path: '/ch-1-2',
  },
  'ch-2': {
    title: 'Chapter-2',
    path: '/ch-2',
  },
  'ch-2-1': {
    title: 'Chapter-2-1',
    path: '/ch-2-1',
  },
}

const components = [
  {
    id: 'home',
    component: Home,
  },
  {
    id: 'ch-1',
    component: ChapterOne
  },
  {
    id: 'ch-1-1',
    component: ChapterOne01
  },
  {
    id: 'ch-1-2',
    component: ChapterOne02
  },
  {
    id: 'ch-2',
    component: ChapterTwo
  }
  // {
  //   id: 'ch3',
  //   component: ChapterThree
  // }
]

const routes = components.map(c => merge(c, meta[c.id]))

export default routes
