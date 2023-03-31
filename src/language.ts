import { BAIDU_LIST, BING_LIST, DEEPL_LIST, GOOGLE_LIST, SOGOU_LIST, Target, YANDEX_LIST } from "types.js"

export const BAIDU_LANGUAGE_OBJECT: {[p in BAIDU_LIST]: string} = {"zh":"中文","jp":"日语","jpka":"日语假名","th":"泰语","fra":"法语","en":"英语","spa":"西班牙语","kor":"韩语","tr":"土耳其语","vie":"越南语","ms":"马来语","de":"德语","ru":"俄语","ir":"伊朗语","ara":"阿拉伯语","est":"爱沙尼亚语","be":"白俄罗斯语","bul":"保加利亚语","hi":"印地语","is":"冰岛语","pl":"波兰语","fa":"波斯语","dan":"丹麦语","tl":"菲律宾语","fin":"芬兰语","nl":"荷兰语","ca":"加泰罗尼亚语","cs":"捷克语","hr":"克罗地亚语","lv":"拉脱维亚语","lt":"立陶宛语","rom":"罗马尼亚语","af":"南非语","no":"挪威语","pt_br":"巴西语","pt":"葡萄牙语","swe":"瑞典语","sr":"塞尔维亚语","eo":"世界语","sk":"斯洛伐克语","slo":"斯洛文尼亚语","sw":"斯瓦希里语","uk":"乌克兰语","iw":"希伯来语","el":"希腊语","hu":"匈牙利语","hy":"亚美尼亚语","it":"意大利语","id":"印尼语","sq":"阿尔巴尼亚语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","eu":"巴斯克语","bn":"孟加拉语","bs":"波斯尼亚语","gl":"加利西亚语","ka":"格鲁吉亚语","gu":"古吉拉特语","ha":"豪萨语","ig":"伊博语","iu":"因纽特语","ga":"爱尔兰语","zu":"祖鲁语","kn":"卡纳达语","kk":"哈萨克语","ky":"吉尔吉斯语","lb":"卢森堡语","mk":"马其顿语","mt":"马耳他语","mi":"毛利语","mr":"马拉提语","ne":"尼泊尔语","or":"奥利亚语","pa":"旁遮普语","qu":"凯楚亚语","tn":"塞茨瓦纳语","si":"僧加罗语","ta":"泰米尔语","tt":"塔塔尔语","te":"泰卢固语","ur":"乌尔都语","uz":"乌兹别克语","cy":"威尔士语","yo":"约鲁巴语","yue":"粤语","wyw":"文言文","cht":"中文繁体"}
export const GOOGLE_LANGUAGE_OBJECT: {[p in GOOGLE_LIST]: string} = {"sq":"阿尔巴尼亚语","ar":"阿拉伯语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","ee":"埃维语","ay":"艾马拉语","ga":"爱尔兰语","et":"爱沙尼亚语","or":"奥利亚语","om":"奥罗莫语","eu":"巴斯克语","be":"白俄罗斯语","bm":"班巴拉语","bg":"保加利亚语","is":"冰岛语","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","bho":"博杰普尔语","af":"布尔语(南非荷兰语)","tt":"鞑靼语","da":"丹麦语","de":"德语","dv":"迪维希语","ti":"蒂格尼亚语","doi":"多格来语","ru":"俄语","fr":"法语","sa":"梵语","tl":"菲律宾语","fi":"芬兰语","fy":"弗里西语","km":"高棉语","ka":"格鲁吉亚语","gom":"贡根语","gu":"古吉拉特语","gn":"瓜拉尼语","kk":"哈萨克语","ht":"海地克里奥尔语","ko":"韩语","ha":"豪萨语","nl":"荷兰语","ky":"吉尔吉斯语","gl":"加利西亚语","ca":"加泰罗尼亚语","cs":"捷克语","kn":"卡纳达语","co":"科西嘉语","kri":"克里奥尔语","hr":"克罗地亚语","qu":"克丘亚语","ku":"库尔德语（库尔曼吉语）","ckb":"库尔德语（索拉尼）","la":"拉丁语","lv":"拉脱维亚语","lo":"老挝语","lt":"立陶宛语","ln":"林格拉语","lg":"卢干达语","lb":"卢森堡语","rw":"卢旺达语","ro":"罗马尼亚语","mg":"马尔加什语","mt":"马耳他语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mk":"马其顿语","mai":"迈蒂利语","mi":"毛利语","mni-mtei":"梅泰语（曼尼普尔语）","mn":"蒙古语","bn":"孟加拉语","lus":"米佐语","my":"缅甸语","hmn":"苗语","xh":"南非科萨语","zu":"南非祖鲁语","ne":"尼泊尔语","no":"挪威语","pa":"旁遮普语","pt":"葡萄牙语","ps":"普什图语","ny":"齐切瓦语","ak":"契维语","ja":"日语","sv":"瑞典语","sm":"萨摩亚语","sr":"塞尔维亚语","nso":"塞佩蒂语","st":"塞索托语","si":"僧伽罗语","eo":"世界语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","gd":"苏格兰盖尔语","ceb":"宿务语","so":"索马里语","tg":"塔吉克语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","tr":"土耳其语","tk":"土库曼语","cy":"威尔士语","ug":"维吾尔语","ur":"乌尔都语","uk":"乌克兰语","uz":"乌兹别克语","es":"西班牙语","iw":"希伯来语","el":"希腊语","haw":"夏威夷语","sd":"信德语","hu":"匈牙利语","sn":"修纳语","hy":"亚美尼亚语","ig":"伊博语","ilo":"伊洛卡诺语","it":"意大利语","yi":"意第绪语","hi":"印地语","su":"印尼巽他语","id":"印尼语","jw":"印尼爪哇语","en":"英语","yo":"约鲁巴语","vi":"越南语","zh-tw":"中文（繁体）","zh-cn":"中文（简体）","ts":"宗加语"}
export const DEEPL_LANGUAGE_OBJECT: {[p in DEEPL_LIST]: string} = {"en":"英语","en-us":"英语（美式）","en-gb":"英语（英式）","de":"德语","fr":"法语","es":"西班牙语","it":"意大利语","nl":"荷兰语","pl":"波兰语","ru":"俄语","pt":"葡萄牙语","pt-pt":"葡萄牙语","pt-br":"葡萄牙语（巴西）","ja":"日语","zh":"中文（简体）","bg":"保加利亚语","cs":"捷克语","da":"丹麦语","et":"爱沙尼亚语","fi":"芬兰语","el":"希腊语","hu":"匈牙利语","id":"印尼语","lv":"拉脱维亚语","lt":"立陶宛语","ro":"罗马尼亚语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sv":"瑞典语","uk":"乌克兰语","tr":"土耳其语","ko":"韩语","nb":"书面挪威语"}
export const BING_LANGUAGE_OBJECT: {[p in BING_LIST]: string} = {"lzh":"Chinese (Literary)","ikt":"Inuinnaqtun","iu-latn":"Inuktitut (Latin)","mn-cyrl":"Mongolian (Cyrillic)","mn-mong":"Mongolian (Traditional)","hsb":"上索布语","zh-hans":"中文 (简体)","zh-hant":"中文 (繁体)","da":"丹麦语","uk":"乌克兰语","uz":"乌兹别克语","ur":"乌尔都语","nb":"书面挪威语","hy":"亚美尼亚语","ru":"俄语","bg":"保加利亚语","tlh-latn":"克林贡语 (拉丁文)","hr":"克罗地亚语","otq":"克雷塔罗奥托米语","is":"冰岛语","gl":"加利西亚语","ca":"加泰罗尼亚语","hu":"匈牙利语","af":"南非荷兰语","kn":"卡纳达语","hi":"印地语","id":"印度尼西亚语","gu":"古吉拉特语","kk":"哈萨克语","iu":"因纽特语","tk":"土库曼语","tr":"土耳其语","ty":"塔希提语","sr-latn":"塞尔维亚语 (拉丁文)","sr-cyrl":"塞尔维亚语 (西里尔文)","or":"奥里亚语","cy":"威尔士语","bn":"孟加拉语","yua":"尤卡特克玛雅语","ne":"尼泊尔语","ba":"巴什基尔语","eu":"巴斯克语","he":"希伯来语","el":"希腊语","ku":"库尔德语 (中)","kmr":"库尔德语 (北)","de":"德语","it":"意大利语","lv":"拉脱维亚语","cs":"捷克语","ti":"提格利尼亚语","fj":"斐济语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","pa":"旁遮普语","ja":"日语","ps":"普什图语","ky":"柯尔克孜语","ka":"格鲁吉亚语","mi":"毛利语","to":"汤加语","fo":"法罗语","fr":"法语","fr-ca":"法语 (加拿大)","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","ht":"海地克里奥尔语","ga":"爱尔兰语","et":"爱沙尼亚语","sv":"瑞典语","zu":"祖鲁语","lt":"立陶宛语","yue":"粤语 (繁体)","so":"索马里语","ug":"维吾尔语","my":"缅甸语","ro":"罗马尼亚语","lo":"老挝语","fi":"芬兰语","mww":"苗语","en":"英语","nl":"荷兰语","fil":"菲律宾语","sm":"萨摩亚语","pt":"葡萄牙语 (巴西)","pt-pt":"葡萄牙语 (葡萄牙)","bo":"藏语","es":"西班牙语","vi":"越南语","prs":"达里语","dv":"迪维希语","az":"阿塞拜疆语","am":"阿姆哈拉语","sq":"阿尔巴尼亚语","ar":"阿拉伯语","as":"阿萨姆语","tt":"鞑靼语","ko":"韩语","mk":"马其顿语","mg":"马拉加斯语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mt":"马耳他语","km":"高棉语"}
export const SOGOU_LANGUAGE_OBJECT: {[p in SOGOU_LIST]: string} = {"ar":"阿拉伯语","pl":"波兰语","da":"丹麦语","de":"德语","ru":"俄语","fr":"法语","fi":"芬兰语","ko":"韩语","nl":"荷兰语","cs":"捷克语","pt":"葡萄牙语","ja":"日语","sv":"瑞典语","th":"泰语","tr":"土耳其语","es":"西班牙语","hu":"匈牙利语","en":"英语","it":"意大利语","vi":"越南语","zh-CHS":"中文"}
export const YANDEX_LANGUAGE_OBJECT: {[p in YANDEX_LIST]: string} = {"af":"Afrikaans","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","az":"Azerbaijani","ba":"Bashkir","eu":"Basque","be":"Belarusian","bn":"Bengali","bs":"Bosnian","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ceb":"Cebuano","zh":"Chinese","cv":"Chuvash","hr":"Croatian","cs":"Czech","da":"Danish","nl":"Dutch","sjn":"Elvish (Sindarin)","emj":"Emoji","en":"English","eo":"Esperanto","et":"Estonian","fi":"Finnish","fr":"French","gl":"Galician","ka":"Georgian","de":"German","el":"Greek","gu":"Gujarati","ht":"Haitian","he":"Hebrew","mrj":"Hill Mari","hi":"Hindi","hu":"Hungarian","is":"Icelandic","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kk":"Kazakh","kazlat":"Kazakh (Latin)","km":"Khmer","ko":"Korean","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Maori","mr":"Marathi","mhr":"Mari","mn":"Mongolian","ne":"Nepali","no":"Norwegian","pap":"Papiamento","fa":"Persian","pl":"Polish","pt":"Portuguese","pt-br":"Portuguese (Brazilian)","pa":"Punjabi","ro":"Romanian","ru":"Russian","gd":"Scottish Gaelic","sr":"Serbian","sr-latn":"Serbian (Latin)","si":"Sinhalese","sk":"Slovak","sl":"Slovenian","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tl":"Tagalog","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","tr":"Turkish","udm":"Udmurt","uk":"Ukrainian","ur":"Urdu","uz":"Uzbek","uzbcyr":"Uzbek (Cyrillic)","vi":"Vietnamese","cy":"Welsh","xh":"Xhosa","sah":"Yakut","yi":"Yiddish","zu":"Zulu"}
