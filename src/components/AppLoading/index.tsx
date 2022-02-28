import { AppHeaderSecondary, AppLayout } from "../layouts";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import AppAnimate from "../AppAnimate";

function AppLoading() {
	return (
		<AppLayout>
			<AppHeaderSecondary title="" logo={<Box boxSize={6}></Box>} />
			<AppAnimate>
				<Box
					display="flex"
					flexDir="column"
					minH="100vh"
					bg="gray.100"
					h="100%"
					justifyContent="center"
					px={2}
				>
					<Box padding="6" boxShadow="lg" bg="white">
						<SkeletonCircle size="10" />
						<SkeletonText mt="4" noOfLines={4} spacing="4" />
						<SkeletonText mt="4" noOfLines={4} spacing="4" />
					</Box>
				</Box>
			</AppAnimate>
		</AppLayout>
	);
}

export default AppLoading;
