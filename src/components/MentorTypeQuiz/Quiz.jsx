import React, { useState } from 'react'

import quiz_questions from './quiz_questions.json'
import styles from './styles.module.css'

import QuizItem from './QuizQuestion'
import QuizResults from './QuizResults'
import { useEffect } from 'react'

export default function Quiz() {
	let uniqueMentorTypes = new Set()
	quiz_questions.forEach((question) => {
		uniqueMentorTypes.add(question.type)
	})

	const [mentorTypes] = useState(Array.from(uniqueMentorTypes))
	const [quizQuestions, setQuizQuestions] = useState([])
	const [quizSubmitted, setQuizSubmitted] = useState(false)
	const [quizResults, setQuizResults] = useState([])
	const [mentorTypeMatch, setMentorTypeMatch] = useState({
		name: '',
		percentage: 0,
	})
	const [userSelection, setUserSelection] = useState([])

	useEffect(() => {
		// Shuffle quiz question order
		setQuizQuestions(quiz_questions.sort(() => Math.random() - 0.5))
	}, [])

	const calculateQuizResults = () => {
		let availableMentorTypesCount = 0
		let selectedMentorTypesCount = 0
		let results = []

		mentorTypes.forEach((mentorType) => {
			availableMentorTypesCount = quizQuestions.filter(
				(question) => question.type === mentorType
			).length

			selectedMentorTypesCount = userSelection.filter(
				(selection) => selection === mentorType
			).length

			let selectionPercentage = Math.round(
				(selectedMentorTypesCount / availableMentorTypesCount) * 100
			)

			results.push({
				name: mentorType,
				percentage: selectionPercentage,
			})
		})

		setQuizResults(results)
	}

	const calculateMentorTypeMatch = () => {
		const bestMentorTypeMatch = Math.max(
			...results.map((result) => {
				return result.percentage
			})
		)

		setMentorTypeMatch(
			results.find((result) => result.percentage === bestMentorTypeMatch)
		)
	}

	const selectAnswer = (answer) => {
		setUserSelection([...userSelection, answer])
	}

	const removeAnswer = (answer) => {
		let answerAdded = userSelection.indexOf(answer)

		if (answerAdded === -1) {
			return
		}

		userSelection.splice(answerAdded, 1)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		calculateQuizResults()
		calculateMentorTypeMatch()
		setQuizSubmitted(true)
	}

	if (quizSubmitted) {
		return (
			<QuizResults
				quizResults={quizResults}
				mentorTypeMatch={mentorTypeMatch}
			/>
		)
	} else {
		return (
			<div className="item shadow--md">
				<form onSubmit={handleSubmit} className={styles.quizQuestions}>
					{quizQuestions.map((props) => (
						<QuizItem
							key={props.text}
							{...props}
							selectAnswer={selectAnswer}
							removeAnswer={removeAnswer}
						/>
					))}

					<button
						className="button button--lg button--primary"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
