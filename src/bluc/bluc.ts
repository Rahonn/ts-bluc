import { getCommandFor } from "./commands";
import { ProcessStack } from "./ProcessStack";

export function run(code: string): ProcessStack {

    const lines: string[] = code.split("\n");
    console.log(lines);
    
    const stack = new ProcessStack();

    for (let i = 0; i < lines.length; i++) {
        
        stack.add(getCommandFor(lines[i], i));

    }

    return stack;

}
