import { Manufacturer } from "./manufacturer"
import { Question } from "./question"

export type ReviewProps = {
    manufacturer: Manufacturer
    questions: Question[]
}

export class Review {
    constructor(private props: ReviewProps) {}

    get manufacturer() {
        return this.props.manufacturer
    }

    get questions() {
        return this.props.questions
    }
}