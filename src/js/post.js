const post = slug => {
  fetch(config.source, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
          posts(where: {name: "${slug}"}) {
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
    res.data.posts.edges.map(edge => {
      const content = document.getElementById('content')
      content && (
        document.title = edge.node.title,
        content.innerHTML = edge.node.content
      )
    })
  })
}

export { post }