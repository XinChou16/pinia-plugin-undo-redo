<script>
import { computed } from 'vue'
import { useStore } from './store'

export default {
    setup() {
        const store = useStore()
        const count = computed(() => store.count)

        return { count, store }
    }
}
</script>

<template>
    <div>
        <p>
            pinia-plugin-undo-redo
        </p>
        <p>
            Open devtools for look more
        </p>
        <p>
            count: {{ count }}
        </p>
        <p>
            <button @click="store.increment">+</button>
            <button @click="store.decrement">-</button>
        </p>
        <p>
            <button @click="store.undo">undo</button>
            <button @click="store.redo">redo</button>
        </p>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
    margin-right: 30px;
}
</style>
