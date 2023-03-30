import { Commands } from "../CommandType.ts";
import { BaseCommand } from "./base/BaseCmd.ts";

export const COMMENT_CHAR = "#";

export class CommentCmd extends BaseCommand {

    constructor(line: string, index: number | null | undefined) {
        
        super(line, index, Commands.COMMENT)

    }

    public parse(): boolean {
        
        return true;

    }

    public getData() {
        
        return {

            line: this.line

        };

    }

}
