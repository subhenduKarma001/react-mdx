import Markdown from "markdown-to-jsx"
import React, { useEffect, useState } from "react"
import Code from "./Code"

const Posts = () => {
  const [postContent, setPostContent] = useState("")

  useEffect(() => {
    import("../markdown/article.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostContent(response))
        .catch((err) => console.log(err))
    })
  }, [])

  const Div = ({ children }) => {
    return <div>{children}</div>
  }

  return (
    <article className="my-16 mx-0">
      <div className="container mx-6">
        <div className="post-wrapper w-full">
          <h1 className="text-2xl">Posts</h1>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Posts
