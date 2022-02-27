import { useState } from "react";

import { Box } from "@chakra-ui/react";

// 425px
function App() {
	const [count, setCount] = useState(0);

	return (
		<Box bg="gray.200" maxW="full" minH="100vh" display="flex" justifyContent="center">
			<Box bg="gray.500" maxW="425px" width="100%">{count}</Box>
		</Box>
	);
}

export default App;
