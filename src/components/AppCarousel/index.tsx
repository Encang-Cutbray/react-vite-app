import {
	Box,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Text,
	Flex,
	Spacer,
	Link,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 464 },
		items: 1,
	},
};

function AppCarousel() {
	return (
		<Box>
			<Carousel responsive={responsive}>
				{new Array(20).fill(20).map((_, index) => (
					<Box
						bg="white"
						mx={2}
						p={2}
						rounded="md"
						shadow="md"
						mt={3}
						key={index}
					>
						<Stat>
							<StatLabel textAlign="center">
								Account {index + 1}
							</StatLabel>
							<StatLabel>Collected Fees</StatLabel>
							<Flex>
								<StatNumber fontSize="md">£0.00</StatNumber>
								<Spacer />
								<StatHelpText color="blue.500">
									Feb 12 - Feb 28
								</StatHelpText>
							</Flex>
						</Stat>
					</Box>
				))}
			</Carousel>
		</Box>
	);
}

export default AppCarousel;
