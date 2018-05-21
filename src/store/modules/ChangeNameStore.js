import {
    observable,
    action,
    configure
} from 'mobx'

configure({enforceActions: "strict"});

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
