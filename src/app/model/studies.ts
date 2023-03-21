export class Studies {
    id?: number;
    schoolName: string;
    title: string;

    constructor( schoolName: string, title: string){
        this.schoolName = schoolName;
        this.title = title;
    }
}

