class Query {
    constructor() {
        this.statement = "";
    }
    select(column, columns) {
        if (!column && !columns)
            throw new Error("select parameters are empty");
        if (column)
            this.statement += `SELECT ${column},`;
        if (columns)
            if (columns.length > 1)
                columns.forEach((column) => {
                    this.statement.includes('SELECT') ?
                        this.statement += ` ${column},` :
                        this.statement += `SELECT ${column},`;
                });
        return this;
    }
    from(table) {
        this.statement += ` FROM ${table}`;
        return this;
    }
    execute() {
        console.log(this.statement);
    }
}
const queryString = new Query();
queryString.select(undefined, ['first_name', 'last_name']).from('students').execute();
