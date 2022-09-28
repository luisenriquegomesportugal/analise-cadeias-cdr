export type ManufacturerProps = {
    name: string
    email: string
}

export class Manufacturer {
    constructor(private props: ManufacturerProps) {}

    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }
}