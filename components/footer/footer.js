import theme from '../styles/theme';
function Footer() {
  return (
    <footer>
      <p>
        Proudly built with <a href="https://nextjs.org">Next.js</a> -{" "}
        <a href="https://www.facebook.com/linuxer41">RSS Feed</a>
      </p>
      <style jsx>{`
        footer {
          padding: 1em 0;
          margin-left: auto!important;
          margin-right: auto!important;
          max-width: ${theme.size.maxWidth}!important;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        p {
          margin-top: 2em;
        }
      `}</style>
    </footer>
  );
}

export default Footer;