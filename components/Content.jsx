import SanityBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { config } from '../lib/client'

const Content = ({ body }) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }

  return (
    <>
      <SanityBlockContent
        blocks={body}
        serializers={serializers}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={config.projectId}
        dataset={config.dataset}
      />
    </>
  )
}

export default Content
