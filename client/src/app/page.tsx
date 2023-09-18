import CharactersGrid from '@/components/CharactersGrid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'

export default function HomePage() {
	return (
		<Box sx={{ display: 'flex' }}>
			<div>
				<Alert severity='success' sx={{ mt: 2, mb: 5 }}>
					<AlertTitle>Bienvenido, Rick</AlertTitle>
					Aquí tienes una lista de los personajes de la serie que son humanos
				</Alert>
				<CharactersGrid />
			</div>
		</Box>
	)
}
