import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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

const Header = styled.div`
	font-size: 32px;
	text-align: center;
`

const Second = styled.span`
	color: blue;
`

const App: React.FC = () => {
	return (
		<Header>
			<GlobalStyle />
			<Second>New App</Second>
		</Header>
	)
}

export default App
