import { Commands } from "../../CommandType";

export abstract class BaseCommand {

    public line: string;
    public index: number | null | undefined;
    public type: Commands;

    constructor(line: string, index: number | null | undefined, type: Commands) {

        this.line = line;
        this.index = index;
        this.type = type;

    }

    public abstract parse(): boolean;

    public abstract getData(): any;

    public getType(): Commands {

        return this.type;

    }

}
