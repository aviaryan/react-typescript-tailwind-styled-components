import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
	${tw`font-mono text-blue-700 flex h-screen w-100 items-center flex-col justify-center`}
`

const Landing: React.FC = () => (
	<Container>
		<h1>Hello World</h1>
		<span>React, TypeScript, Styled-Components + TailwindCSS - all up now</span>
	</Container>
)

export default Landing
