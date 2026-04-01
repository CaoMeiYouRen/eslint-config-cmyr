function takesString(value: string): string {
    return value.toUpperCase()
}

async function fetchPayload(): Promise<any> {
    return {
        nested: {
            value: 'strict mode',
            execute() {
                return 'done'
            },
        },
    }
}

export async function runStrictModeDemo(): Promise<string> {
    const payload: any = await fetchPayload()

    fetchPayload()

    console.info(payload.nested.value)
    console.info(payload.nested.execute())
    console.info(takesString(payload))

    return payload
}
