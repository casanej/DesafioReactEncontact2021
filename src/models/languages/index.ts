import { LanguageHome } from "./home";

export type LanguageAvailable = 'ptBR' | 'enUS';
export const LanguageFlagsAvailable = [
    { flag: 'BR', name: 'Português (Brasil)', code: 'ptBR' },
    { flag: 'US', name: 'English (United States)', code: 'enUS' }
];

export interface LanguageParams {
    home: LanguageHome;
}
