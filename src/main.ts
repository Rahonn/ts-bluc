import { run } from "./bluc/bluc.ts";
import { ErrorOutCmd } from "./bluc/codes/ErrorOutCmd.ts";
import { PrinterCmd } from "./bluc/codes/PrinterCmd.ts";
import { Commands } from "./bluc/CommandType.ts";

const blucCode = `PRINT Hello world!
PRINT hi

#PRINT hi
!PRINT hi`

const cmds = run(blucCode).getStack();

for (let i = 0; i < cmds.length; i++) {

    if (cmds[i].parse()) {

        if (cmds[i].getType() === Commands.PRINT) {

            const p: PrinterCmd = cmds[i] as PrinterCmd;

            console.log(p.getData().text);
            

        }

    } else {

        console.log(`Error: ${(cmds[i] as ErrorOutCmd).getData().line}`);
        break;

    }

}
