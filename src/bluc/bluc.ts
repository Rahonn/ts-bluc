import { getCommandFor } from "./commands.ts";
import { ProcessStack } from "./ProcessStack.ts";

export function run(code: string): ProcessStack {

    const lines: string[] = code.split("\n");
    console.log(lines);
    
    const stack = new ProcessStack();

    for (let i = 0; i < lines.length; i++) {
        
        stack.add(getCommandFor(lines[i], i));

    }

    return stack;

}
