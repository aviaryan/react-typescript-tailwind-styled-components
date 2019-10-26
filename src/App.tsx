import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Landing from './screens/Landing'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 20px;
	}
`

const App: React.FC = () => {
	return (
		<main>
			<GlobalStyle />
			<Landing />
		</main>
	)
}

export default App
