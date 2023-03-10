import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw, { styled } from 'twin.macro';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<p className="text-6xl text-teal-600">Hello Simplified Tailwind</p>
				<br />
				<StyledButton>In Style</StyledButton>
				<br />
				<TailwindButton>In Tailwind Style</TailwindButton>
				<br />
				<ConditionalButton isRed>Conditional Tailwind</ConditionalButton>
				<br />
				<TwinText>Hello there</TwinText>
			</main>
		</div>
	);
}

const TailwindButton = tw.button`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const TwinText = tw.p`
	text-gray-700
	cursor-pointer 
	hover:(text-white bg-zinc-800)
	text-4xl
`;

// still works despite importing from twin.macro
const StyledButton = styled.button`
	background: blue;
	color: white;
	font-size: 1em;
	text-align: center;
	padding: 0.25em 1em;
	border: 2px solid black;
`;

const ConditionalButton = styled.button(({ isRed }) => [
	isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-teal-500 hover:bg-teal-700`,
	tw`
	  text-white
	  font-bold
	  py-2
	  px-4
	  border
	  border-black
	  rounded
	`
]);
