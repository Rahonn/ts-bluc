import { BaseCommand } from "./codes/base/BaseCmd";
import { COMMENT_CHAR, CommentCmd } from "./codes/CommentCmd";
import { ErrorOutCmd } from "./codes/ErrorOutCmd";
import { PrinterCmd } from "./codes/PrinterCmd";

export function getCommandFor(line: string, index?: number | null | undefined): BaseCommand {
    
    if (/^PRINT /.exec(line)) {

        return new PrinterCmd(line, index);

    }

    if (line.startsWith(COMMENT_CHAR) || line.startsWith("!") || line.trim() === "") {

        return new CommentCmd(line, index);

    }

    return new ErrorOutCmd(line, index);

}
