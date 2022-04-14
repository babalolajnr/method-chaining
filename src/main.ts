export class Query {
    private statement: string = "";

    select(column?: string, columns?: string[]): this {

        if (!column && !columns) throw new Error("select parameters are empty");

        if (column) this.statement += `SELECT ${column},`

        if (columns)
            if (columns.length > 1)
                columns.forEach((column) => {
                    this.statement.includes('SELECT') ?
                        this.statement += ` ${column},` :
                        this.statement += `SELECT ${column},`
                })

        return this
    }

    from(table: string): this {
        this.statement += ` FROM ${table}`
        return this
    }

    execute(): void {
        console.log(this.statement)
    }
}

const queryString = new Query();
queryString.select(undefined, ['first_name', 'last_name']).from('students').execute()