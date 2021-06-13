type containNumberOptionsType =
    | boolean
    | { minRepition: number, maxRepition: number }
    | { minRepition: number, maxRepition: true }
    | { minRepition: true, maxRepition: number }
    | number

type containCapitalLettersOptionType =
    | boolean
    | { minRepition: number, maxRepition: number }
    | { minRepition: number, maxRepition: true }
    | { minRepition: true, maxRepition: number }
    | number

type isEmptyOptionType = true | false
