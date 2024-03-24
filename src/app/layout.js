import Header from '../components/Header';
import Container from '../components/Container';

export default function RootLayout({children}) {
    return (
      <html lang="en">
        <head>
          <style>
            {`
              html,body {
                margin: 0;
                padding: 0;
              }
              a {
                text-decoration: none;
                color: #333;
              }
            `}
          </style>
        </head>
        <body>
          <Header></Header>
          <Container>
            {children}
          </Container>
        </body>
      </html>
    )
  }