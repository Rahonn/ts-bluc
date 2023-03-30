import { BaseCommand } from "./codes/base/BaseCmd.ts";

export class ProcessStack {

    public stack: BaseCommand[];
    public currentItem: number;

    constructor() {
        
        this.stack = []
        this.currentItem = 0

    }

    public add(cmd: BaseCommand) {

        this.stack.push(cmd);

    }

    public remove(cmd: BaseCommand) {

        const index = this.stack.indexOf(cmd);

        if (index > -1) {

            this.stack.splice(index, 1);

        }

    }

    public getStack(): BaseCommand[] {

        return this.stack;

    }

    public next(): BaseCommand | null {

        this.currentItem++;

        return this.stack[this.currentItem] || null

    }

    public getTotal(): number {

        return this.stack.length;
        
    }

    public get(i: number): BaseCommand | null {

        return this.stack[i];

    }

}
