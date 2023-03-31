import { Target } from "types.js";
export declare const BAIDU_LANGUAGE: Target[];
export declare const GOOGLE_LANGUAGE: Target[];
export declare const DEEPL_LANGUAGE: Target[];
export declare const BING_LANGUAGE: Target[];
export declare const SOGOU_LANGUAGE: Target[];
export declare const YANDEX_LANGUAGE: Target[];
export declare const SupportedLanguage: <L extends Target>(List: Target[], language: L) => boolean;
export declare const IsChs: (lang?: string) => boolean;
export declare const IsCht: (lang?: string) => boolean;
export declare const generateUUID: () => Promise<string>;
