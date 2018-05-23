import {
    observable,
    action,
    configure
} from 'mobx'

// 在严格模式下，不允许在 action 外更改任何状态。 推荐在状态复杂的大型应用中使用严格模式。
configure({enforceActions: true});
// configure({enforceActions: "strict"});

class ChangeNameStore {

    @observable name = "sun"

    @action
    changeName() {
        if (this.name === "sun") {
            this.name = "wen"
        } else {
            this.name = "sun"
        }
    }
}

export default new ChangeNameStore();
