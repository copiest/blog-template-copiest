import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Code = (props: any) => {
  if (props.language) {
    return <SyntaxHighlighter language={props.language} style={vscDarkPlus} {...props} />
  }

  return <SyntaxHighlighter language="javascript" style={vscDarkPlus} {...props} />
}

export default Code
