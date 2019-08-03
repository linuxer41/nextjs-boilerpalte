import React from "react"
class GlobalStyles extends React.Component {

    render () {
      return <>
      <style jsx global>
        {`
          html {
            margin: 0;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            margin: 0;
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            color: #333;
            line-height: 1.5;
            background-color: #fff;
          }
          h1,
          h2,
          h3,
          h4 {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: inherit;
            line-height: 1.25;
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            margin-top: 1rem;
            font-size: 1.8rem;
          }
          h3 {
            margin-top: 1.5rem;
            font-size: 1.5rem;
          }
          p {
            margin-top: 0;
            margin-bottom: 1rem;
          }
          ul,
          ol,
          dl {
            margin-top: 0;
            margin-bottom: 1rem;
          }
          a {
            color: #33e;
            cursor: pointer;
          }
          a:hover,
          a:focus {
            text-decoration: underline;
          }
          hr {
            position: relative;
            margin: 1.5em 0;
            border: 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #fff;
          }
          blockquote {
            padding: 0.5em 1em;
            margin: 0.8em 0;
            color: #555;
            border-left: 0.25em solid #ccc;
          }
        `}
      </style>
      </>
    }
  }
export default GlobalStyles;