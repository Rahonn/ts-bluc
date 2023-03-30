import { Commands } from "../CommandType.ts";
import { BaseCommand } from "./base/BaseCmd.ts";

export class ErrorOutCmd extends BaseCommand {

    constructor(line: string, index: number | null | undefined) {
        
        super(line, index, Commands.ERROR)

    }

    public parse(): boolean {
        
        return false;

    }

    public getData() {
        
        return {

            line: this.line

        };

    }

}
