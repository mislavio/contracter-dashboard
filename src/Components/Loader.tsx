import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const LoadingOverlay: React.FC<{ inverted?: boolean; content?: string }> = ({ inverted = true, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  )
}
LoadingOverlay.propTypes = {
  inverted: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
}

export default LoadingOverlay
