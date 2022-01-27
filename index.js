// pinia-plugin-undo-redo

function clone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (error) {
        return obj;
    }
}

export default function createUndoRedoPlugin(options) {
    // options
    const { store } = options;
    const cloned = () => clone(store.$state);
    const setStore = (state) => store.$patch(state);
    const stack = [cloned()];
    let pluginAction = false;

    store.undo = () => {
        pluginAction = true;

        stack.pop();
        const current = stack[stack.length - 1];
        setStore(current);
    };
    store.redo = () => {
        pluginAction = true;

        const current = stack[stack.length - 1];
        setStore(current);
    };
    store.$subscribe(() => {
        if (pluginAction) {
            pluginAction = false;
            return;
        }
        stack.push(cloned());
    });
}
