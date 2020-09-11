import React from 'react'
import { Layout } from '../../Layout'


export const withLayout = Component => {
  class WithLayout extends React.Component {
    // static displayName = `WithLayout(${Component.displayName || Component.name})`

    render() {
      return (
        <Layout>
          <Component {...this.props} />
        </Layout>
      )
    }
  }

  return WithLayout
}

export default withLayout
