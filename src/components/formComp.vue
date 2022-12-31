<template>
    <div class="w-[700px] h-[500px] bg-slate-200 rounded-xl flex flex-col mx-3 relative p-6 z-50 overflow-hidden">
        <div class="text-center py-4 rounded-t-xl bg-slate-400 font-bold text-white -mt-6 -mx-6">
            {{  title }}
        </div>
        <div class="w-full h-4 my-4 relative rounded-full bg-slate-300">
            <div class="absolute h-full bg-blue-700 rounded-full transition-all duration-500 ease-in-out"
            :style="`width: ${barLength}%`" ></div>
        </div>
        <div v-if="currentQuestion < questions.length" class="grow">
            <template v-for="(el, i) in questions" :key="i">
                <!-- question body -->
                <div class="w-full h-full flex flex-col" v-if="i === currentQuestion">
                    <h4 class="text-center font-bold text-lg">
                        {{ el.question }}
                    </h4>
                    <ul class="flex flex-col gap-5 grow justify-center">
                        <li 
                        class="animate__animated animate__slideInLeft px-8 py-3 rounded-full bg-white text-black flex items-center gap-4 cursor-pointer" 
                        :style="`animation-delay: ${iOpt / 10}s`"
                        v-for="(option, iOpt) in el.options" :key="iOpt"
                        @click="nextQuestion(el.question,option)" >
                            <div class="w-3 h-3 border-2 border-slate-500 rounded-full -ml-3 cursor-pointer"> </div> <p> {{ option }} </p>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <div v-else class="grow p-6 flex flex-col items-center gap-6">
            <h4 class="text-center text-xl font-bold">
                Vuoi sapere che Imprenditore sei?
            </h4>
            <input class="px-8 py-3 rounded-full w-full" type="email" name="email" placeholder="inserisci qui la tua mail" id="">
        </div>
    </div>
</template>

<script>
    import { useSurveyStore } from '../survey';
    import { mapState } from 'pinia';
    import { mapActions } from 'pinia';

    export default {
        data(){
            return {
                title: 'Che tipo di imprenditore sei?'
            }
        },  
        computed: {
        ...mapState(useSurveyStore, ['questions', 'currentQuestion', 'answers','barLength']),
        },
        methods: {
            ...mapActions(useSurveyStore,['nextQuestion'])
        }
    }
</script>

<style lang="scss" scoped>

</style>