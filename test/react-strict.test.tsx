interface StrictReactPayload {
    title: string
    nested: {
        value: string
        execute: () => string
    }
}

async function fetchStrictPayload(): Promise<any> {
    return {
        title: 'React strict mode',
        nested: {
            value: 'strict payload',
            execute() {
                return 'done'
            },
        },
    }
}

export async function runReactStrictDemo(): Promise<StrictReactPayload> {
    const payload: any = await fetchStrictPayload()

    fetchStrictPayload()

    console.info(payload.nested.value)
    console.info(payload.nested.execute())

    return payload
}
