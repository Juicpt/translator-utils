import { TranslatorModuleFunction } from '../types.js'
import { SOGOU_LANGUAGE, SupportedLanguage } from '../misc.js'
import axiosFetch from 'translator-utils-axios-helper'

const SogouBrowserTranslator: TranslatorModuleFunction<"sogou_browser"> = async (text = '', source = 'auto', target, raw) => {
    if (!text) {return await Promise.reject('Empty text #SogouTranslator ')}
    if (!SupportedLanguage(SOGOU_LANGUAGE, target || 'en') || (source !== 'auto' && !SupportedLanguage(SOGOU_LANGUAGE, source || 'en'))) {return await Promise.reject('Not supported target language #SogouTranslator ')}

    let body = JSON.stringify({
        from_lang: source,
        to_lang: target,
        trans_frag: text instanceof Array ? text.map(x => ({text: x})) : [{text}]
    })
    return await new Promise(async (resolve, reject) => {
        axiosFetch.post('https://go.ie.sogou.com/qbpc/translate', `S-Param=${body}`).then(response => {
            if (response?.data?.data?.trans_result && response?.data?.data?.trans_result instanceof Array) {
                resolve(raw ? response.data : (response.data.data.trans_result.map((x: any) => x.trans_text).join("\n") || ''))
            }
            reject(raw ? response.data : 'Invalid content #SogouTranslator ')
        }).catch(e => {
            reject(raw ? e : e.toString())
        })
    })
}

export {SogouBrowserTranslator}
