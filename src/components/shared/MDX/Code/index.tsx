import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Code = ({
  className,
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  if (!className) {
    return <code>{children}</code>
  }

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code
