const page = slug => {
  fetch('https://ndncollective.valet/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
          pages(where: {name: "${slug}"}) {
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
    console.log(res)
    res.data.pages.edges.map(edge => {
      const content = document.getElementById('content')
      content && (
        document.title = edge.node.title,
        content.innerHTML = edge.node.content
      )
    })
  })
}

export { page }