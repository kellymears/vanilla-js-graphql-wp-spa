const _ = require('lodash')

module.exports = ({
  addComponents,
  theme,
  e,
}) => {
  const screens = theme('screens', {})
  const maxWidth = theme('maxWidth', {})
  const blockContainer = {
    '.entry-content > .wp-block-wrap:not(.wp-block-full-wrap,.wp-block-wide-wrap)': {
      maxWidth: maxWidth.lg,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '25px',
      paddingRight: '25px',
      [`@media (min-width: ${screens.md})`]: {
        maxWidth: maxWidth['3xl'],
      },
      [`@media (min-width: ${screens.lg})`]: {
        maxWidth: maxWidth['4xl'],
      },
      [`@media (min-width: ${screens.xl})`]: {
        maxWidth: maxWidth['4xl'],
      },
    },
    '.entry-content > .wp-block-full-wrap > .alignfull': {
      width: '100%',
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    '.entry-content > .wp-block-wide-wrap > .alignwide': {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      [`@media (min-width: ${screens.md})`]: {
        maxWidth: maxWidth['4xl'],
      },
      [`@media (min-width: ${screens.xl})`]: {
        maxWidth: maxWidth['6xl'],
      },
    },
  }

  addComponents(blockContainer)
}
