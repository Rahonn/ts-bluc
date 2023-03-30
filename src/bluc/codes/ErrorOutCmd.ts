import { Commands } from "../CommandType";
import { BaseCommand } from "./base/BaseCmd";

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
