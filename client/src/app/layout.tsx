import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const metadata = {
	title: 'Humanos de Rick y Morty',
	description: 'Hecho por Rubén Zafra Calzado',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					<AppBar position='fixed' sx={{ zIndex: 2000 }}>
						<Toolbar sx={{ backgroundColor: 'background.paper' }}>
							<DashboardIcon
								sx={{
									color: '#008000',
									mr: 2,
									mt: 0.6,
									transform: 'translateY(-2px)',
								}}
							/>
							<Typography variant='h6' noWrap component='div' color='green'>
								Humanos de Rick y Morty
							</Typography>
						</Toolbar>
					</AppBar>

					<Box
						component='main'
						sx={{
							flexGrow: 1,
							bgcolor: 'background.default',
							width: '1300px',
							ml: `auto`,
							mt: ['48px', '56px', '64px'],
							mr: 'auto',
							p: 3,
						}}
					>
						{children}
					</Box>
				</ThemeRegistry>
			</body>
		</html>
	)
}
