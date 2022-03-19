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
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 464 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
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
						shadow="sm"
						mt={3}
						key={index}
					>
						<Stat>
							<StatLabel textAlign="center">Account {index + 1}</StatLabel>
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
