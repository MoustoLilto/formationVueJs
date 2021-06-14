/* eslint-disable no-param-reassign */
const headerPlugin = {
    install(Vue, store) {
        Vue.prototype.$header = {
            addToast(color, title, message) {
                const id = store.state.toastList.length + 1;
                store.state.toastList.push({
                    id,
                    color,
                    value: true,
                    title,
                    message,
                });
            },

            removeToast(position) {
                store.state.toastList.splice(position, 1);
            },
        };
    },
};

export default headerPlugin;
