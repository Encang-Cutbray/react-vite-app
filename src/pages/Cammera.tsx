import Webcam from "react-webcam";
import * as faceApi from "face-api.js";
import { Box, Text } from "@chakra-ui/react";

import {
	ReactEventHandler,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import AppAnimate from "../components/AppAnimate";
import { AppFooter, AppHeader, AppLayout } from "../components/layouts";

import MenuContext, { AppMenuType } from "../state/menu-context";

function Cammera() {
	const [webcamReady, setWebcamReady] = useState(false);
	const { menus } = useContext<AppMenuType>(MenuContext);
	const webcamRef = useRef<Webcam>(null);
	const boxWebcam = useRef<HTMLDivElement>(null);
	const fixwebcam = useRef<HTMLVideoElement>(null);

	const handleCamera = async (e: any) => {
		console.log(webcamRef.current?.video?.width);
		console.log(webcamRef.current?.video?.height);

		const canvas = faceApi.createCanvasFromMedia(
			webcamRef.current?.video as HTMLVideoElement
		);

		boxWebcam.current?.append(canvas);
		const displaySize = {
			width: webcamRef.current?.video?.offsetWidth as number,
			height: webcamRef.current?.video?.offsetHeight as number,
		};

		faceApi.matchDimensions(canvas, displaySize);

		setInterval(async () => {
			console.log(webcamRef.current?.video);
			const detection = await faceApi
				.detectAllFaces(
					webcamRef.current?.video as HTMLVideoElement,
					new faceApi.TinyFaceDetectorOptions()
				)
				.withFaceLandmarks()
				.withFaceExpressions();
			console.log(detection);

			// const resizedDetections = faceApi.resizeResults(
			// 	detection,
			// 	displaySize
			// );

			// canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height)
			// faceApi.draw.drawDetections(canvas, resizedDetections);
			// faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);
			// faceApi.draw.drawFaceExpressions(canvas, resizedDetections);
		}, 1000);
	};

	const fuckCam = async () => {
		console.log("fuckCam");
		const canvas = await faceApi.createCanvasFromMedia(
			fixwebcam.current as HTMLVideoElement
		);
		boxWebcam.current?.append(canvas);
		const displaySize = {
			width: fixwebcam.current?.width as number,
			height: fixwebcam.current?.height as number,
		};
		faceApi.matchDimensions(canvas, displaySize);

		setInterval(async () => {
			// console.log(fixwebcam.current);
			console.log(typeof HTMLVideoElement);
			
			const detection = await faceApi
				.detectAllFaces(
					fixwebcam.current as HTMLVideoElement,
					new faceApi.TinyFaceDetectorOptions()
				)
				.withFaceLandmarks()
				.withFaceExpressions();
			console.log(detection);
			// const resizedDetections = faceApi.resizeResults(
			// 	detection,
			// 	displaySize
			// );

			// canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height)
			// faceApi.draw.drawDetections(canvas, resizedDetections);
			// faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);
			// faceApi.draw.drawFaceExpressions(canvas, resizedDetections);
		}, 1000);
	};

	useEffect(() => {
		console.log('ds');
		
		const loadModels = () => {
			Promise.all([
				faceApi.nets.tinyFaceDetector.loadFromUri("/models"),
				faceApi.nets.faceLandmark68Net.loadFromUri("/models"),
				faceApi.nets.faceRecognitionNet.loadFromUri("/models"),
				faceApi.nets.faceExpressionNet.loadFromUri("/models"),
			])
				.then(async () => {
					let userMedia = await navigator.mediaDevices.getUserMedia({
						audio: false,
						video: true,
					});
					fixwebcam.current!.srcObject = userMedia;
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fixwebcam.current && loadModels();

		return () => {};
	}, []);

	return (
		<AppLayout>
			<AppHeader />
			<AppAnimate>
				<Box minH="100vh" h="full" bg="gray.100" pt={16}>
					<Text textAlign="center">Camera</Text>
					<Box m={2} ref={boxWebcam}>
						<video
							onPlay={fuckCam}
							width="560"
							height="560"
							autoPlay
							muted
							ref={fixwebcam}
						></video>

						{/* {webcamReady && (
							<Webcam
								width="720"
								height="560"
								autoPlay
								audio={false}
								onPlay={handleCamera}
								ref={webcamRef}
								videoConstraints={{ facingMode: "user" }}
								mirrored
							/>
						)} */}
					</Box>
					<Box m={2} ref={boxWebcam}>
						kopi
					</Box>
				</Box>
			</AppAnimate>

			<AppFooter footerMenu={menus.bottom} />
		</AppLayout>
	);
}

export default Cammera;
