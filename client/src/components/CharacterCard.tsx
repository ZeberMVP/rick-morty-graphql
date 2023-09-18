import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export default function CharacterCard({
	name,
	image,
}: {
	name: string
	image: string
}) {
	return (
		<Card style={{}}>
			<Image
				alt='Humano de Rick y Morty'
				src={image}
				width={640}
				height={640}
				style={{
					maxWidth: '100%',
					height: '400px',
					objectFit: 'cover',
				}}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
			</CardContent>
		</Card>
	)
}
