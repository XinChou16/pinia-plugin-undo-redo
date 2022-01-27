import { createPinia, defineStore } from 'pinia'
import PiniaUndoAndRedo from '../../index'

const pinia = createPinia()

pinia.use(PiniaUndoAndRedo)

export const useStore = defineStore('main', {
    state: () => ({
        count: 100
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
})

export default pinia;