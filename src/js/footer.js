const footer = fn => {
  fetch('https://ndncollective.valet/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
          blocks(where: {title: "Footer"}) {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }`,
    }),
  })
  .then(res => res.json()).then(res => {
    res.data.blocks.edges.map(edge => {
      const footer = document.getElementById('footer')
      footer && (
        footer.innerHTML = edge.node.content
      )
    })
  })
}

export { footer }
