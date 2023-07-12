import {
	Stack,
	Container,
	Box,
	Flex,
	Text,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react';

export default function Features() {
	return (
		<Box bg={'gray.800'} position={'relative'}>
			<Flex
				flex={1}
				zIndex={0}
				display={{ base: 'none', lg: 'flex' }}
				backgroundImage="url('/templates/stats-grid-with-image.png')"
				backgroundSize={'cover'}
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				position={'absolute'}
				width={'50%'}
				insetY={0}
				right={0}>
				<Flex
					bgGradient={'linear(to-r, gray.800 10%, transparent)'}
					w={'full'}
					h={'full'}
				/>
			</Flex>
			<Container maxW={'7xl'}  zIndex={10} position={'relative'}>
				<Stack direction={{ base: 'column', lg: 'row' }}>
					<Stack
						flex={1}
						color={'gray.400'}
						justify={{ lg: 'center' }}
						py={{ base: 4, md: 20, xl: 60 }}>
						<Box mb={{ base: 8, md: 20 }}>
							<Text
								fontFamily={'heading'}
								fontWeight={700}
								textTransform={'uppercase'}
								mb={3}
								fontSize={'xl'}
								color={'gray.500'}>
								Technology
							</Text>
							<Heading
								color={'white'}
								mb={5}
								fontSize={{ base: '3xl', md: '5xl' }}>
								Smooth Financials
							</Heading>
							<Text fontSize={'xl'} color={'gray.400'}>
								Experience the convenience and peace of mind that Scanly brings. Join thousands of satisfied users and start scanning, organizing, and accessing your receipts effortlessly. Sign up now and enjoy a clutter-free, organized financial life."
							</Text>
						</Box>

						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
							{stats.map((stat) => (
								<Box key={stat.title}>
									<Text
										fontFamily={'heading'}
										fontSize={'3xl'}
										color={'white'}
										mb={3}>
										{stat.title}
									</Text>
									<Text fontSize={'xl'} color={'gray.400'}>
										{stat.content}
									</Text>
								</Box>
							))}
						</SimpleGrid>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}

const StatsText = ({ children }) => (
	<Text as={'span'} fontWeight={700} color={'white'}>
		{children}
	</Text>
);

const stats = [
	{
		title: 'Effortless Scanning',
		content: (
			<>
				Snap photos of your receipts with ease using your phone's camera. Scanly's intuitive interface ensures quick and accurate scanning, capturing every important detail.
			</>
		),
	},
	{
		title: 'Simple Access',
		content: (
			<>
				Say goodbye to cluttered receipts and hours of searching. Scanly helps you effortlessly organize and categorize your scanned receipts, making it simple to find what you need when you need it
			</>
		),
	},
	{
		title: 'Seamless Integration',
		content: (
			<>
				Connect Scanly to your preferred cloud storage service, or utilize our built-in storage solution. Your scanned receipts are securely stored and accessible from any device, ensuring you never lose important
			</>
		),
	},
	{
		title: 'Intelligent Alerts',
		content: (
			<>
				Stay on top of your expenses with Scanly's smart reminders. Receive timely notifications for payment due dates, expense tracking, and more. Gain valuable insights into your spending habits with our smart "Daily Agenda," helping you make informed financial decisions.
			</>
		),
	},
];