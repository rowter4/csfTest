import { Injectable } from "@angular/core";

@Injectable()
export class MainService {

    private _list: [] = []

    set orderList(list: []) {
        this._list = list
    }

    get orderList(): [] {
        return this._list
    }

}
