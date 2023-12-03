import { describe, expect, it } from 'bun:test'
import { app } from '../src/main.ts'

describe('Elysia', () => {
    it('return a response', async () => {
        const response = await app.handle(
            new Request('http://localhost:3000')
        ).then(res => res.text())

        expect(response).toBe('Hello Elysia')
    })
})
