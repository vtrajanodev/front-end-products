import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Cadastro de Produtos'

export default class MainTitle extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        ...
      </>
    )
  }
}
