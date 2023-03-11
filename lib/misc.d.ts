import { Target } from "types.js";
export declare const BAIDU_LANGUAGE: Target['baidu'][];
export declare const GOOGLE_LANGUAGE: Target['google'][];
export declare const DEEPL_LANGUAGE: Target['deepl'][];
export declare const BING_LANGUAGE: Target['microsoft'][];
export declare const SOGOU_LANGUAGE: Target['sogou'][];
export declare const YANDEX_LANGUAGE: Target['yandex'][];
export declare const SupportedLanguage: <L extends Target[P], P extends keyof Target = "google">(source: P, language: L) => boolean;
export declare const IsChs: (lang?: string) => boolean;
export declare const IsCht: (lang?: string) => boolean;
