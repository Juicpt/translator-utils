import { expect, test, describe } from "vitest"
import { GoogleBrowserTranslate, GoogleTranslate, GoogleTranslateTk } from "../src/source/google.mjs"

test('Google TK', async () => {
    expect(GoogleTranslateTk('test content')).toEqual('531820.985965')
})

describe('Google translate(web)', () => {
    test.concurrent('English', async ({ expect }) => {
        expect(await GoogleTranslate('hello', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Japanese', async ({ expect }) => {
        expect(await GoogleTranslate('こんにちわ', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Simplified Chinese', async ({ expect }) => {
        expect(await GoogleTranslate('你好', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Korean', async ({ expect }) => {
        expect(await GoogleTranslate('안녕하세요', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Empty text', async ({ expect }) => {
        await expect(GoogleTranslate('', 'zh-cn', false)).rejects.toMatch('Empty text #GoogleTranslate ')
    })
})

describe('Google translate(browser)', () => {
    test.concurrent('English', async ({ expect }) => {
        expect(await GoogleBrowserTranslate('hello', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Japanese', async ({ expect }) => {
        expect(await GoogleBrowserTranslate('こんにちわ', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Simplified Chinese', async ({ expect }) => {
        expect(await GoogleBrowserTranslate('你好', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Korean', async ({ expect }) => {
        expect(await GoogleBrowserTranslate('안녕하세요', 'zh-cn', false)).toMatch('你好')
    })
    test.concurrent('Empty text', async ({ expect }) => {
        await expect(GoogleBrowserTranslate('', 'zh-cn', false)).rejects.toMatch('Empty text #GoogleTranslate ')
    })
})