import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>2022 Ben Do</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer>
    </div>
  )
}

export default MyApp
