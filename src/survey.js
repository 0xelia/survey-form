import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
    state: () => ({
        questions: [
            {
                question: 'Che tipo di azienda possiedi?',
                options: ['P.Iva', 'Società di persone', 'Società di Capitali'],
            },
            {
                question: 'Sai leggere il tuo bilancio o lasci tutto in mano al tuo Commercialista?',
                options: [
                'Non l\'ho mai letto',
                'Ogni tanto ne parlo col Commercialista', 
                'Ho sotto mano tutti i dati'
                ],
            },
            {
                question: 'Quanto investi in Marketing?',
                options: [
                'Non investo',
                'dal 3 al 10% del fatturato', 
                'Oltre il 10% del fatturato'
                ],
            },
            {
                question: 'Hai un buon motivo per fare scegliere i tuoi prodotti o servizi invece di quelli della concorrenza?',
                options: [
                'No',
                'Si, ed è diverso dalla qualità', 
                'Si. per questo sono il leader del mercato'
                ],
            },
            {
                question: 'Il tuo target è chiaro e specifico?',
                options: [
                'Vendo tutto a tutti',
                'Ho due target ben distinti', 
                'Ho un solo target'
                ],
            },
            {
                question: 'Quanti canali di vendita usi attualmente (es .Vendita telefonica, Appuntamenti dai clienti, Sito E-commerce, ecc.)',
                options: [
                'Ne utilizzo solo uno',
                'Da 2 a 3', 
                'Più di 3'
                ],
            },
            {
                question: 'Fai offerte continue ai tuoi clienti come incentivo per farli acquistare più spesso?',
                options: [
                'No, mai',
                'Raramente', 
                'Con regolarità'
                ],
            },
        ],
        answers: [],
        currentQuestion : 0,
        bar: 0,
    }),
    getters: {
        barLength(){
            const length = 100 * this.currentQuestion / this.questions.length
            return parseInt(length)
        }
    },
    actions: {
        registerAnswer(question, answer){
            const answerObj = {
                question: question,
                answer: answer
            }
            
            this.answers.push(answerObj)
            console.log(this.answers)
        },
        nextQuestion(question, answer){
            this.registerAnswer(question, answer)
            this.currentQuestion++
        }
    }
})