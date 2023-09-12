exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/slack',
    toPath: 'https://join.slack.com/t/campjs/shared_invite/zt-20vvhgd7l-VuFbFb2C695mBARU5jWoSg',
  })
}