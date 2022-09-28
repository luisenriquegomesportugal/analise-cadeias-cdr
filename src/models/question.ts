import { Manufacturer } from "./manufacturer"

export type QuestionProps = {
    question: string
    anwser: string
}

export class Question {
    constructor(private props: QuestionProps) {}

    get question() {
        return this.props.question
    }

    get anwser() {
        return this.props.anwser
    }
}