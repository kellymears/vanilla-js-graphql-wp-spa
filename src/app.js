import Navigo from 'navigo'
import { ready } from './js/utils'
import { post } from './js/post'
import { page } from './js/page'
import { footer } from './js/footer'

let router = new Navigo(window.location.hostname)

router.on({
  'stories/:slug': (params) => post(params.slug),
  ':slug': (params) => page(params.slug),
}).resolve()

ready(() => {
  footer()
})
