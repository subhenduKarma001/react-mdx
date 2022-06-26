import React, { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { CopyIcon } from "../components/assets/Icons"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const Code = ({ children, language }) => {
  const [copy, setCopy] = useState(false)
  return (
    <div className="code relative">
      <CopyToClipboard text={children} onCopy={() => setCopy(true)}>
        <button className="icon absolute z-10 top-6 right-6">
          <CopyIcon />
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
