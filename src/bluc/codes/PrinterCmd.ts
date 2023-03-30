import { Commands } from "../CommandType.ts";
import { BaseCommand } from "./base/BaseCmd.ts";

export class PrinterCmd extends BaseCommand {

    public text: string | null;

    constructor(line: string, index: number | null | undefined) {

        super(line, index, Commands.PRINT);
        this.text = null;

    }

    public parse(): boolean {
        
        this.text = this.line.slice(6);

        return true;

    }

    public getData() {
        
        return {

            text: this.text

        }

    }

}
