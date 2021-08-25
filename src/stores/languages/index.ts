import { makeAutoObservable } from "mobx";
import { LanguageAvailable, LanguageParams } from "../../models";

export class LanguageStore {
    public languageType: LanguageAvailable = 'enUS';
    private languageString: LanguageParams = this.loadLanguage();

    constructor() {
        makeAutoObservable(this);
    }

    private loadLanguage(languageType?: LanguageAvailable): LanguageParams {
        let language = '';

        if (languageType) {
            language = languageType;
        } else {
            language = window.localStorage.getItem('casanje-studios/language') || 'enUS';
        }

        this.languageType = language as LanguageAvailable;

        switch (language) {
            case 'enUS': return require('./translations/en-us.json') as LanguageParams;
            case 'ptBR': return require('./translations/pt-br.json') as LanguageParams;
            default: return require('./translations/pt-br.json') as LanguageParams;
        }
    }

    public setLanguage(newLanguage: LanguageAvailable): void {
        const cachedLanguage = window.localStorage.getItem('casanje-studios/language') || '';
        
        if (cachedLanguage !== newLanguage) {
            window.localStorage.setItem('casanje-studios/language', newLanguage);
            window.location.reload();
        }
    }

    public getLanguage(): LanguageParams {
        return this.languageString;
    }
}