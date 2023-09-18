'use client'

import Grid from '@mui/material/Unstable_Grid2'
import CharacterCard from './CharacterCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const CharactersGrid = () => {
	const [page, setPage] = useState(1)
	const [humans, setHumans] = useState([])
	const [loading, setLoading] = useState(false)

	const getHumans = async () => {
		try {
			const response = await axios.post('http://localhost:3001/graphql', {
				query: `
          {
              humans(page: ${page}) {
			          id
			          name
			          image
		            }
              }
          `,
				variables: { page },
			})
			setHumans(response.data.data.humans)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		getHumans()
	}, [page])

	return (
		<>
			<ButtonGroup color='success'>
				<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
					Anterior
				</Button>
				<Button
					onClick={() => setPage(page + 1)}
					disabled={!loading && !humans.length}
				>
					Siguiente
				</Button>
			</ButtonGroup>
			<div
				style={{
					textAlign: 'center',
					marginTop: '10px',
					marginBottom: '20px',
				}}
			>
				{loading
					? 'Buscando humanos...'
					: humans.length > 0
					? 'Todos estos son humanos'
					: 'No hay más humanos'}
			</div>

			<Grid container rowSpacing={1} columnSpacing={1}>
				{humans?.map((human: { id: number; name: string; image: string }) => (
					<Grid xs={6} key={human.id}>
						<CharacterCard name={human.name} image={human.image} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default CharactersGrid
